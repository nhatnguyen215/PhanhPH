import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appCreative.style';
import { SectionWrapper, FeatureWrapper } from './keyFeatures.style';

const KeyFeatures = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        keyFeatures {
          title
          slogan
          features {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);

  const { slogan, title, features } = data.appCreativeJson.keyFeatures;

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading content={title} />
            <Text content={slogan} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade up delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                icon={
                  <Fragment>
                    <Image src={item.icon.publicURL} alt={item.title} />
                  </Fragment>
                }
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
