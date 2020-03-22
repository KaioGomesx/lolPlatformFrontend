import styled from "styled-components";

export const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  background: transparent;
  padding: 30px 0px;
  position: fixed;
<<<<<<< HEAD

  @media screen and (max-width: 700px) {
    width: 0px;
=======
  @media screen and (max-width: 700px) {
    width: 100%;
>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217
    height: auto;
    position: relative;
    a {float: left;}
    div.content {margin-left: 0;}
<<<<<<< HEAD
    display: none;
=======
>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217
  }

  h2{
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }

  ul li{
    padding: 15px;
    border-bottom: 1px solid #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  ul li a{
    color: #ffffff;
    display: block;
  }

  ul li a .fas{
    width: 25px;
  }

  ul li:hover{
    background-color: #267881;
  }

  ul li:hover a{
    color: #fff;
  }
<<<<<<< HEAD
`;

export const MainDivision = styled.div`
  i{
    display: none;

    @media screen and (max-width: 700px) {
      width: 100%;
      height: auto;
      position: relative;
      a {float: left;}
      div.content {margin-left: 0;}
      display: flex;
    }
  }
=======
>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217
`;