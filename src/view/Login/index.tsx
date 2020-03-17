import React from "react";

import { Wrapperlg } from "./styles";

import FormLogin from "../../components/FormLogin/index";

export default function Login() {
  return (
    <div className="Main">
      <Wrapperlg>
        <FormLogin />
      </Wrapperlg>
    </div>
  );
}
