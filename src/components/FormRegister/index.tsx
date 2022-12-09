import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validators/schemas";
import { IUserRequest } from "../../interfaces/user.interfaces";
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
        <label>Username</label>
        <input
          {...register("username")}
          type="text"
          placeholder="Digite seu username"
        />
        <p>{errors.username?.message}</p>

        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Digite seu email"
        />
        <p>{errors.email?.message}</p>

        <label>Senha</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Digite sua senha"
        />
        <p>{errors.password?.message}</p>

        <label>Nome</label>
        <input {...register("firstname")} type="text" placeholder="Seu nome" />
        <p>{errors.firstname?.message}</p>

        <label>Sobrenome</label>
        <input
          {...register("lastname")}
          type="text"
          placeholder="Seu sobrenome"
        />
        <p>{errors.lastname?.message}</p>

        <label>Cidade</label>
        <input {...register("city")} type="text" placeholder="Sua cidade" />
        <p>{errors.city?.message}</p>

        <label>Rua</label>
        <input
          {...register("street")}
          type="text"
          placeholder="Digite a sua rua"
        />
        <p>{errors.street?.message}</p>

        <label>Número</label>
        <input
          {...register("number")}
          type="text"
          placeholder="Digite o número"
        />
        <p>{errors.number?.message}</p>

        <label>CEP</label>
        <input
          {...register("zipcode")}
          type="text"
          placeholder="Digite seu CEP"
        />
        <p>{errors.zipcode?.message}</p>

        <label>Latitude</label>
        <input
          {...register("lat")}
          type="text"
          placeholder="Latitude da sua residência"
        />
        <p>{errors.lat?.message}</p>

        <label>Longitude</label>
        <input
          {...register("long")}
          type="text"
          placeholder="Longitude da sua residência"
        />
        <p>{errors.long?.message}</p>

        <label>Telefone/Celular</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Seu telefone/celular"
        />
        <p>{errors.phone?.message}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};
