import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  });
  return response.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <div>
      <h1>Blog page</h1>
      <ul>
        
      {posts.map((post: {id: string, title: string}) => {
        return <li key={post.id}>
          <Link href={`/pages/blog/${post.id}`}>{post.title}</Link>
        </li>; 
      })}
      </ul>
    </div>
  );
}
