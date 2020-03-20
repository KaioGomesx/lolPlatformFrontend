import React from "react";

import { Form } from "./styles";

export default function FormLogin() {
  return (
    <Form>
      <h1>Login</h1>
      <input type="text" id="user" name="usuario" placeholder="Usuário" />
      <input type="password" id="pass" name="senha" placeholder="Senha" />
      <button id="login">
        Entrar
      </button>
      <a href="./register">Não possúi uma conta? Registre-se</a>
    </Form>
  );
}
