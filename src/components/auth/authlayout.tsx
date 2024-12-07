import { Outlet } from "react-router-dom";
import Header from "../header.tsx";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <section className="w-full">
        <div className="h-screen flex items-center justify-center bg-amber-300 ">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
