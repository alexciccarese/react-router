import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const api_url = 'http://localhost:3003'

export default function Post() {
  const [post, setPost] = useState(null)

  const { id } = useParams()
  console.log(id);
  

useEffect(() => {
  fetch(`${api_url}/posts/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setPost(data)
    
  })
  .catch(err => {
    console.log('Error', err);
    
  })
},[])


  return (

    <>
      <main>

        {
          !post ? ('Loading...')
            : (
              <>

                <div style={{ minHeight: '50vh', backgroundImage: `url(${api_url + post.image})`, backgroundSize: 'cover' }}></div>

                <section id="post_details" className="mt-5">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-12 col-md-5">
                        <img className="img-fluid" src={api_url + post.image} alt={post.title} />
                      </div>
                      <div className="col-12 col-md-7">

                        <button className="back">
                          <i className="bi bi-arrow-left"></i>
                        </button>
                        <h1>Post: {post.title}</h1>
                        <p>{post.content}</p>
                      </div>
                    </div>
                  </div>
                </section>

              </>
            )
        }
      </main>

    </>
  )
}