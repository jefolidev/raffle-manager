import { DotsThreeVertical } from "@phosphor-icons/react";
import { Flex, Popover, Table } from "@radix-ui/themes";
import Spinner from "../assets/spinner";

export function RaffleTable() {
  return (
    <Table.Root className="table-root">
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
          <Table.Cell>
            <Flex gap={"2"}>
              <Spinner />
              Aberto
            </Flex>
          </Table.Cell>
          <Table.Cell>25/01/2025</Table.Cell>
          <Table.Cell>25/04/2025</Table.Cell>
          <Table.Cell>25/50</Table.Cell>
          <Table.Cell>
            <Popover.Root>
              <Popover.Trigger>
                <button>
                  <DotsThreeVertical
                    color="#1d1d1d"
                    width={"18"}
                    height={"18"}
                  />
                </button>
              </Popover.Trigger>
              <Popover.Content>
                <Flex direction={"column"} align={"start"}>
                  <button>Ver detalhes</button>
                  <button>Editar</button>
                  <button>Excluir</button>
                </Flex>
              </Popover.Content>
            </Popover.Root>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
