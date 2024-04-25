<template>

  <nav class="nav-menu">
    
    
      <v-toolbar color="#41B883" class="toolbar" app>
       <v-app-bar-nav-icon @click='toggleDrawer' class="toggledrawer"></v-app-bar-nav-icon>
      <v-toolbar-title >
        <h1 class="noble-title">Final Laboratory</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover>
      
      <template v-slot:activator="{ props }">
        
        
        <v-avatar  color="black">
      <span class="white--text text-h5">PJ</span>
    </v-avatar>
    <v-avatar>
      
    </v-avatar>
    
    <button  class="signout" @click="handleSignOut" v-if="isLoggedIn"  icon="fa-solid fa-right-to-bracket">Sign Out</button>
     

        
        
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

     
      
      
      </v-toolbar>
      
     <v-navigation-drawer color="#34495E" v-model="drawer">
      
     <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
      
      <center>
		<div center class="logo">
			<img :src="logoURL" alt="Vue" /> 
      
		</div>
  </center>
       <v-list-item color="white"
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon" class="items">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
        
      </aside>
     </v-navigation-drawer>
      
  </nav>
 
</template>

<script setup>
  
  import { ref } from 'vue'
  import logoURL from '../assets/logo.png'
  import { onMounted } from "vue";
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from '../router';

  const isLoggedIn = ref(false);

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      }else{
        isLoggedIn.value = false;
      }

    });
  });
  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };
    
  const drawer = ref(false)
  
  const items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/Dashboard' },
           { title: 'Basic Math', icon: 'mdi-calculator', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-code-string', path: '/stringApp'},
           
           { title: 'Quiz App', icon:'mdi-comment-question-outline', path: '/axiosQuiz'},
           
           { title: 'About Vuetify', icon: 'mdi-receipt', path: '/aboutVuetify'},
          { title: 'About Me', icon: 'mdi-account', path: '/aboutMe'},
          { title: 'About Apps', icon: 'mdi-apps', path: '/aboutProject'},
         
          
          
          
          
          
         
        ])
        

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>

<style>
aside {
  display: flex;
	flex-direction: column;
	background-color: var(--dark);
	
  
	transition: 0.2s ease-in-out;

    
}
.signout {
  padding-right: 2.5rem;
}

.nav-menu {
  margin: 0 -1rem;
}

.toolbar {
  padding-left: 1rem;
}
.noble-title {
  color: white;
  padding-top: 5px;
  
}
.toggle-drawer {
  color: white;
}






</style>