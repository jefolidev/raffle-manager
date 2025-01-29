
import { DotsThree, PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { Button, Flex, Table } from "@radix-ui/themes";
import Spinner from "../assets/spinner";

export function RaffleTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Criada em</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Termina em</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Qtd. Participantes</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
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
            <Flex gap="2">
              <Button color="amber">
                <PencilSimple />
              </Button>
              <Button color="red">
                <TrashSimple />
              </Button>
              <Button>
                <DotsThree />
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}