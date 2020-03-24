import React from "react";
import { Sidebar, MainDivision } from "./styles";

function openMenumb(){
  document.getElementById('menuMB')!.style.display = "block";
}

export default function SideBar() {
  return(
  <MainDivision>
    <i className="iButton fas fa-stream" onClick={openMenumb}></i>
    <Sidebar id="menuMB">
        <h2>Lol Project</h2>
        <ul>
            <li><a href="./dashboard"><i className="fas fa-user"></i>Perfil</a></li>
            <li><a href="./events"><i className="fas fa-calendar-check"></i>Eventos</a></li>
            <li><a href="./dashboard"><i className="fas fa-play"></i>Aulas</a></li>
            <li><a href="./dashboard"><i className="fas fa-users"></i>Times</a></li>
            <li><a href="./dashboard"><i className="fas fa-headset"></i>For Streamers</a></li>
            <li><a href="./dashboard"><i className="fas fa-check-circle"></i>Peneiras</a></li>
            <li><a href="./dashboard"><i className="fas fa-gamepad"></i>Partidas Gerenciadas</a></li>
        </ul>
    </Sidebar>
  </MainDivision>
  );
}