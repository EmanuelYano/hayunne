import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Frases from './views/Frases.vue'
import Home from './views/Home.vue'
import Cadastro from './views/Cadastro.vue'
import John from './views/JohnGreen.vue'
import Clarice from './views/ClariceLispector.vue'
import Charles from './views/CharlesBukowski.vue'
import Machado from './views/MachadodeAssis.vue'
import Immanuel from './views/ImmanuelKant.vue'
import Fernando from './views/FernandoPessoa.vue'
import StrangerThings from './views/StrangerThings.vue'
import ElizabethKubler from './views/ElizabethKubler.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    { path: '/frases',
      name: 'Frases',
      component: Frases
    },
    { path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/Cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    { path: '/JohnGreen',
    name: 'JohnGreen',
    component: John
   },
   { path: '/ClariceLispector',
    name: 'ClariceLispector',
    component: Clarice
   },
   { path: '/CharlesBukowski',
    name: 'CharlesBukowski',
    component: Charles
   },
   { path: '/MachadodeAssis',
    name: 'MachadodeAssis',
    component: Machado
   },
   { path: '/ImmanuelKant',
    name: 'ImmanuelKant',
    component: Immanuel
   },
   { path: '/FernandoPessoa',
    name: 'FernandoPessoa',
    component: Fernando
   },
   { path: '/StrangerThings',
    name: 'StrangerThings',
    component:StrangerThings
   },
   { path: '/ElizabethKubler',
    name: 'ElizabethKubler',
    component:ElizabethKubler
   },
   
  ]
})
