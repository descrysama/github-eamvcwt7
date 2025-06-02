"use client";

type MotionProps = {
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
  children?: React.ReactNode;
};

export const motion = {
  div: ({ initial, animate, transition, className, children }: MotionProps) => {
    return (
      <div className={`${className || ""} fade-in`}>
        {children}
      </div>
    );
  },
};