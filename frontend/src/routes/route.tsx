import { DefaultLayout } from "@/layouts/default";
import { ParticipantsPage } from "@/pages/participants";
import { RafflesPage } from "@/pages/raffles";
import { Route, Routes } from "react-router";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/raffles" element={<RafflesPage />} />
                <Route path="/participants" element={<ParticipantsPage />} />

            </Route>
        </Routes>
    )
}