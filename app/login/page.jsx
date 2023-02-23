"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ErrorAlert from "../components/errorAlert";
import SuccessAlert from "../components/successAlert";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isHideError, setIsHideError] = useState(true);
  const [isHideSuccess, setIsHideSuccess] = useState(true);
  const url = "https://tusitioweb.dev/awards/wp-json/jwt-auth/v1/token";
  const registerStatus = searchParams.get("status");

  useEffect(() => {
    if (registerStatus === "registered") {
      setIsHideSuccess(false);
    } else {
      setIsHideSuccess(true);
    }
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const formOnSubmit = (loginInformation) => {
    setIsLoading(true);
    setIsHideError(true);
    setIsHideSuccess(true);

    let newLoginInformation = {
      username: loginInformation.email,
      password: loginInformation.password,
    };

    doLoginRequest(newLoginInformation);
  };

  const doLoginRequest = (newLoginInformation) => {
    axios
      .post(url, newLoginInformation)
      .then(() => {
        router.push("/home");
      })
      .catch(function (error) {
        setIsLoading(false);
        setIsHideError(false);
      });
  };

  function LoadingText() {
    if (isLoading) {
      return "Iniciando sesión";
    }
    return "Iniciar sesión";
  }

  return (
    <section className="flex h-full items-center justify-center bg-rosy">
      <div className="mx-14 md:mx-32 w-3/4 md:w-2/4 lg:w-1/4">
        <ErrorAlert
          isHide={isHideError}
          title={"Ha ocurrido un error"}
          description={
            "No pudimos encontrar una cuenta con esa dirección de correo electrónico"
          }
        ></ErrorAlert>
        <SuccessAlert
          isHide={isHideSuccess}
          title={"Se ha creado el registro con éxito"}
          description={"Inicia sesión con tu correo y contraseña"}
        ></SuccessAlert>
        <h1 className="mb-8 text-center text-rose text-2xl">Iniciar sesión</h1>
        <form onSubmit={handleSubmit(formOnSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Correo electrónico no válido",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs pt-2 pb-1 text-pink break-after-column">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              maxLength="8"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("password", {
                required: "Este campo es requerido",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8}$/,
                  message:
                    "La contraseña debe tener al menos una minúscula, una mayúscula, un número",
                },
              })}
            />
            {errors.password && (
              <p className="text-xs pt-2 pb-1 text-pink">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`flex items-center justify-center rounded-lg py-2 px-3 text-sm font-light transition-colors bg-rose text-yellow mt-8 w-full ${
              !isLoading ? "hover:bg-dark-rose" : "opacity-60"
            }`}
            type="submit"
            disabled={isLoading ? "disabled" : ""}
          >
            <img
              src="my-loader.svg"
              alt="Cargando..."
              className={`mr-2 ${!isLoading ? "hidden" : ""}`}
            />
            <LoadingText />
          </button>

          <div className="mt-4">
            <p className="text-black font-light text-sm text-center">
              ¿No tienes una cuenta?
              <Link
                href="/register"
                className="text-pink font-normal hover:text-dark-pink ml-1"
              >
                Crear cuenta
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
