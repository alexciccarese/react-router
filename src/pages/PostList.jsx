import { useEffect, useState } from "react"

const api_url = 'http://localhost:3003'

export default function PostList() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetchData(`${api_url}/posts`)

  }, [])

  function fetchData(url) {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data)
      })
  }

  return (

    <>
      <main>
        <div className="container py-5">
          <h1 className="display-5 fw-bold mb-4">Tutti i nostri dolci</h1>

          <div className="row">

            {posts.map(post => (
              <div className="col" key={`post-${post.slug}`}>
                <div className="card">
                  <img className="card-img-top" src={api_url + post.image} alt={post.title} />
                    <div className="card-body">
                      {post.title}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  )
}