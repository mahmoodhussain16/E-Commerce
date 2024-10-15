const Footer = () => {
    return (
      < >
   <div className="relative z-50 bg-[#191F33]">
      <div className="flex flex-col items-center px-4 py-12">
        <div>
          <a
            className="mb-8 flex items-center justify-center gap-5 text-white"
            href="/"
          >
            <img
              alt="Logo"
              
              src="https://baitussalam.org/images/logo-2.svg"
            />
            <span className="text-3xl font-semibold tracking-wider"
              >Bait-us-Salam</span
            >
          </a>
          <p className="max-w-xl text-center text-lg font-medium text-white">
            Shop Today!
          </p>
        </div>
      </div>
      <div className="bg-[#2E3447]">
        <div className="px-3 py-3 text-center">
          <span className="text-[#767E94]"
            >Coded with 💙 by
            <a
              href="https://www.linkedin.com/in/mahmood-hussain-2aa5a630b"
              target="_blank"
              className="text-white"
            >
              Mahmood Hussain</a
            >
          </span>
        </div>
      </div>
    </div>
      </>
     
  
  
    )
  }
  
  export default Footer