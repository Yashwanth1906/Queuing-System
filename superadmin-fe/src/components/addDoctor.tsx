import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export type DesignationType = "SENIOR" | "JUNIOR" | "HOD";

interface Department {
  id: string;
  name: string;
}

interface AddDoctorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  code: string;
}

export function AddDoctorDialog({ open, onOpenChange, code }: AddDoctorDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    designation: "" as DesignationType,
    contact: "",
    email: "",
    password: "",
    departmentId: "",
  });

  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    if (open) {
      axios
        .get(`${BACKEND_URL}/api/hospital/getdepartments`, {
          headers: { code },
        })
        .then((response) => {
          setDepartments(response.data.departments);
        })
        .catch((err) => {
          console.error("Error fetching departments:", err);
        });
    }
  }, [open, code]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/doctor/register`, formData, {
        headers: { code },
      });
      console.log(response.data);
      if (response.data.success === true) {
        alert("Doctor registered successfully");
      } else {
        alert(response.data.message || "Failed to register doctor");
      }
    } catch (error) {
      console.error(error);
      alert("Error registering doctor");
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Doctor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="designation">Designation</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, designation: value as DesignationType })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SENIOR">Senior</SelectItem>
                  <SelectItem value="JUNIOR">Junior</SelectItem>
                  <SelectItem value="HOD">HOD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="departmentId">Department</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, departmentId: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((department) => (
                    <SelectItem key={department.id} value={department.id}>
                      {department.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#2E6F40] hover:bg-[#68BA7F]">
            Add Doctor
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
