const fetchContents = () => {
  return fetch("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/709")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export default async function CategoryPage({}) {
  const contents = await fetchContents();

  return (
    <section className="bg-white">
      <div className="py-36 h-full mx-auto w-9/12 md:max-w-3xl lg:max-w-6xl lg:px-12 text-center">
        <h1 className="mb-6 font-display text-4xl font-light tracking-tighter text-rose sm:text-6xl">
          {contents.acf.titulo}
        </h1>
        <span
          className="mt-6 space-y-6 font-display font-extralight text-xl tracking-tight text-rose"
          dangerouslySetInnerHTML={{ __html: contents.acf.descripcion }}
        ></span>
        <div className="mt-12 h-full md:max-w-3xl lg:max-w-6xl lg:px-12">
          <div className="mt-20 md:mt-0 ">
            {contents.acf.categorias.map((category) => (
              <div
                className="p-6 mb-9 border border-gray rounded-lg bg-gray sm:flex items-center justify-center"
                key={category.titulo}
              >
                <div className="sm:mr-6 ">
                  <img
                    src={category.imagen}
                    alt=""
                    className="mx-auto w-28 sm:w-52 sm:mx-0"
                  />
                </div>
                <div>
                  <h1 className="text-lg text-blue">{category.titulo}</h1>
                  <div className="my-4 bg-black opacity-30 h-px"></div>
                  <p className="font-light text-black">
                    {category.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
