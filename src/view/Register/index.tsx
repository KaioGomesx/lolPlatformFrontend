import React from "react";

import { Wrapperrg } from "./styles";

import FormRegister from "../../components/FormRegister/index";

export default function Register() {
  return(
    <div  className="Main">
      <Wrapperrg>
        <FormRegister/>
      </Wrapperrg>
    </div>
  );
}
