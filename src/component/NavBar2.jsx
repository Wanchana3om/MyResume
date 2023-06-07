import { Link } from "react-router-dom";

function NavBar2(props) {
  const handleToggle = () => {
    props.handleLight();
  };

  return (
    <div
      className={`w-screen z-30 flex flex-row shadow-2xl  justify-between ${
        !props.light ? "bg-[#131413]" : "bg-[#80aaff]"
      } text-white items-center py-5 mx-auto fixed`}
    >
      <nav className="ml-[7%]">
        <Link
          to="/"
          className={`text-[30px] ${
            props.light ? "text-white" : "text-[#76f9c5]"
          } font-bold hover:cursor-pointer`}
        >
          MY PROFILE
        </Link>
      </nav>
      <nav className="mr-[7%]">
        <ul className="flex flex-row items-center">
          <a
            className={`text-base hover:${
              props.light ? "text-[#f9c576]" : "text-[#76f9c5]"
            } font-bold hover:cursor-pointer `}
            href="/wanchana _resume.pdf"
            target="_blank"
          >
            Resume
          </a>
          {props.light && (
            <li
              className="ml-[40px] hover:cursor-pointer"
              onClick={handleToggle}
            >
              <img
                src="/icons/icons8-moon-32.png"
                alt=""
                className="w-[20px]"
              />
            </li>
          )}

          {!props.light && (
            <li
              className="ml-[40px] hover:cursor-pointer"
              onClick={handleToggle}
            >
              <img src="/icons/icons8-sun.svg" alt="" className="w-[20px]" />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar2;
