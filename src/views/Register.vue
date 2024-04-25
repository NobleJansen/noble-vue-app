
<template>
    <v-card
   :loading="loading"
   class="mx-auto my-12"
   max-width="750"
   max-height="750"
   elevation="9"
 >
 <v-card-title class="caltitle">Register</v-card-title>
 
 <v-container fluid>
 <center> <v-img class="icon" src="https://cdn.dribbble.com/users/2446970/screenshots/5883361/media/c6adf54fc02fea4ac9e2e003bbf5370d.gif"></v-img></center> 
   
   <div id="quiz-container">
      
           

   <center><h1>Create an Account</h1></center>
   <p class="mx-auto my-1"></p>
   <v-text-field
                            
                             name="login"
                             v-model="email"
                             label="Enter your email"
                             type="text"
                          ></v-text-field>
                          <v-text-field
                             
                             name="Password"
                             v-model="password"
                             label="Enter your Password"
                             type="password"
                          ></v-text-field>
<p class="mx-auto my-1">
   <v-btn block  color="#34495E"
 elevation="1"
 small
 x-large
 x-small
 @click="register"><div class="resultbtn">Register</div></v-btn>
</p>
<v-divider></v-divider>
 <p>
 <v-btn block  color="#EA4335"
 elevation="1"
 small
 x-large
 x-small
 @click="signInWithGoogle"><div class="resultbtn">Google Sign-In</div></v-btn>
</p>
<v-divider></v-divider>

<center>
<p class="mx-auto my-12" color="#34495E">If you have already an account sign in here.</p>
</center>
<p class="mx-auto my-1">
 <v-btn class="signinbtn" block  color="#41B883"
 elevation="1"
 small
 x-large
 x-small
 router-link to="/"><div class="resultbtn" >Sign-In</div></v-btn>
</p>

   
   </div>
   
</v-container>
   </v-card>

</template>

<script setup>

import { ref, onMounted} from "vue";
import {getAuth, 
       createUserWithEmailAndPassword,
       GoogleAuthProvider,
       signInWithPopup, } from "firebase/auth";
import { useRouter } from 'vue-router'




const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
   .then((data) => {
       console.log("Succesfully registered");
       router.push('/dashboard')
   })
   .catch((error) => {
       console.log(error.code);
       alert(error.message);
   });
};

const signInWithGoogle = () => {
   const provider = new GoogleAuthProvider();
   signInWithPopup(getAuth(), provider)
   .then((result) => {
       console.log(result.user);
       router.push("/dashboard");
   })
   .catch((error) => {

   });

};
</script>



<style>
.h1{
   align-content: center;
}
.icon {
   width: 17rem;
}


</style>