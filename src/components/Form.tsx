
import React, { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
// import { MdMailOutline, MdSupportAgent} from "react-icons/md"
import { RegisterUser } from "../utils/ApiCalls";
import {  useNavigate } from 'react-router-dom';
import ShowToast from "../commons/ShowToast";



const Form:React.FC = () => {
  const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        // lastname: "",
        email: "",
        phonenumber: Number.parseFloat("")
        // address: "",
        // experience: "",
    });

    const handleClick =()=>  {
        ShowToast
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setFormData((prevData)=>({
            ...prevData, [name]: value,
        }))
    }
    const RegisterSubmit = async ()=>{
        try {
            const res= await RegisterUser(formData)
            Navigate("/")
            console.log(res)
        } catch (error) {
            return error
        }
        console.log(formData)
    }
  return (
    <div className="px-10 sm:px-6 md:px-12 md:py-12 mt-10 mb-0 ">
        <div className="flex items-start sm:flex-col md:flex-col ">

        <div className="w-full py-10 md:mt-10  rounded-lg px-5 bg-[#f1f1f">
            <div className="">
                <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    RegisterSubmit();
                }} className="space-y-4">
                    <div className=" flex space-x-4">
                    <input 
                        required
                        onChange={handleChange}
                        name="name"  type="text" className="w-full border border-primary bg-[#fffff] rounded-[30px] p-2 placeholder:text-primary outline-none " placeholder="Name" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <input name="email"  onChange={handleChange} type="email" placeholder="Your Email" className="placeholder:text-primary outline-none border border-primary bg-[#fffff] rounded-[30px] p-2" />
                        <input name="phonenumber" onChange={handleChange} type="tel" placeholder="Contact" className="placeholder:text-primary border border-primary bg-[#fffff] rounded-[30px] outline-none p-2" />
                        <button onClick={handleClick}  className=" bg-primary text-white font-bold hover:shadow-none shadow-md rounded-[30px] py-3">Submit</button>
                    </div>
                
                
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Form