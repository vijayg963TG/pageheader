import {Box, Button} from '@homebase/core';
import {getChildren} from 'react-nanny';
import type React from 'react';

export type SectionJumpLinksType = {
  title: string;
  section?: React.ReactNode;
  onClick?: () => void;
};
export default function SectionJumpLinks({sections}) {
  const handleJumpToSection = (section) => {
    if (section) {
      const sectionChild = getChildren(section, (child) => child.props.title);
      const verticalPosition = sectionChild.current.scrollTop;
      console.log('Vertical position:', verticalPosition);
    }
  };
  return (
    <Box p="$2000">
      {sections &&
        sections.map((section, index) => (
          <>
            <Button
              mr="$2000"
              ml={index === 0 ? '' : '$2000'}
              onClick={() => {
                handleJumpToSection(section.section);
              }}
              isPlainText
              key={section.title}
            >
              {section.title}
            </Button>
            {/* <Link href="#subsection1">{section.text}</Link> */}
            {index < sections.length - 1 ? '|' : ''}
          </>
        ))}
    </Box>
  );
}
