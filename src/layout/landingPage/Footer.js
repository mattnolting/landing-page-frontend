import React from 'react';
import { Flex, PageSection } from '@patternfly/react-core';
import configTryLearnRenderer from '../../components/app-content-renderer/config-try-learn-renderer';
import { useSelector } from 'react-redux';

const Footer = () => {
  const configTryLearn = useSelector(
    ({ contentStore: { configTryLearn } }) => configTryLearn
  );
  return (
    <PageSection isWidthLimited>
      <Flex className="third-level">
        <Flex className="level-wrapper">
          {configTryLearnRenderer(configTryLearn)}
        </Flex>
      </Flex>
    </PageSection>
  );
};

export default Footer;
