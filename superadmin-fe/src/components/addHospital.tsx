import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddHospitalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddHospitalDialog({ open, onOpenChange }: AddHospitalDialogProps) {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    location: "",
    city: "",
    state: "",
    dbURL: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios
        .post(`${BACKEND_URL}/api/admin/addhospital`, formData)
        .then((res) => {
          console.log(res.data);
          alert("Hospital added successfully");
        });
    } catch (error) {
      console.error(error);
      alert("Error adding hospital");
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Hospital</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="code">Hospital Code</Label>
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Hospital Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dbURL">Database URL</Label>
              <Input
                id="dbURL"
                value={formData.dbURL}
                onChange={(e) => setFormData({ ...formData, dbURL: e.target.value })}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#2E6F40] hover:bg-[#68BA7F]">
            Add Hospital
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
