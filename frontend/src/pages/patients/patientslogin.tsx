import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'
import { Label } from '@/components/ui/label'
import { BACKEND_URL } from '@/config'

export function PatientLogin() {
  const navigate = useNavigate();
  const [abhaId, setAbhaId] = useState<string>('')
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (abhaId.trim()) {
      setLoading(true)
      setError(null)
      
      try {
        // Replace with your backend API URL
        await axios.post(`${BACKEND_URL}/api/patient/login`,{
          email:email,
          password:password,
          abhaId:abhaId
        }).then((data)=>{
          console.log(data.data.token)
          localStorage.setItem("patientToken",data.data.token);
          navigate("/patientdashboard")
        })
      } catch (err) {
        // Handle error here
        setError('Failed to log in. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="flex items-center w-screen absolute top-0 left-0 right-0 justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">ABHA Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Label>Abha Id</Label>
            <Input
              type="text"
              placeholder="Enter your ABHA ID"
              value={abhaId}
              onChange={(e) => setAbhaId(e.target.value)}
              required
              disabled={loading}
            />
            <Label>Email</Label>
            <Input type="" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <Label>Password</Label>
            <Input type='password' placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
            New Patient ? <Link to="/patientregister">Register</Link>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
