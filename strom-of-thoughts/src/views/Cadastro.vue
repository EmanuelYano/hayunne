<template>

<v-layout justify-center align-center fill-height class="cadastro">
      <v-flex xs12 sm6 md4 lg4 >
      <v-card color="#F79F81" class="elevation-12 pa-5">
 
 
  
        <form>    
              <v-text-field
                v-model="usuario.nome"
                label="Nome Completo"
                required
                ></v-text-field>

                <!-- <v-text-field
                v-model="nome"
                label="Nome de usuário"
                
                ></v-text-field> -->

                <!--  <v-text-field
                v-model="email"
                label="Idade"
                 ></v-text-field> -->
               

              <v-text-field
                v-model="usuario.email"
                label="E-mail"
              
              ></v-text-field>

              <v-text-field
                v-model="usuario.senha"
                label="Senha"
            
              ></v-text-field>

              <!-- <v-text-field
                v-model="email"
                label="Confirmar Senha"
              ></v-text-field> -->

                
              <v-btn block @click="submit">Entrar</v-btn>
             
          </form>
            </v-card>
        </v-flex>
        
    </v-layout>
</template>

 <script>
 import LoginService from '../service/LoginService.js' 
    export default{
      data(){
        return{
          usuario: {}, nome:"", email:"", menu:false
        }
      },
      methods:{
        async submit(){
          let resp = await LoginService.cadastro(this.usuario)
          if(resp){
            alert("Cadastro efetuado com sucesso! Aguarde pelo redirecionamento!")
            this.$router.push('login')
          }else{
            alert("Seu cadastro não foi processado! Por favor tente novamente.")
          }
        }
      }
    }
  </script>
      <style> 
      .cadastro {
        height: 100%;
        background: 100%;
        background-image: url("https://www.wallpapermaiden.com/wallpaper/9881/download/1366x768/firewatch-forest-artwork.jpg");
      }
      

      </style>