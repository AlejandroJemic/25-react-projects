import React from 'react';
import './styles.css';
import { useEffect } from 'react';

export default function ScrollIndicator() {
  const [scrollPercentage , setScrollPercentage] = React.useState(0);
  function onScroll() {
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrolled / height) * 100 || 0;
    setScrollPercentage(percentage);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll); // create an event listener on componentDidMount
    return () => {
      window.removeEventListener('scroll', onScroll); // remove event listener on componentWillUnmount
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-indicator" style={{width: `${scrollPercentage}%`}} />
    </div>
  );
}
