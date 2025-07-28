import Background from "../components/background";
import React from 'react';  

function Main() {
  return (
    <div>
      <Background />
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>
        메인 페이지 내용
      </h1>
    </div>
  );
}

export default Main;