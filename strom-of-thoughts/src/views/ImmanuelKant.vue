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
          texto: "A amizade é semelhante a um bom café; uma vez frio, não se aquece sem perder bastante do primeiro sabor. -Immanuel Kant",
          cor:"#F6CECE",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Toda reforma interior e toda mudança para melhor dependem exclusivamente da aplicação do nosso próprio esforço.-Immanuel Kant",
          cor:"#F5A9A9",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Podemos julgar o coração de um homem pela forma como ele trata os animais. -Immanuel Kant",
          cor:"#FA5858",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "A sabedoria das mulheres não é raciocinar, é sentir. -Immanuel Kant",
          cor:"#FE2E2E",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "A moral, propriamente dita, não é a doutrina que nos ensina como sermos felizes, mas como devemos tornar-nos dignos da felicidade. -Immanuel Kant",
          cor:"#FF0000",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "É no problema da educação que assenta o grande segredo do aperfeiçoamento da humanidade. -Immanuel Kant",
          cor:"#DF0101",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Não há garantias. Do ponto de vista do medo, ninguém é forte o suficiente. Do ponto de vista do amor, ninguém é necessário. -Immanuel Kant",
          cor:"#B40404",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "A paciência é a fortaleza do débil e a impaciência a debilidade do forte. -Immanuel Kant",
          cor:"#8A0808",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Quem não sabe o que busca, não identifica o que acha. -Immanuel Kant",
          cor:"#610B0B",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Se vale a pena viver e se a morte faz parte da vida, então, morrer também vale a pena -Immanuel Kant",
          cor:"#3B0B0B",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Você é livre no momento em que não busca fora de si mesmo alguém para resolver os seus problemas. -Immanuel Kant",
          cor:"#2A0A0A",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
         {
          texto: "Não somos ricos pelo que temos, e sim pelo que não precisamos ter. -Immanuel Kant",
          cor:"#190707",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GmBd24r5vJf5LvFTQCEUEhVZ-NTlNzfuf_QIxRN_faqkbPWi",
          autor: "Immanuel Kant",
        }, 
       
        
        
      ],
      mostra: false
    }
  }
}
</script>