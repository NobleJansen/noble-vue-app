<script setup>

</script>

<template>
<v-card>
  <main>
   
    <br>
    
    <center> <v-img class="icon" src="https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif"></v-img></center> 
     <h1 class="vuetitle">Research About Vuetify</h1>
     <header class='masthead'>
 
  <h1 class='masthead-heading'>VUETIFY</h1>
</header>
<section class="introduction-section">
    <h1>Introduction</h1>
    <p>
Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.</p>
    <p>Vuetify is a complete UI framework built on top of Vue. js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.</p>
</section>
<section class="introduction-section">
    <h1>Why Vuetify?</h1>
    <p>

Vuetify is the most popular component library for Vue.js, enabling you to create great-looking, accessible apps even if UI design isn't your area.

While the library has over 80 elements ready to use straight out the box, it also allows you to create custom elements, giving your apps a clean yet bespoke feel.

This article takes you through Scrimba's free two-hour Vuetify course by Gwen Faraday. The course teaches you all the core skills needed to get started with Vuetify, including:</p>
</section>


  </main>
  </v-card>
</template>

<style>
body {
    /* Typography Declarations */
    color: #222222;
    font-size: 1em;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

.content-footer,
.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  
  background-size: cover;
  background-repeat: no-repeat;
  border-top: solid 1em #FFCF33;
}

.masthead-intro {
    /* Layout Declarations */
    margin-bottom: 0.1em;
    /* Typography Declarations */
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 2em;
}

.masthead-heading {
    /* Layout Declarations */
    color: #41B883;
    margin-top: -0.2em;
    /* Typography Declarations */
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 6em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}

.introduction-section,
.location-section,
.questions-section {
    max-width: 38em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
}

.introduction-section > p,
.location-section > p,
.questions-section,
.content-footer > p {
    /* Typography Declarations */
    font-weight: 300;
    letter-spacing: 0.05em;
}

.questions-section > h2 {
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 1.2em;
    font-weight: bold;
    /* Layout */
    margin: 2em 0 1em 0;
}

section > h1 {
    margin-top: 2em;
}

.vuetitle {
    text-align: center;
}

.content-footer,
.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  
  background-size: cover;
  background-repeat: no-repeat;
  border-top: solid 1em #34495E;
}

.masthead-intro {
  margin-bottom: 0.1em;
  font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 2em;
}

.masthead-heading {
  margin-top: -0.2em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 6em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.introduction > p,
.location > p,
.content-footer > p {
    /* Typography Declarations */
    font-weight: 300;
    letter-spacing: 0.05em;
}
h2 {
    /* Typography Declarations */
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 1.2em;
    font-weight: bold;
}

.introduction-section,
.location-section,
.questions-section {
    max-width: 38em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
}
.content-footer {
  margin: 50px 0;
  padding: 20px 0;
  text-align: center;
  background-color: #73A8C2;
  text-decoration: none;
}
.social > li {
  display: inline-block;
  margin: 0 5px;
}
.content-footer > p {
  color: #F7EDE1;
}
a {
    font-weight: bold;
    text-decoration: none;
    color: #F1C863;
}
  
@media only screen and (max-width: 500px) {
    .masthead {
        padding: 3em 0;
    }
    .masthead-heading {
        font-size: 3em;
    }
    .content-footer {
        padding: 2em 2.5em;
  }
}

</style>