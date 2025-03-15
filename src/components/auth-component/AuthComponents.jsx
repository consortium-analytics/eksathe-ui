import { useState } from "react";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

export default function AuthComponents() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#362954]">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#4CC0E0] to-[#2083C5] shadow-lg rounded-2xl p-8">
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
  );
}
