import { useState } from 'react';
import { HomeContainer, SearchInput, SearchButton } from './styles';
import { Client } from '../Client/index';
import { dataClient } from '../../mocks/clientes';

export function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [client, setClient] = useState([]);

  const handleInputText = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // setNewContent('');
    const clientRegistered = dataClient.filter((client) => {
      if (searchInput.value === client.name) {
        return client
      }
    })
    setClient(clientRegistered)
    console.log(client);
  }

  // const isClient = () => {

  // }

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
            onChange={ handleInputText }
          />
        </SearchInput>

        <SearchButton type="submit" onClick={ handleSearchSubmit }>
          Pesquisar
        </SearchButton>
      </div>

      <Client clientName={ client } />
    </HomeContainer>
  )
}
