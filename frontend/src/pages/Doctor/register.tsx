import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL, HOSPITAL_CODE } from '@/config';

interface Department {
  id: string;
  name: string;
}

export function RegisterComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    department: '',
    gender: '',
    designation: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/hospital/departments`, {
      headers: { code: HOSPITAL_CODE }
    })
    .then(response => setDepartments(response.data.departments))
    .catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/doctor/register`,
        formData,
        { headers: { code: HOSPITAL_CODE } }
      );
      
      if (response.data.success) {
        localStorage.setItem('doctortoken', response.data.token);
        navigate('/doctordashboard');
      }
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#CFFFDC] py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-[#2E6F40] text-center mb-6">
          Doctor Registration
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            />
          </div>

          {/* Retype Password */}
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Retype Password
            </label>
            <input
              type="password"
              placeholder="Retype your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError(e.target.value !== formData.password ? 'Passwords do not match' : '');
              }}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Department
            </label>
            <select
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2E6F40] text-white py-3 rounded-lg hover:bg-[#68BA7F] transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
