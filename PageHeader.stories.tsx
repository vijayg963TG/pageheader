import {TagIcon, Box} from '@homebase/core';
import type {ComponentStory, StoryFn} from '@storybook/react';
import type {PageHeaderProps} from './index';
import {PageHeader} from '../';
import Section from './Section';

export default {
  title: 'PageHeader',
  component: PageHeader,
};

const Template: StoryFn = ({...args}) => {
  const props: PageHeaderProps = {...args} as PageHeaderProps;
  return <PageHeader {...props} />;
};
export const Base1: ComponentStory<typeof PageHeader> = Template.bind({});

Base1.storyName = 'PageHeader';
const twoActions = [
  {
    text: 'Primary',
    onClick: () => console.log('action'),
  },
  {
    text: 'Secondary',
    onClick: () => console.log('action'),
  },
  {
    text: 'Third',
    icon: <TagIcon />,
    onClick: () => console.log('action'),
  },
  {
    text: 'Fourth',
    icon: <TagIcon />,
    onClick: () => console.log('action'),
  },
];
const tabs = [
  {
    title: 'Tab 1',
    content: (
      <Box>
        <Box>Tab Content 1</Box>
      </Box>
    ),
  },
  {
    title: 'Tab 2',
    content: <Box>Tab Content 2</Box>,
  },
  {
    title: 'Tab 3',
    content: <Box>Tab Content 3</Box>,
  },
];
const tabsWithSubSection = [
  {
    title: 'Tab 1',
    content: (
      <Box>
        <Box>Tab Content 1</Box>
        <Section title="Section1">
          <Box mt="800px">Section 1</Box>
        </Section>
        <Section title="Section2">
          <Box mt="800px" mb="800px">
            Subsection 2
          </Box>
        </Section>
      </Box>
    ),
  },
  {
    title: 'Tab 2',
    content: (
      <Box>
        <Box>Tab Content 2</Box>
        <Section title="Sub Section1">
          <Box mt="800px">Subsection 1</Box>
          <Box>Subsection 1 Content</Box>
        </Section>
        <Section title="Sub Section2">
          <Box mt="800px" mb="800px">
            Subsection 2
          </Box>
        </Section>
        <Section title="Sub Section3">
          <Box mt="800px" mb="800px">
            Subsection 2
          </Box>
        </Section>
      </Box>
    ),
  },
  {
    title: 'Tab 3',
    content: <div>Tab Content 3</div>,
  },
];
Base1.args = {
  overflowMenuText: 'More',
  actions: twoActions,
  tabs,
  selectedTab: 1,
  title: 'Page title prop',
  parentPage: undefined,
  imageId: undefined,
  children: undefined,
};

export const Base2: ComponentStory<typeof PageHeader> = Template.bind({});
Base2.storyName = 'PageHeader with parentPage';
Base2.args = {
  overflowMenuText: 'More actions',
  actions: twoActions,
  title: 'Page title prop',
  tabs: tabsWithSubSection,
  selectedTab: 1,
  parentPage: {
    href: '#',
    text: 'Parent object text',
  },
  imageId: undefined,
  children: undefined,
};
