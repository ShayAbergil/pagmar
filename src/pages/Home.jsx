import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Welcome to the Survey</h1>
      <p>Click below to start.</p>
      <Link to="/bio" className="mt-5 inline-block bg-blue-500 text-white px-5 py-2 rounded">
        Start Survey
      </Link>
    </div>
  );
}

export default Home;
