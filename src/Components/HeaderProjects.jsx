import { Link } from "react-router-dom";

const HeaderProjects = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black shadow-md p-20 py-10 text-3xl text-white font-bold">
      <Link to="/">
        <span>Portfolio</span>
      </Link>
    </div>
  );
};

export default HeaderProjects;
