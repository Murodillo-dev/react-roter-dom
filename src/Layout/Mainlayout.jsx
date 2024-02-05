import { NavLink ,Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <header className="w-[100%] h-[100px] bg-teal-600 flex justify-between px-40 box-border items-center text-[35px]">
        <NavLink to="/">React JS</NavLink>
        <ul className=" main-nav flex justify-start gap-10 text-[20px]">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="portfolio">Portfolio</NavLink></li>
          <li><NavLink to="services">Services</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer></footer>
    </>
  );
};

export default Mainlayout;
