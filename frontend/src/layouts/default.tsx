import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router";

export function DefaultLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}