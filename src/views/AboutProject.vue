<template>
    <div class="team">
        <v-container>
            <h1 class="abouttitle">Compilation </h1>
        <header class='masthead'>
            <p class='masthead-intro'>About</p>
  <h1 class='masthead-heading'>Apps</h1></header>
  <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        sm="5"
        md="6"
      >
      <v-card
    class="mx-auto"
    max-width="760"
  >
    <v-img
      src="https://www.svgrepo.com/show/69764/basic-mathematical-symbols.svg"
      height="200px"
      
    ></v-img>

    <v-card-title>
      Basic Math
    </v-card-title>

    <v-card-subtitle>
     Simple Calculator
    </v-card-subtitle>

    <v-card-actions>
        <v-btn color="orange lighten-2" router-link to="/basicMath"   >
  <v-icon>window</v-icon> Explore
</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col
        sm="5"
        offset-sm="2"
        md="6"
        offset-md="0"
      >
      <v-card
    class="mx-auto"
    max-width="760"
  >
    <v-img
      src="data:image/png;base64,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"
      height="200px"
    ></v-img>

    <v-card-title>
      String App
    </v-card-title>

    <v-card-subtitle>
      String Manipulation
    </v-card-subtitle>

    <v-card-actions>
        <v-btn color="orange lighten-2" router-link to="/StringApp"   >
  <v-icon>window</v-icon> Explore
</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This is an app where you need to input some words, names or letters and it will coun all the vowels, constant, numbers and will convert the vowels to asteriks (*).
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        sm="6"
        md="5"
        lg="6"
      >
      <v-card
    class="mx-auto"
    max-width="760"
  >
    <v-img
      src="https://cdn-icons-png.flaticon.com/512/5694/5694744.png"
      height="200px"
    ></v-img>

    <v-card-title>
     Quiz App
    </v-card-title>

    <v-card-subtitle>
      Basic Quiz
    </v-card-subtitle>

    <v-card-actions>
        <v-btn color="orange lighten-2" router-link to="/axiosQuiz"   >
  <v-icon>window</v-icon> Explore
</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            As the name suggests, the quiz application is an application that allows one in organizing the online quiz. This application will be useful in organizing the quiz events in the colleges or the schools. The online quiz application will help in managing the quiz event in a smooth way.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col
        sm="6"
        md="5"
        offset-md="2"
        lg="6"
        offset-lg="0"
      >
      <v-card
    class="mx-auto"
    max-width="760"
  >
    <v-img
      src="https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png"
      height="200px"
    ></v-img>

    <v-card-title>
      About Veutify
    </v-card-title>

    <v-card-subtitle>
      Researh about veutify
    </v-card-subtitle>

    <v-card-actions>
        <v-btn color="orange lighten-2" router-link to="/aboutVuetify"   >
  <v-icon>window</v-icon> Explore
</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            What is Vuetify? Vuetify is a complete UI framework built on top of Vue. js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
  
    </v-container>
</div>

</template>

<script>
    export default {
      data: () => ({
        show: false,
      }),
    }
    
  </script>

<style>
    
.masthead-intro {
    /* Layout Declarations */
    margin-bottom: 0.1em;
    /* Typography Declarations */
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 2em;
}

.masthead-heading {
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
.btn1 {
    padding-left: -10px;
}
</style>