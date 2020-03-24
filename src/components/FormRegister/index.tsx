import React, { useState } from "react";
import axios from "axios";

import { Form } from "./styles";

export default function FormRegister() {
  const [username, setUsername]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [password2, setPassword2]: any = useState("");

  async function handleSubmit(
    username: string,
    email: string,
    password: string
  ): Promise<any> {
    const { data } = await axios.post(
      "https://lol-platform-backend.herokuapp.com/createUser",
      {
        email,
        username,
        password
      }
    );
    if (password !== password2) {
      alert("As senhas não estão iguais!");
    } else {
      if (data.email) {
        window.location.href = "/login";
      }
    }
  }

  return (
    <Form method="post">
      <h1>Registre-se</h1>
      <input
        value={username}
        id="userReg"
        name="usuario"
        placeholder="Usuário"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        id="emailReg"
        name="email"
        placeholder="E-mail"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        id="passReg"
        name="senha"
        placeholder="Senha"
      />
      <input
        value={password2}
        onChange={e => setPassword2(e.target.value)}
        type="password"
        id="repeatPassReg"
        name="repetirSenha"
        placeholder="Digite a senha novamente"
      />
      <button
        onClick={async e => {
          e.preventDefault();
          if (password !== password2) {
            alert("As senhas não estão iguais!");
          } else {
            const res = await handleSubmit(username, email, password);
            if (res.email) {
              window.location.href = "/login";
            }
          }
        }}
      >
        Registrar
      </button>
      <a href="./login">Já possúi uma conta? Efetue o login</a>
    </Form>
  );
}
