import React from 'react';

import {
  Button,
  Flex,
  FlexItem,
  PageSection,
  Title,
} from '@patternfly/react-core';
import IconCloud from './images/icon__cloud-red.svg';
import HeroIcon from '../components/HeroIcon.js';
import './Hero.scss';

const Hero = () => (
  <PageSection className="ins-c-hero pf-m-center" isWidthLimited>
    <Flex className="pf-l-flex pf-m-column pf-m-align-items-center">
      <FlexItem spacer={{ default: 'spacerMd', md: 'spacerXl' }}>
        <HeroIcon src={IconCloud} alt="Insights Smart Management" />
      </FlexItem>
      <FlexItem spacer={{ default: 'spacerLg', md: 'spacerLg' }}>
        <Title
          headingLevel="h1"
          className="ins-c-hero__title pf-u-font-weight-light"
        >
          Access your Red Hat subscriptions
        </Title>
      </FlexItem>
      <FlexItem spacer={{ default: 'spacer2xl', md: 'spacer2xl' }}>
        <Title headingLevel="h2" size="xl">
          Operate, deploy, and manage application services and platforms
        </Title>
      </FlexItem>
      <FlexItem>
        <Button
          className="ins-c-hero__login pf-m-primary"
          variant="danger"
          isLarge
          onClick={() => window.insights.chrome.auth.login()}
        >
          Log in to your account
        </Button>
      </FlexItem>
    </Flex>
  </PageSection>
);

export default Hero;
