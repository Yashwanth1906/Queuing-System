import { DepartmentPredictions } from './departmentprediction'
import { DepartmentTrends } from './departmentTrends'
import { DiseaseTrends } from './diseasetrend'

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <DepartmentPredictions />
      <DepartmentTrends />
      <DiseaseTrends />
    </div>
  )
}