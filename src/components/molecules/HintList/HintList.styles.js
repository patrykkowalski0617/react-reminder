import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin: 25px;
  background-color: #ffffff;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border-radius: 0 0 25px 25px;
  border: 2px solid ${({ theme }) => theme.colors.darkPurple};
  border-top: none;
  list-style-type: none;
  position: absolute;
  top: 49px;
  left: -25px;
  li {
    margin-top: 10px;
  }
`;
