import React from "react";
import  "../../Styles/sigin.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";



const signIn = () => {
  return (
   <> <Navbar/>
    <div className="signIn-container">
      <div className="signIn-box">
        <h1 className="signIn-title">Sign In</h1>
        <form className="signIn-form">
          <label htmlFor="email" className="signIn-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="signIn-input"
          />

          <label htmlFor="password" className="signIn-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="signIn-input"
          />

          <button type="submit" className="signIn-button">
            Sign In
          </button>
       
      <div className="socialSignIn">
        <p>Or sign in with</p>
        <button className="googleButton"><img/>Sign in with Google</button>
        <button className="appleButton"><img/>Sign in with Apple</button>
      </div>
      </form>
      </div>
    </div><Footer/></>
  );
};

export default signIn;
// "use client";
// import React, { useEffect, useState } from "react";
// import "../../Styles/sigin.css";

// const signIn = () => {
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     setShowAnimation(true); // Trigger animation when the component is mounted
//   }, []);

//   return (
//     <div className="signIn-container">
//       <div className={`signIn-box ${showAnimation ? "animate-box" : ""}`}>
//         <div className="fruit-vegetable-overlay">
//           <img
            
//             alt="Fruit"
//             className="fruit"
//           />
//           <img
            
//             alt="Vegetable"
//             className="vegetable"
//           />
//         </div>
//         <h1 className="signIn-title">Sign In</h1>
//         <form className="signIn-form">
//           <label htmlFor="email" className="signIn-label">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             className="signIn-input"
//           />

//           <label htmlFor="password" className="signIn-label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             className="signIn-input"
//           />

//           <button type="submit" className="signIn-button">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default signIn;
