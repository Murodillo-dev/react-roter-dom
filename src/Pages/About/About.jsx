import { NavLink, Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1 className="px-20 text-center text-[35px] mt-[30px] text-red-700">
        This is About page
      </h1>

      <div className="info flex justify-around mt-[50px]">
        <div className="info__left w-[300px]  h-[500px]">
          <ul className=" nav w-[100%] h-[100%] flex flex-col justify-between items-center py-5 box-border text-[35px]">
            <li>
              <NavLink to="react">React JS</NavLink>
            </li>
            <li>
              <NavLink to="vanilla">Vanilla JS</NavLink>
            </li>
            <li>
              <NavLink to="vue">Vue JS</NavLink>
            </li>
            <li>
              <NavLink to="typescript">TypeScript</NavLink>
            </li>
            <li>
              <NavLink to="tailwind">Tailwind CSS</NavLink>
            </li>
          </ul>
        </div>
        <div className="info__right w-[700px] h-[500px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
