import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BACKEND_URL, HOSPITAL_CODE } from '@/config'

interface DepartmentTrend {
  date: string;
  [department: string]: number | string;
}

export function DepartmentTrends() {
  const [trends, setTrends] = useState<DepartmentTrend[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/analytics/department-trends`, {
          headers: { code: HOSPITAL_CODE }
        })
        setTrends(response.data.trends)
      } catch (error) {
        console.error('Error fetching trends:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrends()
  }, [])

  // Sample data for demonstration
  const sampleTrends: DepartmentTrend[] = [
    { date: 'Mon', Cardiology: 40, Orthopedics: 30, Pediatrics: 45, 'General Medicine': 55 },
    { date: 'Tue', Cardiology: 45, Orthopedics: 35, Pediatrics: 40, 'General Medicine': 50 },
    { date: 'Wed', Cardiology: 35, Orthopedics: 40, Pediatrics: 50, 'General Medicine': 45 },
    { date: 'Thu', Cardiology: 50, Orthopedics: 45, Pediatrics: 35, 'General Medicine': 60 },
    { date: 'Fri', Cardiology: 45, Orthopedics: 35, Pediatrics: 45, 'General Medicine': 55 }
  ]

  const data = loading ? sampleTrends : trends
  const departments = Object.keys(data[0] || {}).filter(key => key !== 'date')
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300']

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Department-wise Patient Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <LineChart
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
            {departments.map((dept, index) => (
              <Line
                key={dept}
                type="monotone"
                dataKey={dept}
                stroke={colors[index % colors.length]}
                name={dept}
              />
            ))}
          </LineChart>
        </div>
      </CardContent>
    </Card>
  )
}