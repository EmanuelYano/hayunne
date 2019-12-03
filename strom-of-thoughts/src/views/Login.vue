<template>
  <v-layout justify-center align-center fill-height class="login">
    <v-flex xs12 sm6 md4 lg4 >
     <v-alert 
        v-model="alert"               
        dismissible
        :type="cor"
     >
     {{mensagem}}
     </v-alert>
     
      <v-card color="#F79F81" class="elevation-12 pa-5">        
          <v-text-field
              v-model="usuario.email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="usuario.senha"
              type="password"
              label="Senha"
              required
            ></v-text-field>
            <v-btn block @click="realizarLogin()">Entrar</v-btn>
      </v-card>
      </v-flex>
  </v-layout>

</template>
<script>
import LoginService from '../service/LoginService.js'
    export default{
        data(){
            return{
                alert:false,
                cor: "error",
                email: "",
                mensagem: "",
                usuario: {}, menu:false
            }
        },
        methods:{
             async realizarLogin(){
                let usuario = await LoginService.logar(this.usuario);
                if(usuario){
                    this.mensagem = "Login autorizado";
                    this.cor = "success";
                    this.alert = true;
                    localStorage.setItem("userOk",JSON.stringify(usuario));
                    this.$router.push('JohnGreen');
                    location.reload()
                }else{
                    this.mensagem = "Não esta autorizado";
                    this.cor = "error";
                    this.alert = true;
                    localStorage.setItem("userOk", null);
                }
            }
        }
    }
            
        
   
    

</script>

<style> 
  .login {
    height: 100%;
    background-image: url("https://c4.wallpaperflare.com/wallpaper/8/169/216/firewatch-digital-art-birds-forest-wallpaper-7960c8edb12add9b76a7786fa001a6dd.jpg");
  }
</style>
