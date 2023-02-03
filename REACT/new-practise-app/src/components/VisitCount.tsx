import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const VisitCount = () => {
  const { pathname } = useLocation();
  const [count, setCount] = useState();

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, [pathname]);

  return <p>{count}</p>;
};
