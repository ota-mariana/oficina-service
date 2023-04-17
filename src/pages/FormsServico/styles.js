import styled from 'styled-components';

export const ServiceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme['light-blue']};
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

export const FormsContainer = styled.form`
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme['light-blue']};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  color: ${props => props.theme['dark-blue']};

  label {
    margin-right: 0.4rem;
  }

  h1 {
    color: ${props => props.theme['light-blue']};
    font-size: 2.5rem;
  }
`

export const StartServiceButton = styled.button`
  padding: 0.7rem 3rem;
  border-radius: 8px;
  background: ${props => props.theme['light-blue']};
  color: ${props => props.theme.white};
  border: 0;
  transition: 0.2s;
  margin-top: 2rem;

  &:hover {
    background: ${props => props.theme['dark-blue']};
  }
`