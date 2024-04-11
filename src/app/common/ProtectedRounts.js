"use client"
import React from "react";
 

const ProtectedRoutes = ({ children }) => {
 
 
//   const username = localStorage.getItem("username");


//   console.log("pathname", router.pathname );
 
//   if (!username && router.pathname === "/dashboard") {
//     router.push("/login");
//     return null;  
//   }

  return <>{children}</>;
};

export default ProtectedRoutes;
