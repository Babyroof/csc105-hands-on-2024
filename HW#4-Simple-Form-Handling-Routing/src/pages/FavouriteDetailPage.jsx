import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const size = searchParams.get('size');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Favourite Details</h2>
        <p className="text-lg mb-2">- Your favourite post is <span className="font-semibold text-amber-500">{q}</span>.</p>
        <p className="text-lg mb-2">- Post ID is <span className="font-semibold text-amber-500">{id}</span>.</p>
        <p className="text-lg mb-2">- Size is <span className="font-semibold text-amber-500">{size}</span>.</p>
      </div>
    </div>
  );
};

export default FavouriteDetailPage;
