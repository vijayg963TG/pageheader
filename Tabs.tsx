import {Box, Tabs} from '@homebase/core';
import {getChildrenByTypeDeep} from 'react-nanny';
import {useState} from 'react';
import type {ReactNode} from 'react';
import SectionJumpLinks from './SectionJumpLinks';
import Section from './Section';

export type PageHeaderTabsType = {
  title: string;
  content: ReactNode;
  onClick?: () => void;
};
export default function PageHeaderTabs({tabs, selectedTab = 0}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const sections = getChildrenByTypeDeep(
  //   tabs.map((tab) => tab.content),
  //   [Section]
  // );
  // tabs.map((tab) => getChildrenByTypeDeep(tab.content), [Section]),
  const modifiedTabs = tabs.map((tab) => {
    const sections = getChildrenByTypeDeep(tab.content, [Section]).map(
      (section) => ({
        title: section.props.title,
        section,
      })
    );
    return {
      ...tab,
      sections,
    };
  });
  return (
    <Tabs activeTabIndex={activeTabIndex} onTabSelect={setActiveTabIndex}>
      <Tabs.TabList>
        {modifiedTabs &&
          modifiedTabs.map((tab) => (
            <Tabs.Tab key={tab.title}>{tab.title}</Tabs.Tab>
          ))}
      </Tabs.TabList>
      <Tabs.TabPanels>
        {modifiedTabs &&
          modifiedTabs.map((tab) => (
            <Tabs.TabPanel key={tab.title}>
              {
                <>
                  <SectionJumpLinks sections={tab.sections} />
                  <Box>{tab.content}</Box>
                </>
              }
            </Tabs.TabPanel>
          ))}
      </Tabs.TabPanels>
    </Tabs>
  );
}
