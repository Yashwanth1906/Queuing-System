import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { BACKEND_URL } from "@/config";

interface AddDepartmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  code:string
}

export function AddDepartmentDialog({ open, onOpenChange,code }: AddDepartmentDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`${BACKEND_URL}/api/hospital/adddepartment`,
      formData,{
        headers:{
          code:code
        }
    }).then((res)=>{
      console.log(res.data);
    }).catch((e)=>{
      console.log(e);
    })
    onOpenChange(false); 
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Department</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Department Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            {/* <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div> */}
          </div>
          <Button type="submit" className="w-full bg-[#2E6F40] hover:bg-[#68BA7F]">
            Add Department
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}