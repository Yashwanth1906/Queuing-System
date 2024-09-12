'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'

export function AbhaLogin() {
  const [abhaId, setAbhaId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (abhaId.trim()) {
      setLoading(true)
      setError(null)
      
      try {
        // Replace with your backend API URL
        const response = await axios.post('/api/abhaLogin', { abhaId })
        
        if (response.status === 200) {
          // Navigate to the dashboard on successful login
          //router.push('./pages/patients/patientsdash') // Replace '/dashboard' with your desired route
        }
      } catch (err) {
        // Handle error here
        setError('Failed to log in. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">ABHA Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Input
              type="text"
              placeholder="Enter your ABHA ID"
              value={abhaId}
              onChange={(e) => setAbhaId(e.target.value)}
              required
              disabled={loading}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
