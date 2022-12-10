import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validators/schemas";
import { IUserRequest } from "../../interfaces/user.interfaces";
import { Button } from "../Button";
import { Container } from "./style";

export const FormRegister = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({ resolver: yupResolver(formRegisterSchema) });

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <h1>Faça seu cadastro:</h1>
        <input
          {...register("username")}
          type="text"
          placeholder="Digite seu username"
        />
        <p>{errors.username?.message}</p>

        <input
          {...register("email")}
          type="email"
          placeholder="Digite seu email"
        />
        <p>{errors.email?.message}</p>

        <input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />
        <p>{errors.password?.message}</p>

        <input {...register("firstname")} type="text" placeholder="Seu nome" />
        <p>{errors.firstname?.message}</p>

        <input
          {...register("lastname")}
          type="text"
          placeholder="Seu sobrenome"
        />
        <p>{errors.lastname?.message}</p>

        <input {...register("city")} type="text" placeholder="Sua cidade" />
        <p>{errors.city?.message}</p>

        <input
          {...register("street")}
          type="text"
          placeholder="Digite a sua rua"
        />
        <p>{errors.street?.message}</p>

        <input
          {...register("number")}
          type="text"
          placeholder="Digite o número"
        />
        <p>{errors.number?.message}</p>

        <input
          {...register("zipcode")}
          type="text"
          placeholder="Digite seu CEP"
        />
        <p>{errors.zipcode?.message}</p>

        <input
          {...register("phone")}
          type="text"
          placeholder="Seu telefone/celular"
        />
        <p>{errors.phone?.message}</p>

        <button className="button-register" type="submit">
          Cadastrar
        </button>
        <Button
          label="Login"
          className="button"
          BackgroundColor="var(--color-primary-gradient)"
          linkTo="/login"
        ></Button>
      </form>
    </Container>
  );
};
