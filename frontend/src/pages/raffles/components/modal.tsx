import { Plus } from "@phosphor-icons/react";
import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";

export function CreateRaffleModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Plus /> <span className="text-"> Criar Rifa</span>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="600px" className="">
        <Dialog.Title>
          <Dialog.Title> Criar nova rifa </Dialog.Title>
        </Dialog.Title>
        <form id="new-raffle">
          <Flex gap={"4"} direction={"column"}>
            <Flex justify={"between"} gap={"2"}>
              <Flex direction={"column"} flexGrow={"1"} gap={"1.5"}>
                <label>
                  Título da Rifa <p>*</p>
                </label>
                <TextField.Root placeholder="Insira o nome da rifa" />
              </Flex>

              <Flex direction={"column"} flexGrow={"1"} gap={"1.5"}>
                <label>
                  Rifa termina em: <p>*</p>
                </label>
                <input type="date" />
              </Flex>
            </Flex>

            <Flex justify={"between"} gap={"4"}>
              <Flex direction={"column"} flexGrow={"1"} gap={"1.5"}>
                <label>
                  Valor do Pontos <p>*</p>
                </label>
                <TextField.Root placeholder="Insira o nome da rifa" />
              </Flex>

              <Flex direction={"column"} flexGrow={"1"} gap={"1.5"}>
                <label>Máximo de participantes</label>
                <TextField.Root placeholder="Insira o nome da rifa" />
                <p className="input-legend">
                  * Deixe vazio para participantes ilimitados
                </p>
              </Flex>
            </Flex>
          </Flex>
        </form>

        <Flex id="raffle-buttons" gap={"2"} justify={"end"}>
          <Button>Criar</Button>
          <Dialog.Close>
            <Button variant="outline">Cancelar</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
