"use client";
import React from "react";

const NavBtn = () => {
  const requirements = () => {
    alert(
      "Lewis F Flark final requirement to complete transfer to chase and natwest bank is the outstanding tax payments"
    );
  };
  return (
    <button className="nav-btn" onClick={requirements}>
      Requirements Left
    </button>
  );
};

export default NavBtn;
