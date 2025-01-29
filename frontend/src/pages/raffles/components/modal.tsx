import { Plus } from "@phosphor-icons/react";
import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";

export function CreateRaffleModal() {

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button >
                    <Plus /> <span className="text-"> Criar Rifa</span>
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="600px">
                <Dialog.Title>
                    <Dialog.Title> Criar nova rifa </Dialog.Title>
                </Dialog.Title>
                <form>
                    <Flex >

                        <label>Título da Rifa</label>
                        <TextField.Root placeholder="Insira o nome da rifa" />

                        <label>Rifa termina em:</label>






                    </Flex>
                    <label>Valor do Pontos</label>
                    <TextField.Root placeholder="Insira o nome da rifa" />

                    <label>Máximo de participantes</label>
                    <TextField.Root placeholder="Insira o nome da rifa" />

                </form>

                <Button>Save</Button>
                <Dialog.Close>

                    <Button variant="outline">Cancel</Button>
                </Dialog.Close>

            </Dialog.Content>
        </Dialog.Root>
    )
}