import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Page not found, go back
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
