import React from "react";
import "./LoadingAnimation.scss";
import { generateClassName } from "shared/utils/reactClassName";

interface LoadingAnimationProps {
  className?: string
}

// https://codepen.io/aryabardhan/pen/qBwVgRV
const LoadingAnimation: React.FC<LoadingAnimationProps> = ({className}) => {
  return (
    <section className={generateClassName('LoadingAnimation', className || '')}>
        <div className="LoadingAnimation__Container">
          <div className="LoadingAnimation__Dot LoadingAnimation__Dot--one"/>
          <div className="LoadingAnimation__Dot LoadingAnimation__Dot--two"/>
          <div className="LoadingAnimation__Dot LoadingAnimation__Dot--three"/>
          <div className="LoadingAnimation__Dot LoadingAnimation__Dot--four"/>
        </div>
    </section>
  );
};

LoadingAnimation.displayName = "LoadingAnimation";
export { LoadingAnimation };
