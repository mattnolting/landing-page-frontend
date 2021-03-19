import React from 'react';
import {
  Brand,
  Button,
  Flex,
  FlexItem,
  PageSection,
  TextContent,
  Title,
} from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';
import logoInsights from './images/logo__insights.svg';
import './FeaturedProduct.scss';

const FeaturedProduct = () => (
  <PageSection className="ins-c-featured-product pf-m-center" isWidthLimited>
    <Flex spaceItems={{ default: 'spaceItemsXl' }}>
      <Flex direction={{ default: 'column' }} flex={{ default: 'flex_1' }}>
        <Title headingLevel="h2" size="2xl" className="pf-u-screen-reader">
          Red Hat Insights
        </Title>
        <FlexItem spacer={{ default: 'spacerLg' }}>
          <Brand
            className=""
            src={logoInsights}
            alt={`Insights logo`}
            style={{ height: '60px' }}
          />
        </FlexItem>
        <FlexItem spacer={{ default: 'spacer2xl' }}>
          <TextContent>
            <p>
              Identify and remediate security, compliance, and configuration
              risks in your Red Hat environments.
            </p>
            <p>
              Red Hat Insights is a suite of hosted services included with a Red
              Hat subscription that uses rule-based analytical models to
              identify and prioritize meaningful indicators in your environments
              so IT teams can proactively reduce risk and optimize spend.
            </p>
            <p>
              Red Hat Insights is included with Red Hat Enterprise Linux, Red
              Hat OpenShift, and Red Hat Ansible Automation Platform
              subscriptions at no additional cost.
            </p>
          </TextContent>
        </FlexItem>
        <Flex
          direction={{ default: 'column', md: 'row' }}
          spaceItems={{ default: 'spaceItemsMd' }}
        >
          <Button
            component="a"
            href="https://www.redhat.com/en/technologies/management/insights"
            variant="tertiary"
            isLarge
          >
            Learn more
          </Button>
          <Button
            className="ins-c-marketing-button"
            href=""
            component="a"
            variant="link"
            icon={<ArrowRightIcon size="sm" />}
            iconPosition="right"
            isInline
          >
            <span>Data collection and controls</span>
          </Button>
        </Flex>
      </Flex>
      <Flex>
        <div className="placeholder" style={{width: '400px',  height: '300px', background: '#ddd'}}>
          img here
        </div>
      </Flex>
    </Flex>
  </PageSection>
);

export default FeaturedProduct;
