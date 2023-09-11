import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: {
    id: string;
  }
};

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export default function Post({params: {id}}: Props) {
  return (
    <div>
      <h1>Post page {id}</h1>
    </div>
  );
}
