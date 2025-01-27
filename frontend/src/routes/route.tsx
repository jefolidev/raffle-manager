import { DefaultLayout } from "@/layouts/default";
import { UserPage } from "@/pages/user";
import { Route, Routes } from "react-router";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<UserPage />} />
            </Route>
        </Routes>
    )
}