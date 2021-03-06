import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import Fade from 'react-reveal/Fade';
import Section, { FeatureItem, Figure, Grid } from './faq.style';

const FAQ = (props) => {
  const data = useStaticQuery(graphql`
    query {
      appCreative2Json {
        faqs {
          description
          id
          title
        }
      }
    }
  `);

  const { appCreative2Json: faqs } = data;

  const items = faqs?.faqs;

  return items?.length ? (
    <Section {...props}>
      <Container width="1170px">
        <Grid>
          {
            items?.map((faq, index) => {
              return (
                <Fade up key={index}>
                  <FeatureItem>
                      <Figure>
                        <Icon icon={arrowRight2} />
                      </Figure>
                      <div>
                        <Heading as="h4" className="faq-title" content={faq?.title} />
                        <Text
                            className="faq-description"
                            content={faq?.description}
                        />
                      </div>
                  </FeatureItem>
                </Fade>
              )
            })
          }
        </Grid>
      </Container>
    </Section>
  ) : "";
};

export default FAQ;
