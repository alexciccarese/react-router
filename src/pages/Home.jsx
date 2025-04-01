import { Link } from "react-router-dom"
import PostList from "./PostList"

export default function Home() {

  return (

    <>
      <main>
        <div className="jumbotron">
          <div class="container py-5">
            <h1 class="display-5 fw-bold">Vedi tutti i dolci</h1>
            <p class="col-md-8 fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore aspernatur, unde laudantium similique cum fuga dolores qui quidem quisquam distinctio et laboriosam expedita magnam neque totam esse voluptatum. Nisi.</p>
            <Link to="/PostList" className="btn btn-primary btn-lg">
            Tutti i dolci
            </Link>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row d-flex row-cols-2 gap-3 flex-nowrap">
            <div className="first-content">
              Content
            </div>
            <div className="second-content">
              Content
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
