import { useRouteError } from "react-router-dom";

const Error = () => {
  const { data, status, statusText } = useRouteError();

  return (
    <div id="error">
      <h1>Oops!!!</h1>
      <h2>
        {status}: {statusText}
      </h2>
      <h3>{data}</h3>
    </div>
  );
};

export default Error;
