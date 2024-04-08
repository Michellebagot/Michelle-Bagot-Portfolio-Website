import { useEffect, useState } from "react";

const CTA = () => {
  const adjectives = [
    "A Problem-Solver",
    "A Code Crafter",
    "A Software Developer",
    "A Team Player",
    "An Innovative Thinker",
    "User Focused",
    "A Lifelong Learner",
  ];

  const [count, setCount] = useState(0);
  const [adjectiveState, setAdjectiveState] = useState(adjectives[count]);

  const updateAdjectives = () => {
    const newCount = (count + 1) % adjectives.length;
    setCount(newCount);
    setAdjectiveState(adjectives[newCount]);
  };

  const timeoutFunc = () => {
    setTimeout(updateAdjectives, 3000);
  };

  useEffect(() => {
    timeoutFunc();
  }, [adjectiveState]);

  return <p>{adjectiveState}</p>;
};

export default CTA;
