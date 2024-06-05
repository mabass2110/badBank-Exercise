import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import { createContext } from 'react'
import './App.css'
import Home from './home'
import Products from './products'
import About from './about'
import Nav from './navbar'
import Navigation from './navbar'

const UserContext = createContext(null)

function App() {
  
  return (
    <BrowserRouter>
      <div>

        <h1>Routing - Hello World</h1>

        <Navigation/>

        <hr/>

        <UserContext.Provider value={{users:['Helder']}}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about/' element={<About/>}></Route>
            <Route path='/products/' element={<Products/>}></Route>
          </Routes>
        </UserContext.Provider>

      </div>
    </BrowserRouter>
  )
}

export default App
