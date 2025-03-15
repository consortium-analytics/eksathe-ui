export default function Register() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 bg-white rounded-lg focus:outline-none shadow-md" />
      <input type="email" placeholder="Email Address" className="w-full p-3 bg-white rounded-lg focus:outline-none shadow-md" />
      <input type="password" placeholder="Password" className="w-full p-3 bg-white rounded-lg focus:outline-none shadow-md" />
      <input type="password" placeholder="Confirm Password" className="w-full p-3 bg-white rounded-lg focus:outline-none shadow-md" />

      <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
        Create Account
      </button>
    </form>
  );
}
