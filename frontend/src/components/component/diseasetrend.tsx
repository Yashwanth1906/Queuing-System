import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BACKEND_URL, HOSPITAL_CODE } from '@/config'

interface DiseaseData {
  date: string;
  disease: string;
  cases: number;
}

export function DiseaseTrends() {
  const [diseaseData, setDiseaseData] = useState<DiseaseData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDiseaseData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/analytics/disease-trends`, {
          headers: { code: HOSPITAL_CODE }
        })
        setDiseaseData(response.data.trends)
      } catch (error) {
        console.error('Error fetching disease trends:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDiseaseData()
  }, [])

  // Sample data for demonstration
  const sampleDiseaseData: DiseaseData[] = [
    { date: 'Mon', disease: 'Respiratory Infections', cases: 25 },
    { date: 'Tue', disease: 'Respiratory Infections', cases: 30 },
    { date: 'Wed', disease: 'Respiratory Infections', cases: 28 },
    { date: 'Thu', disease: 'Respiratory Infections', cases: 35 },
    { date: 'Fri', disease: 'Respiratory Infections', cases: 32 }
  ]

  const data = loading ? sampleDiseaseData : diseaseData

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Disease Trends in the Area</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cases" fill="#8884d8" name="Number of Cases" />
          </BarChart>
        </div>
      </CardContent>
    </Card>
  )
}