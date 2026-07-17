import {type ReactNode} from 'react';

interface SplitScreenProps{
  children: [ReactNode,ReactNode],
  LeftWeight?: number,
  RightWeight?: number
};

const SplitScreen = ({children,LeftWeight=1,RightWeight=1}:SplitScreenProps) => {
  const [left,right]=children;
  const leftWidth=`${LeftWeight}rem`;
  const rightWidth=`${RightWeight}rem`;
  return (
    <section style={{ display: 'flex' }}>
      <div style={{ flex: leftWidth }} className="p-4">{left}</div>
      <div style={{ flex: rightWidth }} className="p-4">{right}</div>
    </section>
  )
}

export default SplitScreen