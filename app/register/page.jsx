"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ErrorAlert from "../components/errorAlert";

export default function RegisterPage() {
  const router = useRouter();
  const [isHideError, setIsHideError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setMessage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const url =
    "https://tusitioweb.dev/awards/wp-json/wp/v2/registro/participante";

  const formOnSubmit = (userInformation) => {
    setIsLoading(true);
    setIsHideError(true);

    let newUserInformation = {
      email: userInformation.email,
      nombres: userInformation.name,
      apellidos: userInformation.lastName,
      celular: userInformation.mobile,
      password: userInformation.password,
      numero_de_empleados: "Microempresa",
      forma_enterado: "otro",
      otro_forma_enterado: "N/A",
      cargo: "Gerente",
      nombre_empresa: "Mi negocio",
      fecha_origen: "25/04/1998",
      hombres: 2,
      mujeres: 3,
      no_binario: 1,
      geografia_intervencion: "México",
      razon_social: "Mi empresa S.A. 2",
      url_empresa: "'https://google.com'",
      cp: "55620",
      calle_numero: "14",
      colonia: "San Pedro",
      delegacion_municipio: "Ecatepec",
      ciudad: "Ecatepec",
      pais: "México",
      vision: "La vision",
      mision: "La mision",
      clientes: "Los clientes",
      usuarios: "Los usuarios",
      aliados: "Los aliados",
      grupos_de_interes: "Los grupos de interés",
      competencia: "La competencia",
      participado_en_programas_de_aceleracion: "si",
      cual_programa: "El programa",
      nivel_de_ventas: {
        anio_1: userInformation.firstYear,
        anio_2: userInformation.secondYear,
        anio_3: userInformation.thirdYear,
      },
    };

    doRegistrationRequest(newUserInformation);
  };

  const doRegistrationRequest = (newUserInformation) => {
    axios
      .post(url, newUserInformation)
      .then((response) => {
        router.push(`/login?status=${"registered"}`);
      })
      .catch(function (error) {
        setMessage(
          (error.response.data = !null
            ? error.response.data.message
            : error.response.data)
        );
        setIsLoading(false);
        setIsHideError(false);
      });
  };

  return (
    <section className="py-16 flex h-full justify-center items-center bg-rosy overflow-y-scroll">
      <div className="mx-14 md:mx-32 w-3/4 md:w-2/4 lg:w-1/3">
        <div className={` ${!isHideError ? "pt-24" : ""}`}>
          <ErrorAlert
            isHide={isHideError}
            title={"Ha ocurrido un error"}
            description={messageError}
          ></ErrorAlert>
        </div>
        <h1 className="mb-8 text-center text-rose text-2xl">Registro</h1>

        <form onSubmit={handleSubmit(formOnSubmit)}>
          <div className="mb-4 columns-2">
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Nombre*
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("name", {
                required: "Este campo es requerido",
              })}
            />
            {errors.name && (
              <p className="text-xs pt-2 pb-1 text-pink break-after-column">
                {errors.name.message}
              </p>
            )}

            <label
              htmlFor="lastName"
              className="mb-1 block text-sm font-normal text-rose break-before-column"
            >
              Apellido*
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              autoComplete="off"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("lastName", {
                required: "Este campo es requerido",
              })}
            />
            {errors.lastName && (
              <p className="text-xs pt-2 pb-1 text-pink">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="mb-4 columns-2">
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Teléfono*
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="off"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("phone", {
                required: "Este campo es requerido",
                minLength: {
                  value: 10,
                  message: "Debe ser de 10 dígitos",
                },
                maxLength: {
                  value: 10,
                  message: "Debe ser de 10 dígitos",
                },
              })}
            />
            {errors.phone && (
              <p className="text-xs pt-2 pb-1 text-pink break-after-column">
                {errors.phone.message}
              </p>
            )}
            <label
              htmlFor="mobile"
              className="mb-1 block text-sm font-normal text-rose break-before-column"
            >
              Celular*
            </label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              autoComplete="off"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("mobile", {
                required: "Este campo es requerido",
                minLength: {
                  value: 10,
                  message: "Debe ser de 10 dígitos",
                },
                maxLength: {
                  value: 10,
                  message: "Debe ser de 10 dígitos",
                },
              })}
            />
            {errors.mobile && (
              <p className="text-xs pt-2 pb-1 text-pink">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-1/2 pr-2">
            <label
              htmlFor="zipCode"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Código postal*
            </label>
            <input
              id="zipCode"
              type="number"
              name="zipCode"
              autoComplete="off"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("zipCode", {
                required: "Este campo es requerido",
                maxLength: {
                  value: 5,
                  message: "Debe ser de 5 dígitos",
                },
              })}
            />
            {errors.zipCode && (
              <p className="text-xs pt-2 pb-1 text-pink">
                {errors.zipCode.message}
              </p>
            )}
          </div>
          <div className="mb-4 columns-2">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Correo electrónico*
            </label>
            <input
              id="email"
              type="text"
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
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-normal text-rose break-before-column"
            >
              Contraseña*
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
          <p className="text-black mb-1">Nivel de ventas</p>

          <div className="columns-3">
            <label
              htmlFor="firstYear"
              className="mb-1 block text-sm font-normal text-rose"
            >
              Año 1*
            </label>
            <input
              id="firstYear"
              type="text"
              name="firstYear"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("firstYear", {
                required: "Este campo es requerido",
              })}
            />
            {errors.firstYear && (
              <p className="text-xs pt-2 pb-1 text-pink break-after-column">
                {errors.firstYear.message}
              </p>
            )}

            <label
              htmlFor="secondYear"
              className="mb-1 block text-sm font-normal text-rose break-before-column"
            >
              Año 2*
            </label>
            <input
              id="secondYear"
              type="text"
              name="secondYear"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("secondYear", {
                required: "Este campo es requerido",
              })}
            />
            {errors.secondYear && (
              <p className="text-xs pt-2 pb-1 text-pink break-after-column">
                {errors.secondYear.message}
              </p>
            )}

            <label
              htmlFor="thirdYear"
              className="mb-1 block text-sm font-normal text-rose break-before-column"
            >
              Año 3*
            </label>
            <input
              id="thirdYear"
              type="text"
              name="thirdYear"
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("thirdYear", {
                required: "Este campo es requerido",
              })}
            />
            {errors.thirdYear && (
              <p className="text-xs pt-2 pb-1 text-pink break-after-column">
                {errors.thirdYear.message}
              </p>
            )}
          </div>

          <div className="columns-2 flex">
            <Link
              href="/"
              className={`mr-2 rounded-lg py-2 px-3 text-sm font-light transition-colors border-yellow border-2 text-yellow mt-8 w-full hover:bg-beige text-center ${
                isLoading ? "hidden" : ""
              }`}
            >
              Cancelar
            </Link>

            <button
              type="submit"
              className={`flex items-center justify-center ml-2 rounded-lg py-2 px-3 text-sm font-light transition-colors bg-rose text-yellow mt-8 w-full ${
                !isLoading ? "hover:bg-dark-rose" : "opacity-60"
              }`}
              disabled={isLoading ? "disabled" : ""}
            >
              <img
                src="my-loader.svg"
                alt="Cargando..."
                className={`mr-2 ${!isLoading ? "hidden" : ""}`}
              />
              Continuar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
