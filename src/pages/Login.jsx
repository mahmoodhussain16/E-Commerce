import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const logIn = (e) => {
    e.preventDefault()
    localStorage.setItem("isLoggedIn", "true")
    navigate("/home")

   
    }
   
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev)=>({ ...prev, [name]: value }));
    };
  
  

  
  return (
    <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
  

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={logIn}>
          {/* <!-- Email Field --> */}
          
            <label className="block text-sm font-medium text-gray-700"
              >Email address</label
            >
          
          <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
          

          {/* <!-- Password Field --> */}
          <label
              className="block text-sm font-medium text-gray-700"
              >Password</label
            >
            
          <input className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* <!-- Submit Button --> */}
          <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
        </form>

        
      </div>
    </div>
    )
    }
  export default Login