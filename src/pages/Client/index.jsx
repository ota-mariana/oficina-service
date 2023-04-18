import { ClientContainer, ClientData, VehicleData, InfoClientAndVehicle } from './styles';

export function Client() {
  return (
    <ClientContainer>
      <h1>Dados do cliente</h1>

      <InfoClientAndVehicle>
        <ClientData>
          <span><strong>Nome do cliente:</strong> Maria Joana da silva</span>
          <span><strong>CPF:</strong> xxxxxxxxxx-xx</span>
          <span><strong>Telefone:</strong> 00000-0000</span>
          <span><strong>Email:</strong> maria@joana.com.br</span>
          <span><strong>Endereço:</strong> Rua Monte Azevedo, 00 Iluminado SP</span>
          <span><strong>QR Code:</strong> Imagem do QR Code</span>
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
