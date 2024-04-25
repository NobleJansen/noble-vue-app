<template>

  <v-card
     :loading="loading"
     class="mx-auto my-12"
     max-width="500"
     max-height="500"
     elevation="9"
     
   >
   <v-card-title class="stringtitle"> STRING MANIPULATOR</v-card-title>
   <v-container fluid >
    <v-text-field label="Enter a String" v-model="stringInput"></v-text-field>
 
    
 
    <v-btn class="v-btn" block color="#34495E"
      elevation="9"
      small
      x-large
      x-small
      @click="doCountVowel"><div class="getresbtn">Get Result</div></v-btn>
 
    
      <p></p>
   <br>
   <br>
   <br>
      <p> Count Vowel /s : {{vowelCount}}</p>
    
     <p> Count Constant /s : {{consCount}}</p>
    
     <p> Count Numbers : {{numCount}}</p>
    
     <p> Vowel Conversion to (*) : {{convert}}</p>
    
    </v-container>
  </v-card>  
 
 </template>
 
 <script setup>
 import {ref} from 'vue'
 
 const stringInput = ref('')
 const vowelCount = ref(0)
 const consCount = ref(0)
 const numCount = ref(0)
 const convert = ref(0)
 
 function doCountVowel () {
      vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
      consCount.value = stringInput.value.match(/[bcdfghjklmnpqrstvwxys]/gi).length;
      numCount.value = stringInput.value.match(/[0123456789]/ig).length;
      convert.value = stringInput.value.replace(/[aeiou]/gi, '*')
      return vowelCount.value; 
 }
 
 </script>
 
 <style>

  .getresbtn {
    color: white;
  }
 .stringtitle {
   text-align: center;
  
   
   background-size: cover;
   background-repeat: no-repeat;
   border-top: solid 1em #1d2920;
 
   color: #0c972a;
 }
 
 .v-btn {
      color: aquamarine;
 }
 </style>
 
