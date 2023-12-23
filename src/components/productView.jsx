export const productView = (info) => {
  const { nombre, url } = info

  return (
    <div>
      <img alt={nombre} src={url} />
    </div>
  )
}