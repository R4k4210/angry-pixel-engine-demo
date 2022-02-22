import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Go to
      <Link to={"/game"}>Game</Link>
    </div>
  );
};

export default Home;
