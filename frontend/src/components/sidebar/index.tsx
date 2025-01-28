import { Confetti, Users } from "@phosphor-icons/react";
import { NavLink } from "react-router";
import { HeaderSideBar } from "./components/header";

export function Sidebar() {

    return (
        <aside className="sidebar flex flex-col h-[100vh] bg-gray-100 w-[20%]">
            <HeaderSideBar />

            <section className="flex flex-col gap-3">
                <h2 className="text-gray-400 uppercase">Páginas Principais</h2>

                <div className="flex flex-col gap-3">
                    <NavLink className={({ isActive }) => isActive ? "active-url flex gap-3 items-center" : "flex gap-3 items-center"} to={"/raffles"} >
                        <Confetti width={24} height={24} color="#a6a09b" />
                        <span className="text-stone-800">Rifas</span>
                    </NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active-url flex gap-3 items-center" : "flex gap-3 items-center"} to={"/participants"}>
                        <Users width={24} height={24} color="#a6a09b" />
                        <span className="text-stone-800">Participantes</span>
                    </NavLink>
                </div>

            </section>

        </aside >
    )
}