<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Frases Clarice Lispector</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" >Adicionar Frase</v-btn>
        </v-toolbar>
        <v-data-table
            :headers="cabecalho"
            :items="frases"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.frase }}</td>
                <td>{{ props.item.data }}</td>
                <td class="justify-center layout px-0">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            frases: [
                {
                    codigo: 1,
                    frase: "Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento. -Clarice Lispector",
                   data: "06/06/19"
                },
                {
                    codigo: 2,
                   frase: "A vida é curta, mas as emoções que podemos deixar duram uma eternidade. -Clarice Lispector",
                   data: "06/06/19"
                },
                {
                    codigo: 3,
                    frase: "Se você se sente infeliz agora, tome alguma providência agora, pois só na sequência dos agoras é que você existe. -Clarice Lispector",
                    data: "06/06/19"
                },
            ],
            cabecalho: [
                {
                    text: 'frase',
                    align: 'center',
                    sortable: true,
                    value: 'descricao'
                },
                {
                    text: 'data',
                    align: 'center',
                    sortable: true,
                    value: 'preco'
                },
                {
                    text: 'Ações',
                    align: 'center',
                    sortable: false
                }
            ]
        }
    }
}
</script>