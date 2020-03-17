import styled from "styled-components";

export const Wrapperlg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-image: linear-gradient(-20deg, rgb(0, 83, 109) 0%, #000000 100%);
  background-image: linear-gradient(-20deg, rgb(2, 76, 99) 0%, #000000 100%);

  h1 {
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  a {
    color: #626b73;
    font-size: small;
  }

  a:hover {
    color: #fff;
  }
`;
