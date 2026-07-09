import type { ReactNode } from "react";

interface SplitScreenProps{
  children:[ReactNode,ReactNode];
  leftWeight:Number;
  rightWeight:Number;

};

const SplitScreen = ({children,leftWeight,rightWeight}:SplitScreenProps) => {
  return (
    <></>
  )
}

export default SplitScreen