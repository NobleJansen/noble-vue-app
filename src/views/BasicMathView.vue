<template>
  <div class="body">
  <v-card
  
    :loading="loading"
    class="mx-auto my-12"
    max-width="500"
    max-height="576"
    elevation="9"
  >
  
  <v-card-title class="caltitle">CALCULATOR</v-card-title>
<v-container fluid>
  <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>

   

  <v-btn block  color="#34495E"
  elevation="9"
  small
  x-large
  x-small
  @click="doSum"><div class="resultbtn">Result</div></v-btn>
  <p></p>
  <br>
  <br>
  <br>
<p>
RESULT :
</p>
 <p>
  Sum : {{sum}}
  </p>
  <p>
  Difference : {{diff}}
  </p>
  <p>
  Product : {{product}}
  </p>
  <p>
  Qoutient : {{quotient}}
  </p>
  <p>
  Average : {{average}}
  </p>

</v-container>
</v-card>

</div>
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)
  const diff=ref(0)
  const product=ref(0)
  const quotient=ref(0)
  const average=ref(0)
  

  function doSum(){
    sum.value = fNumber.value + sNumber.value
    diff.value = fNumber.value - sNumber.value
    product.value = fNumber.value * sNumber.value
    quotient.value = fNumber.value / sNumber.value
    average.value = (fNumber.value + sNumber.value)/2
    return sum.value
    
  }
</script>

<style>

  .resultbtn {
    color: white;
  }
.caltitle {
  text-align: center;
  padding: 6em 0;
  
  background-size: cover;
  background-repeat: no-repeat;
  border-top: solid 1em #1d2920;

  /* Layout Declarations */
    color: #0c972a;
    margin-top: -0.2em;
    /* Typography Declarations */
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 6em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}

.body {
  
  
}


</style>


