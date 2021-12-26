import React from "react";
import { useParams } from "react-router-dom";
import { useGetFileQuery } from "../store/api/fileApi";
import Loader from "./layout/Loader";

const ProcessFile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetFileQuery(id);

  if (isLoading) return <Loader />;

  if (isError) {
    return (
      <h2 className='font-mono font-bold text-xl text-center pt-5'>
        Something went wrong...!!
      </h2>
    );
  }

  return (
    <>
      {data && (
        <section className='container mx-auto p-6 font-mono'>
          <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
            <div className='w-full overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                    <th className='px-4 py-3'>X1</th>
                    <th className='px-4 py-3'>IRR</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {JSON.parse(data).map((val, index) => (
                    <tr key={index} className='text-gray-700'>
                      <td className='px-4 py-3 text-ms font-semibold border'>
                        {val["X1"]}
                      </td>
                      <td className='px-4 py-3 text-sm border'>
                        {val["IRR"].toFixed(2)} %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProcessFile;
