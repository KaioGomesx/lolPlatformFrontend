import React from "react";
import { Sidebar, MainDivision } from "./styles";

function openMenumb(){
  function openMenu(){
    document.getElementById('menuMB')!.style.display = "block";
    document.getElementById('openBtn')!.style.display = "none";
    document.getElementById('closeBtn')!.style.display = "flex";
  }
  openMenu();
}

function closeMenumb(){
  function closeMenu(){
    document.getElementById('menuMB')!.style.display = "none";
    document.getElementById('openBtn')!.style.display = "flex";
    document.getElementById('closeBtn')!.style.display = "none";
  }
  closeMenu();
}

export default function SideBar() {
  return(
  <MainDivision>
    <i id="openBtn" className="oButton fas fa-stream" onClick={openMenumb}></i>
    <i id="closeBtn" className="cButton fas fa-stream" onClick={closeMenumb}></i>
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