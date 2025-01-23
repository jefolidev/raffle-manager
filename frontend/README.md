! Requisitos Funcionais

- Tabela de Rifas 

- [] Dona Regina deve poder ter acesso a todos as rifas;
- [] Dona Regina deve poder criar um novo registro de rifa;
- [] Dona Regina deve poder editar uma rifa já existente;
- [] Dona Regina deve poder deletar uma rifa;
- [] Dona Regina deve poder ver todas os participantes de uma rifa;
- [] Dona Registra deve poder filtrar registros por quem já pagou e quem não pagou.

- Tabela de Participantes 

- [] Dona Regina deve poder ter acesso a todos os participantes;
- [] Dona Regina deve poder criar um participante;
- [] Dona Regina deve poder editar um participante;
- [] Dona Regina deve poder deletar os participantes;
- [] Dona Regina deve poder ver todos as rifas de um participante;


! Requisitos de Negócios

- [] As rifas devem seguir a tipagem: t_raffles

    - raffle_id - nanoid

    - raffle_title string | "Rifa sem nome"
      - Título da Rifa, ex: Rifa do Dia das Crianças
      - Caso o nome não seja informado, vir como "Rifa sem nome"

    - raffle_status "open" | "closed" | "finished"
      - "open": Ainda vendendo participações.
      - "closed": Não aceita mais participantes, mas ainda não foi sorteada.
      - "finished": Sorteio já realizado

    - created_at: date
    - ends_at: date

    - raffle_participants - Participants[] | undefined
      - Pode ser undefined no início
    
    - raffle_participants_quantity

    - raffle_point_value - number

    - raffle_max_participants - number | undefined
      - Se não tiver limite, o campo pode ser undefined

    - raffle_total_value - number
      - Total arrecadado na rifa: raffle_participants.length * raffle_point_value
    
- [] Os participantes devem seguir a tipagem -- t_participants

    - participant_id - nanoid

    - participant_name - string

    - participant_note - string | undefined
      - Alguma nota ou observação do participante 

    - participant_phone - string
    - purchase_date - date

    - participant_raffles - Raffle[] | undefined
      - Pode ser undefined no início

    - participant_raffles_quantity - number

- [] Tabela intermediária entre participantes e rifas -- t_raffle_participations