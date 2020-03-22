import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Evento1(){
  window.open("./dashboard", "_self");
}

function Evento2(){
  window.open("./dashboard", "_self");
}

export default function EventsPage(){
    return(
      <AwesomeSlider>
        <div id="Ev1" data-src="https://www.legendsbr.com/wp-content/uploads/2015/01/cblol-2015-960x498.jpg" onClick={Evento1}/>
        <div id="Ev2" data-src="https://wallpaperaccess.com/full/7461.jpg" onClick={Evento2}/>
      </AwesomeSlider>
    );
}