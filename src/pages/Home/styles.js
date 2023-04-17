import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  h1 {
    color: ${props => props.theme['light-blue']};
    font-size: 2.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.70rem;
  }
`

export const SearchInput = styled.div`
  input {
    padding: 0.875rem;
    padding-right: 5rem;
    border-radius: 8px;
  }

  label {
    color: ${props => props.theme['dark-blue']};
    font-weight: bold;
    font-size: 1.25rem;
  }

`

export const SearchButton = styled.button`
  background: ${props => props.theme['dark-blue']};
  color: ${props => props.theme.white};
  border: 0;
  padding: 1rem 2rem;
  border-radius: 8px;
`