import React, { useEffect, useReducer, useState } from 'react'
import { useQuery } from 'react-query'
import { SinglePost } from './SinglePost';

export const AllPosts = () => {
  
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [allposts, setAllPosts] = useState([])
  
  // const {data: allposts = [], refetch, isloader} = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/allposts");
  //     const data = await res.json()
  //     return data
  //   }
  // })

  useEffect(() => {
    fetch("http://localhost:5000/allposts")
      .then(res => res.json())
      .then(data => {
        
        setAllPosts(data)
        forceUpdate()

      })
      .catch(e => console.error(e))
  }, [])

 
  console.log(allposts)
  return (
    <div className='mt-5'>
      <div className=''>
        {
          allposts.map(post => <SinglePost key={post._id} post={post}></SinglePost>)
        }
      </div>
    </div>
  )
}
