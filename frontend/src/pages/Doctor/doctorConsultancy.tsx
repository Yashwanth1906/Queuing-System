import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import { Ward } from "../inventory/ward";


type Medicine = {
  name: string;
  shift: string;
  morning: number;
  afternoon: number;
  night: number;
  days: number;
};

type Injection = {
  name: string;
  dosage: string;
};

type Patient = {
  name: string;
  age: number;
  Gender: string;
  abhaId: string;
  reason: string;
};
interface Ward {
  id: string;
  name: string;
}


export function DoctorConsultancy() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [injections, setInjections] = useState<Injection[]>([]);
  const [feedback, setFeedback] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState<Patient | undefined>();
  const [ward,setWard] = useState<Ward[]>([]);
  const [selectedWardId, setSelectedWardId] = useState<String>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("abhaid");
    console.log(id);
    axios.get(`${BACKEND_URL}/api/hospital/getpatientdetails`, {
      headers: {
        code: HOSPITAL_CODE,
        abhaid: id,
      }
    }).then((data) => {
      setPatient(data.data.patient);
    });
    axios.get(`${BACKEND_URL}/api/hospital/getward`,{
      headers:{
        code:HOSPITAL_CODE
      }
    }).then((data)=>{
      console.log("HI")
      console.log(data.data.ward);
      setWard(data.data.ward);
      console.log(ward)
    })
  }, []);

  useEffect(() => {
    console.log('Updated ward:', ward);
  }, [ward]);
  const navigate = useNavigate();

  const addMedicine = () => {
    setMedicines([...medicines, { name: "", shift: "", morning: 0, afternoon: 0, night: 0, days: 0 }]);
  };

  const updateMedicine = (index: number, field: keyof Medicine, value: any) => {
    const updatedMedicines = [...medicines];
    //@ts-ignore
    updatedMedicines[index][field] = value;
    setMedicines(updatedMedicines);
  };

  const removeMedicine = (index: number) => {
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(index, 1);
    setMedicines(updatedMedicines);
  };

  const addInjection = () => {
    setInjections([...injections, { name: "", dosage: "" }]);
  };

  const updateInjection = (index: number, field: keyof Injection, value: any) => {
    const updatedInjections = [...injections];
    updatedInjections[index][field] = value;
    setInjections(updatedInjections);
  };

  const removeInjection = (index: number) => {
    const updatedInjections = [...injections];
    updatedInjections.splice(index, 1);
    setInjections(updatedInjections);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleWardChange = (value: string) => {
    setSelectedWardId(value);
  };

  const handleSubmit = async () => {
    try {
      const abhaid = patient?.abhaId;
      const medications = { medicines, injections };
      const data = { medications, abhaid, feedback };

      const response = await axios.post(`${BACKEND_URL}/api/doctor/addmedications`, data, {
        headers: {
          code: localStorage.getItem("hospitalcode"),
          Authorization: localStorage.getItem("doctortoken"),
        }
      });
      if (response.data.success) {
        alert("Consultation completed successfully!");
        navigate("/doctordashboard")
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("An error occurred while submitting the consultation data.");
    }
  };
  const handleAdmission = () =>{
    console.log("SelectedWardId: ",selectedWardId);
    axios.post(`${BACKEND_URL}/api/doctor/createadmission`,{
      abhaId:patient?.abhaId,
      wardId : selectedWardId
    },
    {
      headers:{
        code:HOSPITAL_CODE,
        Authorization: localStorage.getItem("doctortoken"),
      }
    }
  ).then((data)=>{
    console.log(data)
    alert("Admission is Created, The bed will be Allocated!")
  })
  }

  return (
    <div className="w-screen h-screen absolute top-0 left-0 right-0 mx-auto bg-[#CFFFDC]">
      {/* Header */}
      <div className="flex items-center justify-between w-screen p-4 border-b bg-[#2E6F40] text-white">
        <h1 className="text-4xl relative font-bold">Consultancy</h1>
        <Link to="/doctorssignin">
          <Button className="ml-auto bg-[#68BA7F] hover:bg-[#253D2C] text-white">Home</Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-32 text-2xl">
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <div className="grid gap-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-4">
                <div className="flex items-center gap-2 text-[#253D2C]">
                  <span className="font-medium">Name:</span>
                  <span>{patient?.name}</span>
                </div>
                <div className="flex items-center gap-2 text-[#253D2C]">
                  <span className="font-medium">AHBAID:</span>
                  <span>{patient?.abhaId}</span>
                </div>
                <div className="flex items-center gap-2 text-[#253D2C]">
                  <span className="font-medium">Gender:</span>
                  <span>{patient?.Gender}</span>
                </div>
                <div className="flex items-center gap-2 text-[#253D2C]">
                  <span className="font-medium">Age:</span>
                  <span>{patient?.age}</span>
                </div>
              </div>
              <div className="grid gap-4 text-[#253D2C]">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Reason for Visit:</span>
                  <span>{patient?.reason}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium">Medical History:</span>
                  <div>
                    <p>Diabetes, Hypertension</p>
                    <Link to="/patienthistory" className="text-[#2E6F40] hover:text-[#68BA7F] underline">
                      View full medical history
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prescriptions Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center text-[#2E6F40] mb-6">Prescriptions</h2>
          {medicines.map((medicine, index) => (
            <div key={index} className="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-center mb-4">
              <Button
                size="icon"
                onClick={() => removeMedicine(index)}
                className="bg-[#2E6F40] hover:bg-[#253D2C]"
              >
                <TrashIcon className="h-5 w-5" />
              </Button>
              <div className="grid gap-2">
  <Label>Medicine Name</Label>
  <Input
    value={medicine.name}
    onChange={(e) => updateMedicine(index, "name", e.target.value)}
  />
</div>

<div className="grid gap-2">
  <Label>Morning</Label>
  <Input
    type="number"
    value={medicine.morning}
    onChange={(e) =>
      updateMedicine(index, "morning", parseInt(e.target.value))
    }
  />
</div>

<div className="grid gap-2">
  <Label>Afternoon</Label>
  <Input
    type="number"
    value={medicine.afternoon}
    onChange={(e) =>
      updateMedicine(index, "afternoon", parseInt(e.target.value))
    }
  />
</div>

<div className="grid gap-2">
  <Label>Night</Label>
  <Input
    type="number"
    value={medicine.night}
    onChange={(e) =>
      updateMedicine(index, "night", parseInt(e.target.value))
    }
  />
</div>

<div className="grid gap-2">
  <Label>Before/After Food</Label>
  <Input
    value={medicine.shift}
    onChange={(e) => updateMedicine(index, "shift", e.target.value)}
  />
</div>

<div className="grid gap-2">
  <Label>Days</Label>
  <Input
    type="number"
    value={medicine.days}
    onChange={(e) => updateMedicine(index, "days", parseInt(e.target.value))}
  />
</div>

              {/* ... [Rest of the medicine inputs remain the same] */}
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <Button onClick={addMedicine} className="bg-[#68BA7F] hover:bg-[#2E6F40] text-white">
              Add Medicine
            </Button>
          </div>
        </div>

        {/* Injections Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-[#2E6F40] mb-6">Injections</h2>
          <div className="grid gap-6">
  {injections.map((injection, index) => (
    <div
      key={index}
      className="grid sm:grid-cols-3 gap-4 items-center"
    >
      <div className="flex items-center justify-end">
        <Button
          size="icon"
          onClick={() => removeInjection(index)}
          className="flex justify-center"
        >
          <TrashIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="grid gap-2">
          <Label>Injection Name</Label>
          <Input
            value={injection.name}
            onChange={(e) => updateInjection(index, "name", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label>Dosage</Label>
          <Input
            value={injection.dosage}
            onChange={(e) => updateInjection(index, "dosage", e.target.value)}
          />
        </div>
      </div>
    </div>
  ))}

  <div className="flex justify-center">
    <Button
      onClick={addInjection}
      className="flex justify-center"
    >
      Add Injection
    </Button>
  </div>
</div>

          {/* ... [Injections content remains the same with updated button colors] */}
        </div>

        {/* Admission Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-[#2E6F40] mb-6">Admission</h2>
          <div className="flex justify-center">
            <Button onClick={openModal} className="bg-[#68BA7F] hover:bg-[#2E6F40] text-white">
              Request Admission
            </Button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-[#2E6F40]">Request Admission</h2>
                <Button variant="ghost" onClick={closeModal} className="text-[#253D2C]">
                  <XIcon className="h-5 w-5" />
                </Button>
              </div>
              {/* ... [Modal content remains the same with updated colors] */}
              <div className="grid gap-6">
  <div className="grid gap-2">
    <Label htmlFor="ward">Ward</Label>
    <Select onValueChange={handleWardChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select Ward" />
      </SelectTrigger>
      <SelectContent>
        {ward.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</div>

<div className="flex justify-between mt-6">
  <Button onClick={closeModal} className="flex justify-center">
    Cancel
  </Button>
  <Button className="flex justify-center" onClick={handleAdmission}>
    Request Bed
  </Button>
</div>

            </div>
          </div>
        )}

        {/* Feedback Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-[#2E6F40] mb-6">Feedback</h2>
          <Textarea
            placeholder="Feedback Summary"
            className="min-h-[100px] border-[#68BA7F] focus:border-[#2E6F40]"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleSubmit} 
              className="bg-[#2E6F40] hover:bg-[#253D2C] text-white"
            >
              Complete Consultancy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

// function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 18l-6-6 6-6" />
//     </svg>
//   );
// }

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
