export const App = () => {
  const name = 'Matt'
  return (
    <h1>
      QTrition - {process.env.NODE_ENV} {process.env.name}
    </h1>
  )
}
