import { useEffect, useState } from 'react';

const CountdownPage = () => {
  return (
    <div className="gradient-bg-main min-h-[80vh] w-screen py-0 m-0">
      <iframe
        src="https://preview--zero-ciso-dash-countdown.lovable.app/"
        title="Countdown Game"
        className="w-screen h-[80vh] border-0 m-0 p-0"
        allowFullScreen
      />
    </div>
  );
};

export default CountdownPage; 