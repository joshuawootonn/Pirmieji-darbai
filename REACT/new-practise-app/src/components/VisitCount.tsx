import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const VisitCount = () => {
  const { pathname } = useLocation();
  const [count, setCount] = useState(0);
  //state visad turi kazkas po kapotu

  useEffect(() => {
    setCount(count + 1);
  }, [pathname]);

  return <p>{count}</p>;
};
