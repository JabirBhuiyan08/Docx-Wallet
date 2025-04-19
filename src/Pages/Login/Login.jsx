import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        setUser(result.user); // store user info in state
      })
      .catch(error => {
        console.error("Google sign-in error:", error);
      });
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
