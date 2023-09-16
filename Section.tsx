import {Box} from '@homebase/core';
import {useRef} from 'react';

export type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({children, title}) => {
  const containerRef = useRef(null);

  return (
    <Box title={title} ref={containerRef}>
      {children}
    </Box>
  );
};
export default Section;
