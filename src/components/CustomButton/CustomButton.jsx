import React from "react";
import "./CustomButton.styles.scss";
export default function CustomButton({
  children,
  signInWithGoogle,
  ...otherProps
}) {
  return (
    <button
      className={`${signInWithGoogle ? "google" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
