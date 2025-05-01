import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const { googleSignIn, user } = useAuth();
  
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        alert('Please complete the sign-in process');
      } else {
        alert(`Sign-in error: ${error.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-indigo-200">
      <div className="bg-white shadow-xl p-10 rounded-2xl max-w-md w-full text-center">
        {user ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome, {user?.displayName}!</h2>
            <p className="text-gray-600">Email: {user?.email}</p>
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-20 h-20 rounded-full mx-auto mt-4"
            />
            <Link to="/profile" className="btn btn-primary mt-4">Profile</Link>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Welcome Back</h2>
            <p className="text-gray-600 mb-8">Sign in with your Google account</p>

            <button
              className="btn btn-outline btn-primary w-full flex items-center justify-center gap-3"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
              />
              Continue with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
