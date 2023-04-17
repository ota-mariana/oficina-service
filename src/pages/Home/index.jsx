import { HomeContainer, SearchInput, SearchButton } from "./styles";

export function Home() {
  return (
    
    <HomeContainer>
      <h1>Iniciar um novo serviço</h1>

      <div>
        <SearchInput>
          <label htmlFor="cliente">Pesquisar cliente:</label>
          <input
            type="text"
            name="cliente"
            id="cliente"
            placeholder="Insira o nome do cliente"
          />
        </SearchInput>

        <SearchButton type="submit">
          Pesquisar
        </SearchButton>
      </div>

    </HomeContainer>
  )
}
