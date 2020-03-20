import React from "react";

import { Wrapper } from "./styles";

import SideBar from "../../components/SideBar/index";

import ProfileCard from "../../components/ProfileCard/index";

export default function Dashboard() {
  return(
    <Wrapper>
      <SideBar/>
      <ProfileCard/>
    </Wrapper>
  );
}
