import { InputGroup } from '@/components/ui/input-group'
import '@/index.css'
import { Button, Input, Table } from '@chakra-ui/react'
import { MagnifyingGlass, Plus } from '@phosphor-icons/react'

export function RafflesPage() { 
    return (
        <div className="raffle-page flex flex-col h-screen gap-12">
            <h1 className='text-stone-800'>Tabela de Rifas</h1>

            <div className="raffle-container flex flex-col gap-4">
                <form className="flex flex-col gap-7">
                    <div className="flex ">
                        <div className="input-wrapper justify-between grow">
                            <div className='flex gap-4'>
                                <InputGroup endElement={<MagnifyingGlass width={18} height={18} />}>
                                    <Input type="text" placeholder='Procure por algum nome' variant="outline" className=' text-stone-800' />
                                </InputGroup>
                                <Button colorPalette={"blue"} type='submit'>Pesquisar</Button>
                            </div>

                            {/* Mudar para ModalTrigger dps */}
                            <Button colorPalette={"blue"} type="button" > <Plus /> Criar Rifa</Button>
                        </div>
                    </div>
                    <Table.Root >
                        <Table.Header >
                            <Table.Row >
                                <Table.ColumnHeader>Nome</Table.ColumnHeader>
                                <Table.ColumnHeader>Status</Table.ColumnHeader>
                                <Table.ColumnHeader>Criada em</Table.ColumnHeader>
                                <Table.ColumnHeader>Termina em</Table.ColumnHeader>
                                <Table.ColumnHeader>Qtd. Participantes</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                    </Table.Root>

                </form>
            </div>
        </div>
    )
}