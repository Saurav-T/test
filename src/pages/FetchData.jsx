import React, { useEffect, useState } from 'react'

const FetchData = () => {
    let [posts, setPosts] = useState([])
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            return response.json()
        })
        .then(data=>setPosts(data)) //Data will be the output of above then function
        .catch((error)=> {
            console.log(error)
        })
    },[])

    return (
    <>
        <div className="bg-primary-subtle p-5">
            {
                posts.map((post)=>{
                    return <div className='p-5 bg-success=subtle fs-3'>
                        <h3>{post.title}</h3>
                    </div>
                })
            }
        </div>
    </>
  )
}

export default FetchData