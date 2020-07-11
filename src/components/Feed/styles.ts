import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;

  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;

  @media (max-width: 500px) {
    > div:last-child {
      margin-bottom: 47px;
    }
  }
`;
