function ItemListContainer({ greeting }) {
  return (
    <main className="hero">
      <h1 className="hero__title">{greeting}</h1>
      <p className="hero__subtitle">
        Descubrí el universo Checkmate: cosmética, fragancias y estilo femenino.
      </p>
      <button className="btn-primary">Ver productos</button>
    </main>
  );
}

export default ItemListContainer;