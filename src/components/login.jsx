import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Login(){
    const [username, setUsername] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        
        // টাইপো ঠিক করা হয়েছে (if)
        if (!username.trim()) {
            alert("Please enter a valid username!");
            return;
        }
        
        login(username);
        navigate('/');
    };

    return (
        // পুরো স্ক্রিনের মাঝে ফর্মটিকে আনার জন্য ব্যাকগ্রাউন্ড ও শ্যাডো ডিজাইন
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                
                {/* টাইপো ঠিক করা হয়েছে (form) */}
                <form onSubmit={handlesubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Username:
                        </label>
                        <input 
                            type="text" 
                            value={username} // Controlled input বানানোর জন্য
                            placeholder="Enter your name" 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    
                    {/* বাটন ট্যাগ ঠিক করা হয়েছে */}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
