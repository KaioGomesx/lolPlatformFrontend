import React from "react";

import { Form } from "./styles";

export default function FormRegister() {
  return (
    <Form method="post">
      <h1>Registre-se</h1>
      <input type="text" id="userReg" name="usuario" placeholder="Usuário"/>
      <input type="email" id="emailReg" name="email" placeholder="E-mail"/>
      <input type="password" id="passReg" name="senha" placeholder="Senha"/>
      <input type="password" id="repeatPassReg" name="repetirSenha" placeholder="Digite a senha novamente"/>
      <button id="register">
        Registrar
      </button>
      <a href="./login">Já possúi uma conta? Efetue o login</a>
    </Form>
  );
}