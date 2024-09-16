import React, { RefObject } from "react";

interface AutoplayProgressProps {
  progressCircleRef: RefObject<SVGSVGElement>;
  progressContentRef: RefObject<HTMLSpanElement>;
}

export const AutoplayProgress = ({
  progressCircleRef,
  progressContentRef,
}: AutoplayProgressProps) => (
  <div className="autoplay-progress" slot="container-end">
    <svg viewBox="0 0 48 48" ref={progressCircleRef}>
      <circle cx="24" cy="24" r="20"></circle>
    </svg>
    <span ref={progressContentRef}></span>
  </div>
);
