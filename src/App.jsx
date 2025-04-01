import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import PostList from "./pages/PostList"
import DefaultLayout from "./layout/DefaultLayout"

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Home}/>
          <Route path="/Chi-siamo" Component={ChiSiamo}/>
          <Route path="/PostList" Component={PostList}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
