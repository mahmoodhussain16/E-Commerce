import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length <= 2) {
      newErrors.name = "at least 3 chracters"
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Correct Email";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "please same Confirm Password";
    }
    if (formData.password.length < 6) {
      newErrors.password ="at least 6 chracters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSignup = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      localStorage.setItem("isLoggedIn", "true"); 
      navigate("/login"); 
    }
  };
  return (
    <div className="flex min-h-screen">
    <div
      className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://baitussalam.org/images/logo-2.svg"
          alt="Your Company"
        />
        <h2 
          className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign up for your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSignup} className="space-y-6" action="#" method="POST">
         
          <div>
            <label className="block text-sm font-medium text-gray-700"
              >Your Name</label
            >
            <div className="mt-1">
              <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          </div>

          {/* <!-- Email Field --> */}
          <div>
            <label className="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div className="mt-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* <!-- Password Field --> */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div className="mt-1">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />{errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>

          {/* <!-- Confirm Password Field --> */}
          <div>
            <label
          
              className="block text-sm font-medium text-gray-700"
              >Confirm Password</label
            >
            <div className="mt-1">
              <input className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  
                
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  />
                
               {errors.confirmPassword&&  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>

        {/* <!-- Additional Link --> */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            >Sign in</a
          >
        </p>
      </div>
    </div>

    {/* <!-- Right side: Additional content (e.g., features or images) --> */}
    <div
      className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2"
    >
      <div className="p-8 text-center">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Join Us?</h3>
        <p className="mb-4 text-lg text-gray-700">
          Experience the best ecommerce app for all your needs.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Get exclusive discounts and offers on your favorite products.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Fast and secure checkout process tailored for you.
        </p>
      </div>
    </div>
  </div>
   


  )
}

 export default SignupPage;



  


 

  

 
