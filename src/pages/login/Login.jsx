export default function Login() {
  return (
    <form className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 pl-10 bg-white rounded-lg focus:outline-none shadow-md"
        />
        <span className="absolute left-3 top-3 text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
          </svg>
        </span>
      </div>

      <div className="relative">
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 pl-10 bg-white rounded-lg focus:outline-none shadow-md"
        />
        <span className="absolute left-3 top-3 text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 1.6.5 3.1 1.4 4.4L4 18l5-2.4c.9.3 1.9.4 3 .4 3.9 0 7-3.1 7-7s-3.1-7-7-7z"/>
          </svg>
        </span>
      </div>

      <div className="flex justify-between text-sm text-white">
        <label className="flex items-center space-x-1">
          <input type="checkbox" className="w-4 h-4" />
          <span>Remember me</span>
        </label>
        <a href="#" className="underline">Forgot password?</a>
      </div>

      <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
        Login Now
      </button>
    </form>
  );
}
