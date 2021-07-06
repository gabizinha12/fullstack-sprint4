import React, { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import "./styles.css";
function Loading() {
  const contextLoading = useContext(LoadingContext);
  const { loading } = contextLoading;
  console.log(contextLoading);

  return (
    <div className={`loading ${loading.show ? "" : "loading--hide"}`}>
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      <div className="bar bar4"></div>
      <div className="bar bar5"></div>
      <div className="bar bar6"></div>
      <div className="bar bar7"></div>
      <div className="bar bar8"></div>
    </div>
  );
}

export default Loading;
