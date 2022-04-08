import React, { useState, useEffect } from 'react';
import { Wrapper, ArticleWrapper, TitleWrapper, Header, ContentWrapper } from 'components/templates/NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_DATOCMS_TOKEN;

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        console.log('data', data);
        setArticles(data.allArticles);
      })
      .catch(() => setError(`Sorry, we couldn't load articles`));
  }, []);

  return (
    <Wrapper>
      <Header>News feed section</Header>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image, id }, i) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <TitleWrapper>{error ? error : 'Loading...'}</TitleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
