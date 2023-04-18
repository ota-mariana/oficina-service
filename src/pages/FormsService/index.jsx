import { FormsContainer, ServiceContainer, StartServiceButton } from './styles';

export function FormsService() {
  return (
    <ServiceContainer>
      <h1>Formulário de serviço</h1>

      <FormsContainer>
        <div>
          <label htmlFor="service-type"><strong>Tipo de serviço:</strong></label>
          <select name="service-type" id="service-type">
            <option value="troca-de-oleo">Troca de óleo</option>
            <option value="manutencao">Manutenção</option>
            <option value="alinhamento">Alinhamento</option>
            <option value="checagem-de-componentes">Checagem de componentes</option>
          </select>
        </div>

        <div>
          <span><strong>Valor do serviço:</strong> R$ 58,00</span>
        </div>

        <div>
          <label htmlFor="product"><strong>Produto:</strong></label>
          <select name="product" id="product">
            <option value="oleo">Óleo</option>
            <option value="limpadores-parabrisa">Limpadores de parabrisa</option>
            <option value="baterias">Baterias</option>
            <option value="pneus">Pneus</option>
          </select>
        </div>

        <div>
          <span><strong>Quantidade de produto:</strong> 2</span>
        </div>

        <div>
          <span><strong>Valor do unitário:</strong> R$ 5,00</span>
        </div>

        <div>
          <span><strong>Valor dos produtos:</strong> R$ 10,00</span>
        </div>

        <div>
          <span><strong>Total:</strong> R$ 68,00</span>
        </div>
      </FormsContainer>

        <StartServiceButton type="submit">
          Iniciar serviço
        </StartServiceButton>
    </ServiceContainer>
  )
}
