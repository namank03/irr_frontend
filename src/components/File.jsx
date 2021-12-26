import React from "react";
import { Link } from "react-router-dom";

function File({ file }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-center'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>
          {file.file.substring(file.file.lastIndexOf("/") + 1)}
        </div>
        <p className='text-gray-400 text-sm font-mono font-bold text-center'>
          {file.created_at}
        </p>
      </div>
      <Link
        className='m-2 border-2 p-2 rounded-lg cursor-pointer shadow-sm bg-gray-900 border-green-900 text-white'
        to={`process-file/${file.id}`}
      >
        Calculate IRR
      </Link>
    </div>
  );
}

export default File;
