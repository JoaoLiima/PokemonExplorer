import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  max-width: 480px;
  margin-top: 40px;

  font-size: 48px;
  color: #3a3a3a;
  font-weight: 700;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 72px;
    padding: 0 24px;
    border: none;
    border-radius: 5px 0 0 5px;
    background: #fff;
  }

  button {
    width: 210px;
    background: #04d361;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Pokemons = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 0 24px;

    background: #fff;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: auto;
      height: 100%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 24px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;