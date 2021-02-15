import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import Images from './images';

import { Title, Form, Pokemons } from './style';

import api from '../../services/api';

interface Pokemon {
  name: string;
  order: number;
  sprites: {
    front_default: string;
  };
  types: [];
}

interface Item {
  type: {
    name: string;
  };
}

const Dashboard: React.FC = () => {
  const [newPokemon, setNewPokemon] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@PokemonExplorer:pokemons',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@PokemonExplorer:pokemons', JSON.stringify(pokemons));
  }, [pokemons]);

  async function handleAddPokemon(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.get(`${newPokemon}`);

      setPokemons([...pokemons, response.data]);
      setNewPokemon('');
    } catch (err) {
      console.log(err);
    }
  }

  function typeImage(type: string) {
    switch (type) {
      case 'bug':
        return <img src={Images.bug} alt="Pokemon type" />;
      case 'dark':
        return <img src={Images.dark} alt="Pokemon type" />;
      case 'dragon':
        return <img src={Images.dragon} alt="Pokemon type" />;
      case 'electric':
        return <img src={Images.electric} alt="Pokemon type" />;
      case 'fairy':
        return <img src={Images.fairy} alt="Pokemon type" />;
      case 'fighting':
        return <img src={Images.fighting} alt="Pokemon type" />;
      case 'fire':
        return <img src={Images.fire} alt="Pokemon type" />;
      case 'flying':
        return <img src={Images.flying} alt="Pokemon type" />;
      case 'ghost':
        return <img src={Images.ghost} alt="Pokemon type" />;
      case 'grass':
        return <img src={Images.grass} alt="Pokemon type" />;
      case 'ground':
        return <img src={Images.ground} alt="Pokemon type" />;
      case 'ice':
        return <img src={Images.ice} alt="Pokemon type" />;
      case 'normal':
        return <img src={Images.normal} alt="Pokemon type" />;
      case 'poison':
        return <img src={Images.poison} alt="Pokemon type" />;
      case 'psychic':
        return <img src={Images.psychic} alt="Pokemon type" />;
      case 'rock':
        return <img src={Images.rock} alt="Pokemon type" />;
      case 'steel':
        return <img src={Images.steel} alt="Pokemon type" />;
      case 'water':
        return <img src={Images.water} alt="Pokemon type" />;
      default:
        return <p>{type}</p>;
    }
  }

  return (
    <>
      <img src={logoImg} alt="Pokemon Explorer" />
      <Title>Explore pokemons no Pokemon Database</Title>

      <Form onSubmit={handleAddPokemon}>
        <input
          value={newPokemon}
          onChange={e => setNewPokemon(e.target.value)}
          placeholder="Digite aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Pokemons>
        {pokemons.map(pokemon => {
          const type: Item[] = pokemon.types;
          return (
            <Link key={pokemon.order} to={`pokemon/${pokemon.name}`}>
              <img
                src={pokemon.sprites.front_default}
                alt={`Sprite of ${pokemon.name}`}
              />
              <div>
                <strong>{pokemon.name}</strong>
                <p>{typeImage(type[0].type.name)}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Pokemons>
    </>
  );
};

export default Dashboard;
