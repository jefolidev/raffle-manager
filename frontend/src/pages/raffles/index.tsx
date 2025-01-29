import { InputGroup } from "@/components/ui/input-group";
import "@/index.css";
import {
    MagnifyingGlass,
    Plus,
} from "@phosphor-icons/react";
import { Button, Dialog } from "@radix-ui/themes";
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
                                <InputGroup
                                    endElement={<MagnifyingGlass width={18} height={18} />}
                                >
                                    <input
                                        type="text"
                                        placeholder="Procure por algum nome"
                                        className="text-stone-800"
                                    />

                                </InputGroup>
                                <Button variant="classic">
                                    Pesquisar
                                </Button>
                            </div>


                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <Button >
                                        <Plus /> Criar Rifa
                                    </Button>
                                </Dialog.Trigger>

                                <Dialog.Content>
                                    <Dialog.Title>
                                        <Dialog.Title> Criar nova rifa </Dialog.Title>
                                    </Dialog.Title>
                                    <form></form>
                                    <Button>Save</Button>
                                    <Dialog.Close>

                                        <Button variant="outline">Cancel</Button>
                                    </Dialog.Close>

                                </Dialog.Content>
                            </Dialog.Root>
                        </div>
                    </div>
                    <RaffleTable />
                </form>
            </div>
        </div>
    );
}
