import React, { useEffect, useState } from "react";
import axios from "axios";

const GetProgress = ({ taskId, onTaskComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getProgress = (async) => {
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
  return <div>{progress}</div>;
};

export default GetProgress;
