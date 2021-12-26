import React, { useEffect, useState } from "react";
import axios from "axios";

const GetProgress = ({ taskId, onTaskComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getProgress = async () => {
      return axios
        .get(`http://localhost:8000/celery-progress/${taskId}`)
        .then((res) => {
          if (res.data.complete) onTaskComplete(res?.data.result);
          if (!res.data.complete && !res.data?.progess?.pending) {
            setProgress(res?.data?.progress.percent);
            return setTimeout(() => {
              getProgress(taskId);
            }, 1000);
          }
        })
        .catch((err) => console.log(err));
    };
    getProgress();
  }, [taskId, onTaskComplete]);
  return (
    <>
      <h1 className='text-center font-bold text-xl p-4'>{progress}%</h1>
      <div className='h-1 w-full bg-gray-300'>
        <div
          style={{ width: `${progress}%` }}
          className={`h-full ${progress < 70 ? "bg-red-600" : "bg-green-600"}`}
        ></div>
      </div>
    </>
  );
};

export default GetProgress;
