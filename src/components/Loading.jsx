import { memo } from "react";
import "./Loading.css";

const Loading = memo(function Loading() {
  return (
    <div className="loading-pane">
      <h2 className="loader">🌀</h2>
    </div>
  );
});

export default Loading;
