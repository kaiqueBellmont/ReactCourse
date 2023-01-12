import React from "react";

const Container = ({ children, containerValue }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>
      {children}
      {containerValue}
    </div>
  );
};

export default Container;
