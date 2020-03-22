import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-height: 90vh;
  margin: auto;
  box-shadow: 0px 2px 12px -5px rgba(13, 28, 39, 0.6);
  background: transparent;
  border-radius: 12px;
  max-width: 700px;
  position: relative;
<<<<<<< HEAD
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
    a {float: left;}
    div.content {margin-left: 0;}
  }
=======
>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217

  button {
    background: none;
    border: none;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 19px;
    margin: 15px 35px;
    padding: 15px 40px;
    min-width: 201px;
    border-radius: 50px;
    min-height: 55px;
    color: #fff;
    background: linear-gradient(45deg, #1c5252, #16d9f7);
    box-shadow: 0px 4px 30px rgba(9, 118, 133, 0.75);
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.3s;
  }
`;