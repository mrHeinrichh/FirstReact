import Home from './Home'
import Navbar from './Navbar'

function App() {
  const likes = 50
  const title = 'WElcome tot he new blog'
  // const person = { name: 'yoshi', age: 30 }
  const link = 'google.com'

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p> Liked {likes} times </p>
        <p>{10}</p>
        <p> {'hello ninja'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  )
}

export default App
