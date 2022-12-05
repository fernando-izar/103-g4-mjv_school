import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validators/schemas";
import { IUserLogin } from "../../interfaces/login.interfaces";
import { Button } from "../Button";
import { Container } from "./style";

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
    <Container>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <label>UserName</label>
        <input
          {...register("username")}
          type="text"
          placeholder="Digite seu username"
        />
        <p>{errors.username?.message}</p>

        <label>Senha</label>
        <div className="eye-control">
          <input
            {...register("password")}
            type={isEyeOpen ? "text" : "password"}
            placeholder="Digite sua senha"
          />
          <button
            style={{ color: "#ffffff" }}
            className="eye"
            onClick={handleEyeState}
          >
            <BsFillEyeFill
              style={{ display: isEyeOpen ? "flex" : "none", color: "#868E96" }}
            />
            <BsFillEyeSlashFill
              style={{ display: isEyeOpen ? "none" : "flex", color: "#868E96" }}
            />
          </button>
        </div>
        <p>{errors.password?.message}</p>
        <button className="button-login" type="submit">
          Login
        </button>
        <p>Ainda não possui uma conta?</p>

        <Link to="/register">
          <button className="button-register" type="submit">
            Cadastre-se
          </button>
        </Link>
      </form>
    </Container>
  );
};
