const fetchContents = () => {
  return fetch("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/49")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export default async function HomePage({ params }) {
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
      </div>
      <div className="h-full bg-rosy">
        <div className="py-28 h-full mx-auto w-9/12 md:max-w-3xl lg:max-w-6xl lg:px-12">
          <div className="sm:columns-2 ">
            <div className="py-4 sm:pr-8">
              <h1 className="mb-8 font-display text-4xl font-light tracking-tighter text-rose sm:text-4xl">
                {contents.acf.bases.subtitulo}
              </h1>
              <p className="text-black">{contents.acf.bases.contenido}</p>
            </div>
            <div className="py-4 sm:pl-8 break-before-column mt-20 md:mt-0">
              <h1 className="mb-8 font-display text-4xl font-light tracking-tighter text-rose sm:text-4xl">
                {contents.acf.fechas_importantes.subtitulo}
              </h1>
              {contents.acf.fechas_importantes.fechas.map((post) => (
                <div className="mb-9">
                  <p className="text-xl font-semibold text-rose">
                    {post.fecha.split(":")[0]}
                  </p>
                  <p className="uppercase text-3xl leading-none text-dark-green">
                    {post.fecha.split(":")[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
