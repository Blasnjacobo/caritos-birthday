import React from "react";
import "./Loader.scss";

export interface IPwaLoaderProps {
  size?: number;
  color?: string;
}

export const Loader: React.FC<IPwaLoaderProps> = ({ size = 50, color= "blue" }) => {
  const loaderStyle = {
    width: size,
    height: size,
    borderColor: `${color}`,
  };

  return <div className="Loader" style={loaderStyle} data-testid="pwa-loader"></div>;
};
