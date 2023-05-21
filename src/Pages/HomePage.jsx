import ".//HomePage.css"
import React from 'react'


export const HomePage = () => {
  return (
    <div>
      <h1>Ini HomePage</h1>
      <a href="/product">
        <h2>Product Page</h2>
      </a>
      <a href="/user">
        <h2>User Page</h2>
      </a>
    </div>
  );
}

export default HomePage ;
