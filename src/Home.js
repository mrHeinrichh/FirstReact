const Home = () => {
  const handleClick = (e) => {
    console.log('hello, ninjas', e)
  }

  const handleClickAgain = (name, e) => {
    console.log('hello' + name, e.target)
  }
  return (
    <div className="home">
      <h2>Homepagedsa</h2>
      <button onClick={handleClick}>Clicsk me</button>
      <button onClick={(e) => handleClickAgain('Mario', e)}>
        Click me again
      </button>
    </div>
  )
}

export default Home
