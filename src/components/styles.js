import styled from 'styled-components';

export const CardDataClient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: ${props => props.theme['light-blue']};
  color: ${props => props.theme.white};
  border-radius: 8px;
  padding: 1rem;
  line-height: 2rem;

  h3 {
    color: ${props => props.theme.white};
    margin-bottom: 0.875rem;
  }
`