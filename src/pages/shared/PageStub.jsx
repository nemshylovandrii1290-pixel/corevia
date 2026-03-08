function PageStub({ title, description, top = 24 }) {
  return (
    <section className="container" style={{ paddingTop: `${top}px`, paddingBottom: '48px' }}>
      <h1 style={{ marginBottom: '10px' }}>{title}</h1>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: '720px' }}>{description}</p>
    </section>
  )
}

export default PageStub
