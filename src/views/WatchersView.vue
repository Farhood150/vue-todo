<script setup>
import { ref, watch, watchEffect, useTemplateRef, onMounted } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const image = ref('')
const input = useTemplateRef('question-input')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?') && newQuestion.length > 3) {
        loading.value = true
        answer.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            const response = await res.json()
            answer.value = response.answer
            image.value = response.image
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false
        }
    }
})

watchEffect(() => {
    if(input.value)
        input.value.focus()
})

// onMounted(() => {
//     input.value.focus()
//     console.log(input.value)
// })
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl font-bold">Watchers</h1>
        <p class="text-lg">
            Ask a yes/no question:
        </p>
        <input ref="question-input" v-model="question" :disabled="loading" class="bg-transparent outline outline-gray-400 w-72 disabled:text-red-600 disabled:bg-slate-500"/>
        <p class="text-2xl text-gray-400 text-bold uppercase">{{ answer }}</p>
        <img :src="image" alt="Yes or no image" v-if="image && !loading" class="w-72 object-cover"/>
    </div>
</template>