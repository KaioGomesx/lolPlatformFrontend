import React from "react";
<<<<<<< HEAD
import { Sidebar, MainDivision } from "./styles";

export default function SideBar() {
  return(
  <MainDivision>
    <i className="fas fa-stream"></i>
=======
import { Sidebar } from "./styles";

export default function SideBar() {
  return(
>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217
    <Sidebar>
        <h2>Lol Project</h2>
        <ul>
            <li><a href="./dashboard"><i className="fas fa-user"></i>Perfil</a></li>
<<<<<<< HEAD
            <li><a href="./events"><i className="fas fa-calendar-check"></i>Eventos</a></li>
=======
            <li><a href="./dashboard"><i className="fas fa-calendar-check"></i>Eventos</a></li>
>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217
            <li><a href="./dashboard"><i className="fas fa-play"></i>Aulas</a></li>
            <li><a href="./dashboard"><i className="fas fa-users"></i>Times</a></li>
            <li><a href="./dashboard"><i className="fas fa-headset"></i>For Streamers</a></li>
            <li><a href="./dashboard"><i className="fas fa-check-circle"></i>Peneiras</a></li>
            <li><a href="./dashboard"><i className="fas fa-gamepad"></i>Partidas Gerenciadas</a></li>
        </ul>
    </Sidebar>
<<<<<<< HEAD
  </MainDivision>
=======

>>>>>>> 8c76cff5faa4b7c234676c34f561715826d91217
  );
}