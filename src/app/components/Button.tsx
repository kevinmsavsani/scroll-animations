import React from "react";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

function Button({
  name,
  icon,
  background = "bg-gray-700",
  color = "text-white",
  border = "border-gray-600",
}: ButtonProps) {
  return (
    <button
      className={`flex items-center py-2 px-4 rounded-full border ${border} ${background} ${color} cursor-pointer transition duration-200 hover:bg-gray-800 hover:text-white`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </button>
  );
}

export default Button;
