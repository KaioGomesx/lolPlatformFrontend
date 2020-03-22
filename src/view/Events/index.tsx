import React from "react";
import { Wrapper } from "./styles";
import SideBar from "../../components/SideBar/index";
import EventsPage from "../../components/EventsPage/index";

export default function Dashboard() {
  return(
    <Wrapper>
      <SideBar/>
      <EventsPage/>
    </Wrapper>
  );
}