import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.darkgGray};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkgGray};
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 1.6;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    height: 150px;
    margin-left: 35px;
    object-fit: cover;
  }
`;
