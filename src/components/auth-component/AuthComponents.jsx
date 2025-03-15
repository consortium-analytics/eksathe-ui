import { useState } from "react";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

export default function AuthComponents() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12">
      <div className="flex gap-5 items-center w-full max-w-4xl">
        {/* Text Section */}
        <div className="w-1/2 pr-8">
          <h1 className="text-[#c8b7e9] text-4xl font-semibold text-start">
            Join Us and Be a Part of <br />
            <span className="my-5 text-5xl font-bold text-white">EKSATHE.COM</span>
          </h1>
        </div>

        {/* Form Section */}
        <div className="w-2/5 bg-gradient-to-b from-[#4CC0E0] to-[#2083C5] shadow-lg rounded-2xl p-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
              </svg>
            </div>
            <h2 className="text-white text-2xl font-semibold mb-4">{isLogin ? "LOGIN" : "REGISTER"}</h2>
          </div>

          {isLogin ? <Login /> : <Register />}

          <div className="text-center mt-4 text-white text-sm">
            {isLogin ? (
              <p>
                Not a member?{" "}
                <button className="text-gray-100 font-semibold underline" onClick={() => setIsLogin(false)}>
                  Create an account
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button className="text-gray-100 font-semibold underline" onClick={() => setIsLogin(true)}>
                  Login Now
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
