import styled from "styled-components";

export const ProfileMain = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 460px;
    margin: auto;
    box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
    background: transparent;
    border-radius: 12px;
    max-width: 700px;
    position: relative;

    button{
      border: none;
      font-family: "Quicksand", sans-serif;
      font-weight: 700;
      font-size: 19px;
      margin: 15px 35px;
      padding: 15px 40px;
      min-width: 201px;
      border-radius: 50px;
      min-height: 55px;
      color: #ffffff;
      background: transparent;
      box-shadow: 0px 4px 30px rgba(9, 118, 133, 0.75);
    }
`;
export const ProfilePicture = styled.div`
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 50px 0px #439cac, 0px 0px 0px 7px rgba(11, 59, 87, 0.5);

  img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const ProfilePui = styled.div`
  margin-top: -35px;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all .3s;

  .NameU{
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 15px;
  }

  .GameU{
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 15px;
  }

  .GameU strong{
    font-weight: 700;
  }

  .RankU{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }
`;

export const ProfileMpinf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 35px;

  .infoU{
    padding: 10px 35px;
    min-width: 150px;
  }

  .info0{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
  }

  .info1{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-top: 7px;
    color: #ffffff;
  }
`;

export const ProfileCtr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;