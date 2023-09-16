import {
  ArrowCtaLeftIcon,
  Box,
  Container,
  FixedImage,
  Heading,
  Text,
  Link as HomebaseLink,
} from '@homebase/core';
import Link from 'next/link';
import type React from 'react';
import type {Action} from '../ActionBar';
import type {PageHeaderTabsType} from './Tabs';
import type {SectionJumpLinksType} from './SectionJumpLinks';
import {ActionBar} from '../index';
import PageHeaderTabs from './Tabs';
// import SectionJumpLinks from './SectionJumpLinks';

export type PageHeaderProps = {
  title: string;
  parentPage?: {
    href: string;
    text: string;
  };
  imageId?: string | number;
  children?: React.ReactNode;
  actions: Action[];
  overflowMenuText: string;
  tabs?: PageHeaderTabsType[];
  selectedTab: number;
  sections?: SectionJumpLinksType[];
};
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  parentPage,
  imageId,
  children,
  actions,
  tabs,
  selectedTab,
  overflowMenuText,
}) => {
  return (
    <>
      <Container
        position="sticky"
        top="0"
        variation="neutral"
        zIndex="100"
        style={{zIndex: 100}}
      >
        <Box display="flex" columnGap="$1000">
          {parentPage && parentPage.href && (
            <HomebaseLink
              is={Link}
              href={parentPage.href}
              alignSelf="center"
              mr="$1500"
            >
              <ArrowCtaLeftIcon />
            </HomebaseLink>
          )}
          {parentPage && imageId && (
            <FixedImage
              alignSelf="center"
              imageId={imageId}
              width={48}
              height={48}
              alt={title}
            />
          )}
          <Box alignSelf={'center'} justifySelf={'center'}>
            {parentPage && <Text>{parentPage.text}</Text>}
            <Heading variation="sectionTitle" is="h1" m="0">
              {title}
            </Heading>
          </Box>
          <Box flexGrow={1}>{children}</Box>
          <Box display="flex" justifyContent="flex-end" columnGap="$1000">
            <ActionBar
              actions={actions}
              overflowMenuText={overflowMenuText}
              testIds={{test: 'pageHeader'}}
            />
          </Box>
        </Box>
      </Container>
      <div>
        {tabs && tabs.length > 0 && (
          <PageHeaderTabs tabs={tabs} selectedTab={selectedTab} />
        )}
      </div>
    </>
  );
};
/**
 *
 <Header> This will use React nanny to place tabs anywhere
  <Header.Section title="">
    <Header.SubSection title="">
  </Header.Section>

 </Header.Tabs>
 */
// const _PageHeader = Object.assign(PageHeader, {
//   Subsection: SectionJumpLinks,
// });

export default PageHeader;
