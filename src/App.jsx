import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Home from './home'
import Products from './products'
import About from './about'

function App() {
  
  return (
    <BrowserRouter>
      <div>

        <h1>Routing - Hello World</h1>
        <Link to='/'>Home</Link>--
        <Link to='/about'>About</Link>--
        <Link to='/products'>Products</Link>--

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about/' element={<About/>}></Route>
          <Route path='/products/' element={<Products/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
