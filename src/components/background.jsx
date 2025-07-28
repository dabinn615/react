import React from 'react';
import bgImage from '../assets/background.jpg';
import MyImage from '../assets/image.jpg';

function Background() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // 세로 방향으로 정렬
      }}
    >
      <img
        src={MyImage}
        alt="My Image"
        style={{
          width: '200px',
          height: '200px',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ color: 'black', fontSize: '3rem' }}>
        안녕하세요. 개발자 우다빈입니댱.
      </h1>
      <h2>"끊임없이 배우고 성장하는 개발자입니다. <br></br> 포기하지 않는 끈기와 밝은 에너지로 함께 일하기 좋은 사람을 꿈꿉니다."</h2>
    </div>
  );
}

export default Background;
