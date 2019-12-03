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
          texto: "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro. -Clarice Lispector",
          cor:"#F5A9BC",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
         {
          texto: "Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar. -Clarice Lispector ",
          cor:"#F7819F",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
         {
          texto: "Liberdade é pouco. O que eu desejo ainda não tem nome. -Clarice Lispector",
          cor:"#FA5882",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Faz de conta que ela não estava chorando por dentro, pois agora, mansamente, embora de olhos secos, o coração estava molhado; ela saíra agora da voracidade de viver. -Clarice Lispector",
          cor:"#FE2E64",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Ouve-me, ouve o meu silêncio. O que falo nunca é o que falo e sim outra coisa. Capta essa outra coisa de que na verdade falo porque eu mesma não posso. -Clarice Lispector",
          cor:"#FF0040",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#DF013A",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#B40431",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
         {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#8A0829",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#610B21",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#3B0B17",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#2A0A12",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
        },
        {
          texto: "Às vezes me dá enjôo de gente. Depois passa e fico de novo toda curiosa e atenta. E é só. -Clarice Lispector",
          cor:"#19070B",
          imagem: "http://s2.glbimg.com/Z7Cc54KP46lhOXHVPFI0FEKMdKw=/e.glbimg.com/og/ed/f/original/2016/07/29/ritaelmor.jpg",
          autor: "Clarice Lispector",
         }, 
         ],
      mostra: false
    }
  }
}
</script>
        
     

