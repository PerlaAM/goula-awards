export default function LoginPage() {
  return (
    <section class="flex h-full justify-center items-center  bg-rosy">
      <div class="mx-14 md:mx-32 w-3/4 md:w-2/4 lg:w-1/3">
        <h1 class="mb-8 text-center text-rose text-2xl">Crear cuenta</h1>

        <form>
          <div class="mb-4 columns-2">
            <label for="name" class="mb-1 block text-sm font-normal text-rose">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
            <label
              for="lastName"
              class="mb-1 block text-sm font-normal text-rose"
            >
              Apellido
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
          </div>
          <div class="mb-4 columns-2">
            <label for="phone" class="mb-1 block text-sm font-normal text-rose">
              Teléfono
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
            <label
              for="mobile"
              class="mb-1 block text-sm font-normal text-rose"
            >
              Celular
            </label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
          </div>
          <div class="mb-4 w-1/2 pr-2">
            <label
              for="zipCode"
              class="mb-1 block text-sm font-normal text-rose"
            >
              Código postal
            </label>
            <input
              id="zipCode"
              type="number"
              name="zipCode"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
          </div>
          <div class="columns-2">
            <label for="email" class="mb-1 block text-sm font-normal text-rose">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
            <label
              for="password"
              class="mb-1 block text-sm font-normal text-rose"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
          </div>

          <div class="columns-2 flex">
            <button
              class="mr-2 rounded-lg py-2 px-3 text-sm font-light transition-colors border border-yellow border-2  text-yellow mt-8 w-full text-white hover:bg-beige"
              type="submit"
            >
              Cancelar
            </button>

            <button
              class="ml-2 rounded-lg py-2 px-3 text-sm font-light transition-colors bg-rose text-yellow mt-8 w-full hover:bg-dark-rose"
              type="submit"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
