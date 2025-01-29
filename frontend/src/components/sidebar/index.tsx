import { Confetti, Users } from "@phosphor-icons/react";
import { NavLink } from "react-router";
import { HeaderSideBar } from "./components/header";

export function Sidebar() {
  return (
    <aside className="sidebar flex h-[100vh] w-[20%] flex-col bg-gray-100">
      <HeaderSideBar />

      <section className="flex flex-col">
        <h2 className="uppercase text-gray-400">Páginas Principais</h2>

        <div className="flex flex-col gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-url flex items-center gap-8"
                : "flex items-center gap-8"
            }
            to={"/raffles"}
          >
            <Confetti width={24} height={24} color="#a6a09b" />
            <span className="text-stone-800">Rifas</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-url flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to={"/participants"}
          >
            <Users width={24} height={24} color="#a6a09b" />
            <span className="text-stone-800">Participantes</span>
          </NavLink>
        </div>
      </section>
    </aside>
  );
}
