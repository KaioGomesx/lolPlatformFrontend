import styled from "styled-components";

export const Sidebar = styled.div`
  width: 200px;
  height: 100%;
  background: transparent;
  padding: 30px 0px;
  position: fixed;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
    a {float: left;}
    div.content {margin-left: 0;}
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
`;