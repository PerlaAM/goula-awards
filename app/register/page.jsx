"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    debugger;
    console.log("hola");
  };
  // console.log(errors);

  return (
    <section className="flex h-full justify-center items-center  bg-rosy">
      <div className="mx-14 md:mx-32 w-3/4 md:w-2/4 lg:w-1/3">
        <h1 className="mb-8 text-center text-rose text-2xl">Crear cuenta</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("phone", {
                required: "Este campo es requerido",
                maxLength: {
                  value: 10,
                  message: "El teléfono debe ser de 10 dígitos",
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
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
              {...register("mobile", {
                required: "Este campo es requerido",
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
          <div className="columns-2">
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
              className="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
          </div>

          <div className="columns-2 flex">
            <button
              type="submit"
              className="mr-2 rounded-lg py-2 px-3 text-sm font-light transition-colors border border-yellow border-2  text-yellow mt-8 w-full text-white hover:bg-beige"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="ml-2 rounded-lg py-2 px-3 text-sm font-light transition-colors bg-rose text-yellow mt-8 w-full hover:bg-dark-rose"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
