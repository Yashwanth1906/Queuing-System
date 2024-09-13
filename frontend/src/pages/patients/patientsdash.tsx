import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Placeholder QR code image with smaller dimensions
const QR_CODE_URL = "/placeholder.svg?height=150&width=150"

type Appointment = {
  date: string
  time: string
  day: string
  status: 'confirmed' | 'pending'
  purpose: string
}

type TimeSlot = {
  time: string
  expectedMembers: number
  expectedWaitTime: number
}

export const PatientDashboard: React.FC = () => {
  const [view, setView] = useState<'main' | 'newAppointment' | 'appointmentCancellation' | 'appointmentHistory'>('main')
  const [symptom, setSymptom] = useState('')
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [showQR, setShowQR] = useState(false)
  const [appointments, setAppointments] = useState<Appointment[]>([
    { date: '2023-06-15', time: '10:00', day: 'Thursday', status: 'confirmed', purpose: 'Headache' },
    { date: '2023-06-20', time: '14:30', day: 'Tuesday', status: 'pending', purpose: 'Annual checkup' },
  ])

  const timeSlots: TimeSlot[] = [
    { time: '09:00', expectedMembers: 40, expectedWaitTime: 15 },
    { time: '10:00', expectedMembers: 60, expectedWaitTime: 25 },
    { time: '11:00', expectedMembers: 100, expectedWaitTime: 45 },
    { time: '13:00', expectedMembers: 80, expectedWaitTime: 35 },
    { time: '14:00', expectedMembers: 70, expectedWaitTime: 30 },
    { time: '15:00', expectedMembers: 50, expectedWaitTime: 20 },
  ]

  const getBarColor = (expectedMembers: number) => {
    if (expectedMembers > 80) return 'bg-red-500'
    if (expectedMembers > 50) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const renderMainView = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Medical Dashboard</h2>
      <p>Please select an option from the sidebar to proceed.</p>
    </div>
  )

  const renderNewAppointment = () => (
    <div className="p-4">
      {!symptom ? (
        <form onSubmit={(e) => { e.preventDefault(); setSymptom(e.currentTarget.symptom.value) }}>
          <Input name="symptom" placeholder="Update your symptom" className="mb-4" />
          <Button type="submit">Submit</Button>
        </form>
      ) : !showQR ? (
        <div>
          <h3 className="text-xl font-semibold mb-4">Select a Time Slot</h3>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((slot) => (
              <Card key={slot.time} className="cursor-pointer">
                <CardContent className="p-4">
                  <p className="font-semibold">{slot.time}</p>
                  <div className="w-full h-8 bg-gray-200 mt-2 relative">
                    <div 
                      className={`h-full ${getBarColor(slot.expectedMembers)}`} 
                      style={{ width: `${(slot.expectedMembers / 200) * 100}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                      {slot.expectedWaitTime} min wait
                    </div>
                  </div>
                  <p className="mt-2">Expected: {slot.expectedMembers} patients</p>
                  <p className="text-sm text-muted-foreground">Wait time: {slot.expectedWaitTime} minutes</p>
                  <Button 
                    className="w-full mt-2" 
                    onClick={() => { setSelectedSlot(slot); setShowQR(true); }}
                  >
                    Select
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="w-40 h-40 mx-auto mb-4">
            <img src={QR_CODE_URL} alt="QR Code" className="w-full h-full object-contain" />
          </div>
          <p className="font-semibold">Scan to confirm</p>
          <p className="mt-4">Selected time: {selectedSlot?.time}</p>
          <p className="text-sm text-muted-foreground">Please arrive 10 minutes before your appointment.</p>
          <p className="mt-2">Estimated waiting time: {selectedSlot?.expectedWaitTime} minutes</p>
        </div>
      )}
    </div>
  )

  const renderAppointmentCancellation = () => (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Appointment Cancellation</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert('Verification email sent!') }}>
        <Input name="abhaId" placeholder="Enter your ABHA ID" className="mb-4" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )

  const renderAppointmentHistory = () => (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Appointment History</h3>
      {appointments.map((appointment, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="p-4">
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Day: {appointment.day}</p>
            <p>Status: {appointment.status}</p>
            <p>Purpose: {appointment.purpose}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
  return (
    <div className="flex h-screen w-screen absolute top-0 right-0 left-0 bg-gray-100">
      <aside className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-6">Appointment Dashboard</h2>
        <nav className="space-y-2">
          <Button className="w-full justify-start" onClick={() => { setView('newAppointment'); setShowQR(false); }}>New Appointment</Button>
          <Button className="w-full justify-start" onClick={() => setView('appointmentCancellation')}>Appointment Cancellation</Button>
          <Button className="w-full justify-start" onClick={() => setView('appointmentHistory')}>Appointment History</Button>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        {view === 'main' && renderMainView()}
        {view === 'newAppointment' && renderNewAppointment()}
        {view === 'appointmentCancellation' && renderAppointmentCancellation()}
        {view === 'appointmentHistory' && renderAppointmentHistory()}
      </main>
    </div>
  )
}