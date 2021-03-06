import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'common/components/UI/ContainerTwo';
import { Section, Grid, FooterWidget } from './footer.style';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      saasCreativeJson {
        footer {
          id
          title
          list {
            id
            title
            link
          }
        }
      }
    }
  `);
  const footer = data.saasCreativeJson.footer;

  return (
    <Section>
      <Container>
        <Grid>
          {footer.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
