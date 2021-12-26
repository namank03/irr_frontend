import React from "react";
import { Link } from "react-router-dom";

function File({ file }) {
  return (
    <tr className='text-gray-700'>
      <td className='px-4 py-3 text-ms font-semibold border'>
        {file.file.substring(file.file.lastIndexOf("/") + 1)}
      </td>
      <td className='px-4 py-3 text-sm border'>{file.created_at}</td>
      <td className='px-4 py-3 text-sm border bg-black'>
        <Link
          className='inline-block text-sm px-4 py-2 leading-none  text-white rounded-lg hover:text-gray-900 
          hover:bg-white mt-4 lg:mt-0 w-full text-center'
          to={`process-file/${file.id}`}
        >
          Calculate IRR
        </Link>
      </td>
    </tr>
  );
}

export default File;
