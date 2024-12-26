import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Oops!! Something went wrong.</h2>
      <p>We couldn't find the page you're looking for.</p>
      {err && (
        <div>
          <h3>
            {err.status} : {err.statusText}
          </h3>
          <p>
            There was an error while trying to load the page. Please try again
            later.
          </p>
        </div>
      )}
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Error;
