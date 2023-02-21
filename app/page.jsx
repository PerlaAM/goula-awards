export default function LoginPage() {
  return (
    <section class="flex h-full items-center justify-center bg-rosy">
      <div class="mx-14 mt-10 md:mx-32 w-3/4 md:w-2/4 lg:w-1/4">
        <h1 class="mb-8 text-center text-rose text-2xl">Iniciar sesión</h1>
        <form>
          <div class="mb-4">
            <label for="email" class="mb-1 block text-sm font-normal text-rose">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              class="block w-full rounded-lg bg-white py-2 px-3 text-black focus:outline-none focus:border-rose focus:ring-rose focus:ring-2 text-sm"
            />
          </div>
          <div>
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
          <button
            class="rounded-lg py-2 px-3 text-sm font-light transition-colors bg-rose text-yellow mt-8 w-full hover:bg-dark-rose"
            type="submit"
          >
            Iniciar sesión
          </button>

          <div class="mt-4">
            <p class="text-black font-light text-sm text-center">
              ¿No tienes una cuenta?
              <a
                href=""
                class="text-pink font-normal hover:text-dark-pink ml-1"
              >
                Regístrate
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
