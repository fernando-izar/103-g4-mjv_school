import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validators/schemas";
import { IUserLogin } from "../../interfaces/login.interfaces";

import { Main } from "../../styles/main";
import { Button } from "../Button";
import { Container } from "./style";

import { logo } from "../../assets/MjvLogo.svg";

export const FormLogin = () => {
  const { onSubmitLogin } = useContext(UserContext);
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const handleEyeState = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEyeOpen((oldState) => !oldState);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserLogin>({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(formLoginSchema),
  });

  return (
    <Main>
      <img src="logo"></img>
      <Container>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <h1>Faça o seu login:</h1>
          <input
            className="inputSlot"
            {...register("username")}
            type="text"
            placeholder="Username"
          />
          <p>{errors.username?.message}</p>

          <div className="eye-control">
            <input
              {...register("password")}
              type={isEyeOpen ? "text" : "password"}
              placeholder="Senha"
            />
            <button
              style={{ color: "#ffffff" }}
              className="eye"
              onClick={handleEyeState}
            >
              <BsFillEyeFill
                style={{
                  display: isEyeOpen ? "flex" : "none",
                  color: "#868E96",
                }}
              />
              <BsFillEyeSlashFill
                style={{
                  display: isEyeOpen ? "none" : "flex",
                  color: "#868E96",
                }}
              />
            </button>
          </div>
          <p>{errors.password?.message}</p>
          <button className="button-login" type="submit">
            Entrar
          </button>

          <Link to="/register">
            <button className="button-register" type="submit">
              Não é cadastrado ainda? Clique aqui.
            </button>
          </Link>
        </form>
      </Container>
    </Main>
  );
};
