
<template>
    <v-row>
   <v-col
     cols="2"
     sm="6"
   >
   <v-card max-width="2000"
       max-height="930"
       elevation="10">
       <div class="intro1">
           <h1> Login to your Account</h1>
   
   <p>Sign In to Continue Access</p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <v-btn color="#34495E"
elevation="1"
small
x-large
x-small router-link to="/register">Learn More</v-btn>
 </div>
   
   </v-card>
 </v-col>   
 <v-col
     cols="2"
     sm="6"
   > 
   
   <v-card
  :loading="loading"
  class="mx-auto my-15"
  max-width="750"
  max-height="1000"
  elevation="9"
>

<v-card-title class="caltitle">Sign-In</v-card-title>
<v-container fluid>
  
  <div id="quiz-container">
   <div style="text-align: center">
    
    <center><v-img class="bgicon" src="https://cdn.dribbble.com/users/2726709/screenshots/6478602/1.gif"/></center>
   
</div>
  <center><h1>Sign In</h1></center>
  <p class="mx-auto my-1"></p>
  
  
  <v-text-field
  
                          
                             name="login"
                             v-model="email"
                             label="Login"
                             type="text"
                             
                          ></v-text-field>
                          <v-text-field
                             
                             name="Password"
                             v-model="password"
                             label="Password"
                             type="password"
                          ></v-text-field>
  <p v-if="errMsg">{{errMsg}}</p>
<p class="mx-auto my-1">
   <v-hover>
  <v-btn block  color="#34495E"
elevation="1"
small
x-large
x-small
@click="register" :loading="loading" ><div class="resultbtn">Sign-In</div></v-btn>
</v-hover>

</p>
<v-divider></v-divider>
<p>
<v-btn block  color="#41B883"
elevation="1"
small
x-large
x-small
router-link to="/register"><div class="resultbtn">Register</div></v-btn>
</p>


  
  </div>
  
</v-container>

  </v-card>

  </v-col>
 
  </v-row>

</template>




<script setup>
import { ref } from "vue";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router'


const loading = false

const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter()
const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
      console.log("Succesfully signed in!");
      
      router.push('/dashboard')
  })

  .catch((error) => { 
      console.log(error.code);
      switch (error.code) {
       case "auth/invalid-email":
           errMsg.value = "Invalid Email";
       break;
       case "auth/user-not-found":
           errMsg.value = "No account with that email was found";
       break;
       case "auth/wrong-password":
           errMsg.value = "Incorrect password";
       break;
       default:
           errMsg.value = "Email or password was incorrect";
       break;
      }
  })
};
const signInWithGoogle = () => {
 

};

</script>



<style>
/* CSS for main section */
.intro1 {
 display: flex;
 flex-direction: column;
 padding-top: 10rem;
 align-items: center;
 width: 100%;
 height: 1000px;
 background: linear-gradient(to bottom, hwb(153 24% 33%) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://wallpapers.com/images/hd/vue-js-programming-nmw3bm4aj9o70p7k-nmw3bm4aj9o70p7k.jpg");
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
}

.intro1 h1 {
 font-family: sans-serif;
 font-size: 45px;
 color: #fff;
 font-weight: bold;
 text-transform: uppercase;
 margin: 0;
}

.intro1 p {
 font-size: 20px;
 color: #d1d1d1;
 text-transform: uppercase;
 margin: 20px 0;
}

.intro1 button {
 background-color: #000000;
 color: rgb(255, 255, 255);
 padding: 10px 25px;
 border: none;
 border-radius: 5px;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4)
}

.bgicon {
  max-width: 10rem;
}


</style>