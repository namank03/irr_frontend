import React from "react";

function File(props) {
  return (
    <div>
      <p>{props.file.file.substring(props.file.file.lastIndexOf("/") + 1)}</p>
      <p>Created at {props.file.created_at}</p>
    </div>
  );
}

export default File;
