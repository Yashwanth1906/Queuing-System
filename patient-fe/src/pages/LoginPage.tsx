import { LoginForm } from "../components/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#253D2C] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#2E6F40] mb-6 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}


