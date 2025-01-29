import { Table, ButtonGroup, Button } from "@chakra-ui/react";
import { PencilSimple, TrashSimple, DotsThree } from "@phosphor-icons/react";
import Spinner from "../assets/spinner";

export function RaffleTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Nome</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          <Table.ColumnHeader>Criada em</Table.ColumnHeader>
          <Table.ColumnHeader>Termina em</Table.ColumnHeader>
          <Table.ColumnHeader>Qtd. Participantes</Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Ana Cristina Silva</Table.Cell>
          <Table.Cell >
            <div className="flex gap-2">
              <Spinner />
              Aberto
            </div>
          </Table.Cell>
          <Table.Cell>25/01/2025</Table.Cell>
          <Table.Cell>25/04/2025</Table.Cell>
          <Table.Cell>25/50</Table.Cell>
          <Table.Cell>
            <ButtonGroup>
              <Button size={"xs"} colorPalette={"yellow"}>
                <PencilSimple />
              </Button>
              <Button size={"xs"} colorPalette={"red"}>
                <TrashSimple />
              </Button>
              <Button size={"xs"} colorPalette={"blue"}>
                <DotsThree />
              </Button>
            </ButtonGroup>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}