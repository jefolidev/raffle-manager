import { InputGroup } from "@/components/ui/input-group";
import "@/index.css";
import { Button, DialogActionTrigger, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, Input, Portal } from "@chakra-ui/react";
import {
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react";
import { RaffleTable } from "./components/table";

export function RafflesPage() {
  return (
    <div className="raffle-page flex h-screen flex-col gap-12">
      <h1 className="text-stone-800">Tabela de Rifas</h1>

      <div className="raffle-container flex flex-col gap-4">
        <form className="flex flex-col gap-7">
          <div className="flex">
            <div className="input-wrapper grow justify-between">
              <div className="flex gap-4">
                <InputGroup
                  endElement={<MagnifyingGlass width={18} height={18} />}
                >
                  <Input
                    type="text"
                    placeholder="Procure por algum nome"
                    variant="outline"
                    className="text-stone-800"
                  />

                </InputGroup>
                <Button colorPalette={"blue"} type="submit">
                  Pesquisar
                </Button>
              </div>


              <DialogRoot placement={"center"}>
                <DialogBackdrop />
                <DialogTrigger asChild>
                  <Button colorPalette={"blue"} type="button">
                    <Plus /> Criar Rifa
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogCloseTrigger />
                  <DialogHeader>
                    <DialogTitle> Criar nova rifa </DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <form></form>
                  </DialogBody>
                  <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Save</Button>
                  </DialogFooter>
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
            </div>
          </div>
          <RaffleTable />
        </form>
      </div>
    </div>
  );
}
