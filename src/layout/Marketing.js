import React from 'react';
import {
  Brand,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardHeaderMain,
  Flex,
  Grid,
  PageSection,
  Title,
} from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';

import Hero from './Hero';
import { activeTechnologies as technologies } from '../consts';
import FeaturedProduct from './FeaturedProduct';

import './Marketing.scss';

const Marketing = () => (
  <React.Fragment>
    <Hero />
    <PageSection
      className="ins-c-marketing pf-m-no-fill"
      landing-page-type="unauthenticated"
    >
      <Grid sm={12} md={6} xl={6} xl2={4} gutter="sm">
        {technologies
          .filter(({ marketing }) => marketing)
          .map(
            (
              { marketingImage, title, marketingUrls, marketingText, id },
              key
            ) => (
              <Card
                className="ins-c-application-info pf-m-card-link"
                application-id={id}
                key={key}
              >
                <CardHeader>
                  <Stack gutter="sm">
                    <StackItem className="ins-c-application-logo">
                      {marketingImage && (
                        <img
                          className="ins-c-application-info__logo"
                          aria-hidden
                          src={marketingImage}
                          alt={`${title} logo`}
                        />
                      )}
                    </StackItem>
                  </Stack>
                </CardHeader>
                <CardBody>
                  <Stack>
                    <StackItem>
                      <span className="ins-m-gray">{marketingText}</span>
                    </StackItem>
                  </Stack>
                </CardBody>
                <CardFooter className="pf-c-card__card-links">
                  <a
                    href={marketingUrls.learnMore}
                    aria-label={`Go to ${title}`}
                  >
                    Learn more
                    <ArrowRightIcon size="sm" />
                  </a>
                  {marketingUrls.tryIt && (
                    <a
                      href={marketingUrls.tryIt}
                      aria-label="Request an evaluation"
                    >
                      Try it
                      <ArrowRightIcon size="sm" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            )
          )}
      </Grid>
    </PageSection>
    {/* <div className="ins-c-marketing">
      <Hero />
      <PageSection
        className="ins-c-product-gallery pf-m-center"
        landing-page-type="unauthenticated"
        isWidthLimited
      >
        <Flex
          spaceItems={{ default: 'spaceItems2xl' }}
          direction={{ default: 'column' }}
          alignItems={{ default: 'alignItemsCenter' }}
        >
          <Title headingLevel="h2" size="3xl">
            Build your cloud on open source
          </Title>
          <Grid md={6} xl={3}>
            {technologies.map(
              (
                { marketingImage, title, marketingUrls, marketingText, id },
                key
              ) => (
                <Card
                  className="ins-c-marketing-card ins-c-application-info pf-m-card-link"
                  application-id={id}
                  key={key}
                  isFlat
                >
                  <CardHeader>
                    {marketingImage && (
                      <CardHeaderMain className="ins-c-marketing-card__header-logo">
                        <Brand
                          className="ins-c-marketing-card__header-logo"
                          src={marketingImage}
                          alt={`${title} logo`}
                          style={{ height: 'auto' }}
                        />
                      </CardHeaderMain>
                    )}
                  </CardHeader>
                  <CardBody>
                    <span>{marketingText}</span>
                  </CardBody>
                  {marketingUrls !== null && (
                    <CardFooter className="pf-c-card__card-links">
                      {marketingUrls.learnMore && (
                        <Button
                          className="ins-c-marketing-button"
                          href={marketingUrls.learnMore}
                          component="a"
                          variant="link"
                          icon={<ArrowRightIcon size="sm" />}
                          iconPosition="right"
                          isInline
                        >
                          <span>Learn more</span>
                        </Button>
                      )}
                      {marketingUrls.tryIt && (
                        <Button
                          className="ins-c-marketing-button"
                          href={marketingUrls.tryIt}
                          component="a"
                          variant="link"
                          icon={<ArrowRightIcon size="sm" />}
                          iconPosition="right"
                          isInline
                        >
                          <span>Try it now</span>
                        </Button>
                      )}
                    </CardFooter>
                  )}
                </Card>
              )
            )}
          </Grid>
        </Flex>
      </PageSection>
      <FeaturedProduct />
    </div> */}
  </React.Fragment>
);

export default Marketing;
