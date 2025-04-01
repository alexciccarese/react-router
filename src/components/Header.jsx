import { NavLink } from "react-router-dom"

export default function Header() {

  return(

    <>
          <header>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <div class="container">
                    <a class="navbar-brand" href="#"><h2>PostList</h2></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarID">
                        <div class="navbar-nav">
                          <NavLink className="nav-link active" to="/">Home</NavLink>
                          <NavLink className="nav-link active" to="/Chisiamo">Chi siamo</NavLink>
                          <NavLink className="nav-link active" to="/PostList">Posts</NavLink>
                            
                        </div>
                    </div>
                </div>
            </nav>
      </header>
    </>
  )
}