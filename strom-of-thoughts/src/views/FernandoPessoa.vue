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
          texto: "Tenho em mim todos os sonhos do mundo. -Fernando Pessoa",
          cor:"#A9A9F5",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo? -Fernando Pessoa",
          cor:"#8181F7",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Possuir é perder. Sentir sem possuir é guardar, porque é extrair de uma coisa a sua essência. -Fernando Pessoa",
          cor:"#5858FA",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Todos temos por onde sermos desprezíveis. Cada um de nós traz consigo um crime feito ou o crime que a alma lhe pede para fazer. -Fernando Pessoa",
          cor:"#2E2EFE",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "É preciso ser um realista para descobrir a realidade. É preciso ser um romântico para criá-la. -Fernando Pessoa",
          cor:"#0000FF",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "A ciência descreve as coisas como são; a arte, como são sentidas, como se sente que são. -Fernando Pessoa",
          cor:"#0101DF",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Quero para mim o espírito desta frase, transformada a forma para a casar com o que eu sou: Viver não é necessário; o que é necessário é criar. -Fernando Pessoa",
          cor:"#0404B4",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "O próprio viver é morrer, porque não temos um dia a mais na nossa vida que não tenhamos, nisso, um dia a menos nela. -Fernando Pessoa",
          cor:"#08088A",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "O poeta é um fingidor. Finge tão completamente Que chega a fingir que é dor A dor que deveras sente. -Fernando Pessoa",
          cor:"#0B0B61",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Não existem amores perfeitos, mas amantes acomodados. -Fernando Pessoa",
          cor:"#0B0B3B",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Amar é cansar-se de estar só... -Fernando Pessoa",
          cor:"#0A0A2A",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         {
          texto: "Eu que me aguente comigo e com os comigos de mim. -Fernando Pessoa",
          cor:"#070719",
          imagem: "https://www.escritas.org/autores/fernando-pessoa.jpg",
          autor: "Fernando Pessoa",
        }, 
         ],
      mostra: false 
    }
  }
}
</script>
        