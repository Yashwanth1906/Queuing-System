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

interface AddWardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  code : string
}

export function AddWardDialog({ open, onOpenChange,code }: AddWardDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    totalBeds: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`${BACKEND_URL}/api/hospital/addward`,formData,{
      headers:{
        code:code
      }
    }).then((res)=>{
      console.log(res.data);
      if(res.data.success === true){
        alert("Added ward");
      }
    }).catch((e)=>{
      alert(e);
    })
    console.log(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Ward</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Ward Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="totalBeds">Total Beds</Label>
              <Input
                id="totalBeds"
                type="number"
                value={formData.totalBeds}
                onChange={(e) => setFormData({ ...formData, totalBeds: e.target.value })}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#2E6F40] hover:bg-[#68BA7F]">
            Add Ward
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}