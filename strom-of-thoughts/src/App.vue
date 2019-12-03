<template>
  <v-app>
  
        <Menu />
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
    <v-content>
    </v-content>
  </v-app>
</template>
<script>
      import Menu from '@/components/menu'
      export default {
        name: 'App',
        components: {Menu}, 
        data () {
          return {
             frases: [
                
              ],
            mostra: false, menu:false
          }
        },
      }
</script>