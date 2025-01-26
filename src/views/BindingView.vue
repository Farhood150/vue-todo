<script setup>
import { ref, computed } from 'vue'
const isActive = ref(true)
const hasError = ref(true)
const fontSize = ref('')

const awesome = ref(false)

const activeColor = ref('green')

const inputCondition = computed(() => {
    return fontSize.value.length < 8 ? 'border-red-500' : 'border-green-400'
})
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl font-bold">Class and Style Bindings</h1>
        <div class="inline" :class="{ 'font-bold': isActive, 'text-red-500': hasError }">Dynamic Class</div>

        <input type="number" class="bg-transparent border focus:outline-none" :class="inputCondition"
            v-model="fontSize">

        <button @click="isActive = !isActive">Make Active</button>

        <NewTask :class="{ 'border border-green-400 p-5': isActive }" />

        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'rem' }">Inline Style</div>


        <button @click="awesome = !awesome">Toggle</button>

        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>

        <template v-if="awesome">
            <h1 class="text-2xl font-bold">Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
    </div>
</template>