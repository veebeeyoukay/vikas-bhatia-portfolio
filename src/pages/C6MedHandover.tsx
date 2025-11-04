import React from 'react';

const C6MedHandover: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://c6med-handover.netlify.app"
        className="w-full h-full border-0"
        title="C6Med-Handover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default C6MedHandover;
