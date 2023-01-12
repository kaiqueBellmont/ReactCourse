import React from "react";

const Fragment = ({propFragment}) => {
  
  return (
    <>
      <div>
        <h2>Temos dois elementos pai</h2>
      </div>
      <div>
        <h2>Este também é</h2>
        {propFragment}
      </div>
    </>
  );
};

export default Fragment;