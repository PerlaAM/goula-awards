const fetchContents = () => {
  return fetch("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/69")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export default async function JudgePage({}) {
  const contents = await fetchContents();

  return (
    <section className="bg-white">
      <div className="py-36 h-screen mx-auto w-9/12 md:max-w-3xl lg:max-w-6xl lg:px-12 text-center flex flex-col justify-center">
        <h1 className="mb-6 font-display text-4xl font-light tracking-tighter text-rose sm:text-6xl">
          {contents.acf.titulo}
        </h1>
        <span
          className="mt-6 space-y-6 font-display font-extralight text-xl tracking-tight text-rose"
          dangerouslySetInnerHTML={{ __html: contents.acf.descripcion }}
        ></span>
      </div>
    </section>
  );
}
