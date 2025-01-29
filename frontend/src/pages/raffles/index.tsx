import "@/index.css";

import {
    MagnifyingGlass
} from "@phosphor-icons/react";
import { Button, TextField } from "@radix-ui/themes";
import { CreateRaffleModal } from "./components/modal";
import { RaffleTable } from "./components/table";

export function RafflesPage() {
    return (
        <div className="raffle-page flex h-screen flex-col gap-12 relative">
            <h1 className="text-stone-800">Tabela de Rifas</h1>

            <div className="raffle-container flex flex-col gap-4">
                <form className="flex flex-col gap-7">
                    <div className="flex">
                        <div className="input-wrapper grow justify-between">
                            <div className="flex gap-4">

                                <TextField.Root

                                    type="text"
                                    placeholder="Procure por algum nome"
                                    className="text-stone-800"
                                >
                                    <TextField.Slot><MagnifyingGlass width={18} height={18} /></TextField.Slot>
                                </TextField.Root>
                                <Button>
                                    Pesquisar
                                </Button>
                            </div>
                            <CreateRaffleModal />
                        </div>
                    </div>
                    <RaffleTable />
                </form>
            </div>
        </div>
    );
}
