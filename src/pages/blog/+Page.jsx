export function Page() {
    const id = "1234567899"
    return (
      <>
        <h1>Blog</h1>
        <p>This app showcases a migration from Vite to Vike.</p>
        <a href="/layoutPrincipal">Vamos al Layout principal</a>
        <br />
        <a href={`/blog/${id}`}>Articulo de Blog</a>
      </>
    )
  }