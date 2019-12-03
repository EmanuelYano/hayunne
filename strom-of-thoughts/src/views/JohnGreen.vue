<template>
<v-app>
   
        <v-content>
          <router-view></router-view>
        </v-content>
     
        <v-layout row wrap>
          <v-flex xs12 sm8 md6 lg4 v-for="frase in frases" :key="frase.texto" pa-2>
          <v-card
            class="mx-auto"
            :color="frase.cor"
            dark
            height="390px"
          >
            <v-card-title>
              <v-icon large left>cloud</v-icon>
              <span class="title font-weight-light">STORM OF THOUGHTS</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold" style="height: 250px">
              "{{frase.texto}}"
            </v-card-text>
            <v-card-actions>
              <v-list-tile class="grow">
                <v-list-tile-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    :src="frase.imagem"
                  ></v-img>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Frases de {{frase.autor}}</v-list-tile-title>
                </v-list-tile-content>
                <v-layout
                  align-center
                  justify-end
                >
                  <v-btn fab dark small color="pink">
                    <v-icon dark>favorite</v-icon>
                  </v-btn>
                </v-layout>
              </v-list-tile>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
       </v-app>
    </template>
    <script>
export default {
  data () {
    return {
      frases: [
        {
          texto: "Tentar se afastar de mim, não vai fazer diminuir o que eu sinto por você. -John Green (A Culpa é das Estrelas)",
          cor:"#A9F5F2",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Só lembre-se de que, às vezes, o que você pensa de uma pessoa, não é o que ela realmente é. -John Green",
          cor:"#81F7F3",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Se as pessoas fossem chuva, eu era garoa e ela um furacão. -John Green (Quem é você, Alasca?) ",
          cor:"#58FAF4",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
         {
          texto: "Estou a divagar, mas eis a falha: os mortos são visíveis apenas através do terrível olho vigilante da memória. Os vivos, graças aos céus, mantém a capacidade de surpreender e decepcionar. -John Green ",
          cor:"#2EFEF7",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
         {
          texto: "Não sei com o que eu me pareço, mas sei como me sinto: Jovem. Estúpido. Infinito. -John Green(Quentin Jacobsen - Cidades de Papel)  ",
          cor:"#01DFD7",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "O para sempre é composto de agoras. -John Green (Margo Roth Spiegelman - Cidades de Papel)  ",
          cor:"#04B4AE",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Eu sei que amor é um grito no vazio e o esquecimento é inevitável. -John Green (A Culpa É das Estrelas) ",
          cor:"#088A85",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "A única maneira de sair do labirinto de sofrimento é a perdoar. -John Green ",
          cor:"#0B615E",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Algumas pessoas têm vidas, algumas pessoas têm a música. -John Green (Will e Will - Um Nome, Um Destino)",
          cor:"#0B3B39",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Você gosta de alguém que não pode retribuir o seu amor porque é possível sobreviver ao amor não correspondido de uma forma impossível no caso do amor uma vez correspondido. -John Green",
          cor:"#0A2A29",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        {
          texto: "Às vezes, você lê um livro e ele te preenche com este zelo evangélico estranho, e você se convence de que o mundo estilhaçado nunca será reconstruído a menos que todos os seres humanos leiam esse livro. -John Green",
          cor:"#071918",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
         {
          texto: "O verdadeiro amor triunfará no final - o que pode ou não ser uma mentira, mas se for mentira, então é a mais bela mentira que temos. -John Green",
          cor:"#071418",
          imagem: "http://leitorcompulsivo.com.br/wp-content/uploads/2018/06/johngreen.jpg",
          autor: "John Green",
        },
        
      ],
      mostra: false 
    }
  }
}
</script>

