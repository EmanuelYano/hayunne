<template>
  <div class="fill-height">
   
    <section>
      <v-parallax
        dark
        height="600"
        src="https://cdna.artstation.com/p/assets/images/images/003/889/426/large/alex-ghostis-5shadeart2.jpg?1478259165"
        
        
      >
      <h1 class="red--text text--lighten-2 text-xs-center display-4 font-weight-black mt-5">STORM OF THOUGHTS</h1>
       <v-layout
          align-center
          column
          justify-center
          fill-height
        >
          <form>
           <v-layout align-center>
              <v-btn @click="submit" to="/login">Entrar</v-btn>
              </v-layout>
          </form>
      
          </v-layout>
      </v-parallax>
   
    
  
  
    </section>
    <section>
      <v-layout>
          <v-flex align-center="my-3">
            <div class="text-xs-center">

            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Design</div>
                    </v-card-title>
                    <v-card-text>
                     Optamos por um layout dinâmico, moderno e fácil para que todos os usuarios possam compreender e utilizar sem dificuldade nosso recurso.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Storm Of Thoughts</div>
                    </v-card-title>
                    <v-card-text>
                      O nome Storm Of Thoughts em português "Tempestade de pensamentos", surgiu em conjuto com a ideia geral do site como uma forma de conectar a Literatura-Filmes, Séries, Músicas e Frases- em um unico ambiente utilizando da tecnologia tendo em vista que após analises compreendemos um grande interesse dos usuários por estes assuntos por meio desta plataforma.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Recursos</div>
                    </v-card-title>
                    <v-card-text>
                     A arquitetura do site foi criada com base em Frameworks encontrados na plataforma Vue e Vuetify sendo programado no software Visual Code Studio e contou com o auxilio de profissionais da área de programação, já que foi criado por iniciantes.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      </v-layout>
      </section>

      <section>
        <v-parallax src="http://www.mariacenoura.pt/ptpictures/f/135/1359069_firewatch-wallpaper-1920x1080.png" height="600">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Um Website baseado no seu pensamento!</div>
            <em>Clique aqui e participe agora</em>
            <v-btn  dark @click="submit" to="/Cadastro">Cadastre-se 
          
            
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Sobre</div>
                </v-card-title>
                <v-card-text>
                  Uma produção de alunas do 3ºTIB do Curso Técnico em informática integrado ao ensino médio da escola Estadual Waldemir Barros da Silva como trabalho de conclusão de curso proposto por professores da área.  
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contato</div>
                </v-card-title>
               
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>3314-9014 - Escola</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Rua Palmacia S/N</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>profjeanbites@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-layout align-center>
              
              </v-layout>
          </v-layout>
        </v-container>
      </section>
  </div>

  
</template>
