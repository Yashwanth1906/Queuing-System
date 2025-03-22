import { InventoryCategory, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const add = async(req,res) =>{
    console.log("HI")
    const {itemName,category,quantity,price,reorderLevel,lastOrderDate,expiryDate} = req.body;
    try{
        const categoryType = "";
        if(category === "Medicine") categoryType = InventoryCategory.Medicine;
        else if(category === "Surgical_Tools") categoryType = InventoryCategory.Surgical_Tools;
        else categoryType = InventoryCategory.Others
        const newMedicine = await prisma.inventory.create({
            data:{
                itemName,
                category:categoryType,
                quantity:parseInt(quantity),
                price:parseFloat(price),
                reorderLevel,
                lastOrderDate,
                expiryDate,
                hospitalId : req.headers.id
            }
        })
        res.json({success:true,data:newMedicine})
    }
    catch(err){
        res.json({success:false,message:err})
    }
}

const supplyChain = async(req,res) =>{
   const prisma = req.prisma;
    const {name,contact,email,password,departmentId,gender,designation} = req.body;
    try{
        if(password.length < 8){
            res.json({success:false,message:"Weak Password"});
        }
        let design = "";
        let hod = false;
        if(designation == "Trainee"){
            design = DesignationType.Trainee
        }else if(designation == "Assistant"){
            design = DesignationType.Assistant
        }
        else if(designation == "Senior"){
            design = DesignationType.Senior
        }
        else{
            design = DesignationType.HeadOfDepartment;
            hod = true;
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass=await bcrypt.hash(password,salt)
        const newDoctor = await prisma.doctors.create({
            data:{
                name,contact,email,password:hashedPass,departmentId,active:true,
                gender:gender,designation:design,hospitalCode:req.headers.code
            }
        })
        const token = createToken(newDoctor.id);
        res.json({success:true,doctor:newDoctor,token:`Bearer ${token}`})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

export {add,supplyChain}
