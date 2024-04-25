<template>

        <h1>Quiz</h1>
        <section class="quiz" v-if="!quizCompleted">
            <div class="quiz-info">
                    <span class="questions">{{getCurrentQuestion.question}}</span>
                    <span class="score">Score: {{score}}/{{questions.length}}</span>
            </div>
            <div class="options">
                <label
                    v-for="(option, index) in getCurrentQuestion.options"
                    :key="index"
                    :class="`option ${
                        getCurrentQuestion.selected == index
                            ? index == getCurrentQuestion.answer
                                ? 'correct'
                                : 'wrong'   
                            : ''
                    } ${
                        getCurrentQuestion.selected  != null &&
                        index != getCurrentQuestion.selected
                            ? 'disabled'
                            : ''
                    }`">
                    <input  
                            type="radio"
                            :name="getCurrentQuestion.index"
                            :value="index"
                            v-model="getCurrentQuestion.selected"
                            :disabled="getCurrentQuestion.selected"
                            @change="SetAnswer">                
                            <span>{{option}}</span>
                </label>
            </div>
            <button 
                @click="NextQuestion"
                :disabled="!getCurrentQuestion.selected">
                {{
                    getCurrentQuestion.index == questions.length - 1
                        ? 'Finish'
                        : getCurrentQuestion.selected == null
                            ? 'Select an option' 
                            : 'Next question'
                }}
            </button>
        </section>
        <section v-else>
                <h2>Done Quiz</h2>
                <p>Your score is {{score}}/{{questions.length}}</p>

        </section>

</template>

<script setup>
import { ref,computed } from 'vue';

const questions = ref([
    {
        question: '2+2=?',
        answer: 2,
        options:    [
                '1',
                '3',
                '4',
                '5',
        ],
        selected: null
    },
    {
        question: '1+1=?',
        answer: 0,
        options:    [
                '2',
                '3',
                '4',
                '5',
        ],
        selected: null
    },
    {
        question: '1+1=?',
        answer: 0,
        options:    [
                '2',
                '3',
                '4',
                '5',
        ],
        selected: null
    },
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed  (() =>   {
    let value = 0
    questions.value.map(q => {
        if (q.selected == q.answer){
            value++
        }
    })    
    return value    
})
const getCurrentQuestion = computed(()=>{
    let question = questions.value[currentQuestion.value]
    question.index   = currentQuestion.value    
    return  question
})

const SetAnswer  = act => {
    questions.value[currentQuestion.value].selected = act.target.value
    act.target.value=null   
}
const NextQuestion = () => {
    if(currentQuestion.value <  questions.value.length - 1){
        currentQuestion.value++
    }
    else{
        quizCompleted = true
    }
}
</script>

<style>

</style>