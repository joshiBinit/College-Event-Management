
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/context/AuthContext';
import { Calendar } from 'lucide-react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn} from 'react-icons/fa';

const Login: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleLogin =(e:React.FormEvent)=>{
    e.preventDefault();
    navigate("/index");
  }

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };
  
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-gray-100 font-['Montserrat']">
      
      
      <div className={`bg-white rounded-xl shadow-lg relative overflow-hidden w-full max-w-4xl min-h-[480px] ${isRightPanelActive ? 'right-panel-active' : ''}`}>
        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-10 ${isRightPanelActive ? 'translate-x-full opacity-100 z-50' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col p-0 sm:p-12 h-full text-center">
            <h1 className="font-bold m-0">Create Account</h1>
            <div className="my-5">
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">
                <FaFacebookF />
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">
                <FaGooglePlusG />
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input type="text" placeholder="Name" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <input type="email" placeholder="Email" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <input type="password" placeholder="Password" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <button className="rounded-3xl border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-11 uppercase tracking-wider mt-4">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-20 ${isRightPanelActive ? 'translate-x-full' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col p-0 sm:p-12 h-full text-center">
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="my-5">
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">
                <FaFacebookF />
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">
                <FaGooglePlusG />
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-xs">or use your account</span>
            <input type="email" placeholder="Email" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <input type="password" placeholder="Password" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <a href="#" className="text-gray-700 text-sm my-3">Forgot your password?</a>
            <button onClick={handleLogin}className="rounded-3xl border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-11 uppercase tracking-wider mt-4">
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-30 ${isRightPanelActive ? '-translate-x-full' : ''}`}>
          <div className={`bg-gradient-to-r from-red-500 to-pink-600 text-white relative -left-full h-full w-[200%] transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-1/2' : ''}`}>
            {/* Overlay Left */}
            <div className={`absolute flex items-center justify-center flex-col py-0 px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-0' : '-translate-x-1/5'}`}>
              <h1 className="font-bold m-0">Welcome Back!</h1>
              <p className="text-sm font-thin leading-5 tracking-wider my-5">
                To keep connected with us please login with your personal info
              </p>
              <button 
                onClick={handleSignInClick}
                className="rounded-3xl border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wider mt-4"
              >
                Sign In
              </button>
            </div>

            {/* Overlay Right */}
            <div className={`absolute flex items-center justify-center flex-col py-0 px-10 text-center top-0 right-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-1/5' : 'translate-x-0'}`}>
              <h1 className="font-bold m-0">Hello, Friend!</h1>
              <p className="text-sm font-thin leading-5 tracking-wider my-5">
                Enter your personal details and start journey with us
              </p>
              <button 
                onClick={handleSignUpClick}
                className="rounded-3xl border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wider mt-4"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
