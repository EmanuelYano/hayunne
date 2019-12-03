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
          texto: "Que tempos difíceis eram aqueles: ter a vontade e a necessidade de viver, mas não a habilidade. -Charles Bukowski",
          cor:"#F5BCA9",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        }, 
        {
          texto: "Não sei quanto às outras pessoas, mas quando me abaixo para colocar os sapatos de manhã, penso, Deus Todo-Poderoso, o que mais agora? -Charles Bukowski",
          cor:"#F79F81",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Beleza não vale nada e depois não dura. Você nem sabe a sorte que tem de ser feio. Assim quando alguém simpatiza contigo, já sabe que é por outra razão.-Charles Bukowski",
          cor:"#FA8258",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Quando a gente acha que chegou no fundo do poço, sempre descobre que pode ir ainda mais fundo. Que escrotidão. -Charles Bukowski",
          cor:"#FE642E",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Bem, todos morrem um dia, é simples matemática. Nada de novo. A espera é que é um problema. -Charles Bukowski",
          cor:"#FF4000",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "O amor é pros que aguentam a sobrecarga psíquica. -Charles Bukowski",
          cor:"#DF3A01",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Se você está perdendo sua alma e você sabe disso, então você ainda tem uma alma a perder. -Charles Bukowski",
          cor:"#B43104",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "A poesia abre os olhos,cala a boca e estremece a alma... -Charles Bukowski",
          cor:"#8A2908",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Acostumei-me tanto à melancolia que a cumprimento como uma velha amiga. -Charles Bukowski",
          cor:"#61210B",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Eu me permito apreciar isso, a manipular a coisa a meu favor porque eu tenho a febre da faca amolada, dos céus azuis e profundos. -Charles Bukowski",
          cor:"#3B170B",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Nenhuma dor significa o fim da sensibilidade. Cada uma de nossas energias é uma barganha com o diabo.-Charles Bukowski",
          cor:"#2A120A",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
         {
          texto: "Não quero trocar ideias - ou almas. -Charles Bukowski",
          cor:"#190B07",
          imagem: "https://citacoes.in/media/authors/charles-bukowski.jpg",
          autor: "Charles Bukowski",
        },
        
        
      ],
      mostra: false 
    }
  }
}
</script>

