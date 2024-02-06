import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/index.css';

const TypingTitle = () => {
  const [setShowCursor] = useState(true);

  const handleInit = (typewriter) => {
    typewriter
      .typeString('UAM')
      .pauseFor(1000)
      .deleteAll()
      .typeString('iChat')
      .pauseFor(1000)
      .deleteAll()
      .typeString('UAM iChat')
      .start()
  };
  const handleComplete = () => {
    setShowCursor(false);
  };

  return (
    <div className="text-2xl font-bold">
      <Typewriter options={{ loop: false }}
        onInit={handleInit}
        onComplete={handleComplete} />
    </div>
  );
};

export default TypingTitle;
