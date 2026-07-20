import {type ReactNode} from 'react';

interface SplitScreenProps{
  children: [ReactNode,ReactNode],
  LeftWeight?: number,
  RightWeight?: number
};

const SplitScreen = ({
  children,
  LeftWeight = 1,
  RightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;

  return (
    <section className="flex flex-1">
      <div style={{ flex: LeftWeight }} className="p-4">
        {left}
      </div>

      <div style={{ flex: RightWeight }} className="p-4">
        {right}
      </div>
    </section>
  );
};

export default SplitScreen;