import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import Posts from "./pages/Posts"
import DefaultLayout from "./layout/DefaultLayout"
import Post from "./pages/Post"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>
            
            <Route path="/" Component={Home} />
            <Route path="/ChiSiamo" Component={ChiSiamo} />
            <Route path="/Posts" Component={Posts} />
            <Route path="/Posts/:slug" Component={Post} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
