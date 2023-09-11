import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className='container'>
        <Link className='link' href='/'>Home</Link>
        <Link className='link' href='/pages/blog'>Blog</Link>
        <Link className='link' href='/about'>about</Link>
      </nav>
    </header>
  );
}
