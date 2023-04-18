import { ClientContainer, ClientData, VehicleData, InfoClientAndVehicle } from './styles';
// import { dataClient } from '../../mocks/clientes';

export function Client(clientName) {
  return (
    <ClientContainer>
      <h1>Dados do cliente</h1>

      <InfoClientAndVehicle>
      
                  <ClientData>
                    <span><strong>Nome do cliente:</strong> { clientName.name }</span>
                    <span><strong>CPF:</strong> { clientName.cpf }</span>
                    <span><strong>Telefone:</strong> { clientName.phone }</span>
                    <span><strong>Email:</strong> { clientName.email }</span>
                    <span><strong>Endereço:</strong> { clientName.address }</span>
                    <span><strong>QR Code:</strong> { clientName.code }</span>
                  </ClientData>

                  <VehicleData>
                    <span><strong>Veículo/ modelo:</strong> Corsa</span>
                    <span><strong>Cor:</strong> Vermelho</span>
                    <span><strong>Ano:</strong> 2020</span>
                    <span><strong>Placa:</strong> 0000000</span>
                  </VehicleData>
      </InfoClientAndVehicle>

      <button type="submit">
        Iniciar um novo serviço
      </button>
    </ClientContainer>
  )
}
