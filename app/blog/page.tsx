import React from 'react'
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "Next.js app",
};

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=12', {
    next: {
      revalidate: 60
    }
  })
  return response.json()
}

const Blog = async () => {
  const posts = await getData()

  return (
    <ul className='posts'>
      {posts.map((post:any)=><li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>)}
    </ul>
  )
}

export default Blog