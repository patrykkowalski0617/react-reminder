import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 40px 30px;
  border-radius: 25px;
  margin: 20px auto;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
