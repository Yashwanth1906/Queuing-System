import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { DJANGO_URL } from '@/config'

interface DepartmentPrediction {
  Department: string;
  predicted_patients: number;
}

export function DepartmentPredictions() {
  const [predictions, setPredictions] = useState<DepartmentPrediction[]>([])
  const [showPredictions, setShowPredictions] = useState(false)

  const fetchTomorrowPredictions = async () => {
      await axios.post(`${DJANGO_URL}/predictpatient/`, {
            "Day":"Monday",
            "Holiday":1,
            "Special_Event":1,
            "Weather":"Sunny"
      }).then((res)=>{
        console.log(res.data);
        setPredictions(res.data);
        setShowPredictions(true)
      }).catch((e)=>{
            console.log(e);
            alert(e)
      })
  }

  return (
    <Card className="p-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Department-wise Predictions</CardTitle>
        <Button 
          onClick={fetchTomorrowPredictions}
          className="bg-[#2E6F40] hover:bg-[#253D2C] text-white"
        >
          Show Tomorrow's Predictions
        </Button>
      </CardHeader>
      <CardContent>
        {showPredictions && (
          <div className="mt-4 space-y-4">
            {predictions?.map((pred) => (
              <div key={pred.Department} className="flex items-center justify-between p-3 bg-[#CFFFDC] rounded-lg">
                <span className="font-medium">{pred.Department}</span>
                <span className="text-[#2E6F40] font-bold">
                  {pred.predicted_patients} patients expected
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}