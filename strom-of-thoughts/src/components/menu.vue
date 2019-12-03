<template>
	<div v-if="menu">
	   	<v-toolbar class="grey darken-3" dark  temporary>
	  		<v-toolbar-side-icon 
	  			@click="mostra = true"
	  			color="white--text"
	  		></v-toolbar-side-icon>
	      <v-list-tile-title class="ml-3">
	  				STORM OF THOUGHTS
	  				</v-list-tile-title>
	  				<v-spacer></v-spacer>
	  				<v-btn flat color="red" v-if="saida" @click="sair">Sair</v-btn>
	  	
	  	
	    </v-toolbar>
        <v-navigation-drawer 
        class="grey darken-3"
        dark
        absolute
          v-model="mostra"
          temporary
        >
          <v-toolbar 
            class="grey darken-4"
          >
            <v-list>
              <v-list-tile-title class="ml-3">
            MAIS AUTORES
              </v-list-tile-title>
            </v-list>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list dense class="pt-0">
            <v-list-tile to="/JohnGreen">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>John Green</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/ClariceLispector">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Clarice Lispector</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/CharlesBukowski">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Charles Bukowski</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/MachadodeAssis">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Machado de Assis</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile to="/ImmanuelKant">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Immanuel Kant</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile to="/FernandoPessoa">
              <v-list-tile-action>
                  <v-icon>flash_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Fernando Pessoa</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile to="/StrangerThings">
              <v-list-tile-action>
                  <v-icon>movie_filter</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Stranger Things</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/ElizabethKubler">
              <v-list-tile-action>
                  <v-icon>movie_filter</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Elizabeth Kubler</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list-tile>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
	export default{
		data() {
			return{
				menu:false,mostra: false, saida:false
			}
		},
		mounted(){
			let usuario = JSON.parse(localStorage.getItem("userOk"))
			console.log("oi")
			if(usuario != null){
				this.menu = true
				this.saida = true
			}else{
				this.menu = false
				this.saida = false
			}
		},
		methods:{
			sair(){
				localStorage.setItem("userOk", null)
				this.$router.push('login') 
        		location.reload()
			}
		}
	}
</script>