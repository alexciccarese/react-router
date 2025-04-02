import { NavLink } from "react-router-dom"

export default function Header() {

  return(

    <>
          <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#"><h2>PostList</h2></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarID">
                        <div className="navbar-nav">
                          <NavLink className="nav-link active" to="/">Home</NavLink>
                          <NavLink className="nav-link active" to="/ChiSiamo">Chi siamo</NavLink>
                          <NavLink className="nav-link active" to="/Posts">Dolci</NavLink>
                            
                        </div>
                    </div>
                </div>
            </nav>
      </header>
    </>
  )
}