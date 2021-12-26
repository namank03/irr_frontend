import React from "react";
import { Link } from "react-router-dom";

function File({ file }) {
  return (
    <tr className='text-gray-700'>
      <td className='px-4 py-3 text-ms font-semibold border'>
        {file.file.substring(file.file.lastIndexOf("/") + 1)}
      </td>
      <td className='px-4 py-3 text-sm border'>{file.created_at}</td>
      <td className='px-4 py-3 text-sm border'>
        <Link
          className='m-2 border-2 p-2 rounded-lg cursor-pointer shadow-sm bg-gray-900 text-white'
          to={`process-file/${file.id}`}
        >
          Calculate IRR
        </Link>
      </td>
    </tr>
  );
}

export default File;
