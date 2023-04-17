import styled from 'styled-components';

export const ClientContainer = styled.main`
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

  button {
    padding: 0.7rem 3rem;
    border-radius: 8px;
    background: ${props => props.theme['light-blue']};
    color: ${props => props.theme.white};
    border: 0;
    transition: 0.2s;

    &:hover {
      background: ${props => props.theme['dark-blue']};
  }
  }
`

export const ClientData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 1.85rem;
  color: ${props => props.theme['gray-500']};

  strong {
    color: ${props => props.theme['dark-blue']};
  }
`

export const VehicleData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 1.85rem;
  margin-top: 2rem;
  color: ${props => props.theme['gray-500']};

  strong {
    color: ${props => props.theme['dark-blue']};
  }
`

export const InfoClientAndVehicle = styled.div`
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme['light-blue']};
`