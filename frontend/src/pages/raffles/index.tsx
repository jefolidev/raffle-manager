import "@/index.css";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { CreateRaffleModal } from "./components/modal";
import { RaffleTable } from "./components/table";

export function RafflesPage() {
  return (
    <div className="raffle-page relative flex h-screen flex-col gap-12">
      <h1 className="text-stone-800">Tabela de Rifas</h1>

      <div className="raffle-container flex flex-col gap-4">
        <form className="flex flex-col gap-7">
          <div className="flex">
            <div className="input-wrapper grow justify-between">
              <Flex gap={"2"}>
                <TextField.Root
                  type="text"
                  placeholder="Procure por algum nome"
                  className="text-stone-800"
                >
                  <TextField.Slot>
                    <MagnifyingGlass width={18} height={18} />
                  </TextField.Slot>
                </TextField.Root>
                <Button>Pesquisar</Button>
              </Flex>
              <CreateRaffleModal />
            </div>
          </div>
          <RaffleTable />
        </form>
      </div>
    </div>
  );
}
