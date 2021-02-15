import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    font-size: 16px;
    color: #a8a8b3;
  }
`;

export const Info = styled.div`
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;

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
  }

  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      & + li {
        margin-left: 40px;
      }

      span {
        font-weight: bold;
        font-size: 15px;
        color: #3d3d4d;
      }
    }
  }
`;

export const Moves = styled.div`
  margin-top: 80px;

  div {
    img {
      height: 25px;
      width: auto;
    }

    strong {
      margin: 0 16px;
      font-size: 24px;
      color: #3d3d4d;
    }
  }

  #attacks {
    max-width: 700px;
    margin-top: 40px;
    background: #fff;

    p {
      padding: 5px 15px;
      color: #3d3d4d;
    }
  }
`;
