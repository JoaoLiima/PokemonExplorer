import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import { Header, Info, Moves } from './style';
import logoImg from '../../assets/logo.png';
import sword from '../../assets/sword.png';

import api from '../../services/api';

interface PokemonParams {
  pokemon: string;
}

interface Pokemon {
  name: string;
  order: number;
  sprites: {
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  types: [];
  moves: Move[];
}

interface Move {
  move: {
    name: string;
    url: string;
  };
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [move, setMove] = useState<Move[]>([]);
  const { params } = useRouteMatch<PokemonParams>();

  useEffect(() => {
    api.get(`${params.pokemon}`).then(response => {
      setPokemon(response.data);
    });

    if (pokemon) {
      setMove(pokemon.moves);
    }
  }, [params.pokemon, pokemon]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      {pokemon && (
        <Info>
          <header>
            <img src={pokemon.sprites.front_default} alt="Pokemon sprite" />
            <div>
              <strong>{pokemon.name}</strong>
              <p>{`#${pokemon.order}`}</p>
            </div>
          </header>
          <ul>
            {pokemon.sprites.front_shiny && (
              <li>
                <img src={pokemon.sprites.front_shiny} alt="Pokemon Shiny" />
                <span>Shiny</span>
              </li>
            )}
            {pokemon.sprites.front_female && (
              <li>
                <img src={pokemon.sprites.front_female} alt="Female" />
                <span>Fêmea</span>
              </li>
            )}
            {pokemon.sprites.front_shiny_female && (
              <li>
                <img
                  src={pokemon.sprites.front_shiny_female}
                  alt="Female shiny"
                />
                <span>Fêmea shiny</span>
              </li>
            )}
          </ul>
        </Info>
      )}
      <Moves>
        <div>
          <img src={sword} alt="Attacks" />
          <strong>Ataques</strong>
        </div>
        <div id="attacks">
          {move.map(movement => {
            return <p>{movement.move.name}</p>;
          })}
        </div>
      </Moves>
    </>
  );
};

export default Pokemon;
