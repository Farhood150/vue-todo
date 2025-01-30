<script setup>
import { ref } from 'vue'
const name = ref('Vue.js')

function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` is the native DOM event
    if (event) {
        alert(event.target.tagName)
    }
}

function say(message) {
    alert(message)
}

function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl font-bold">Events</h1>
        <button @click="greet">Greet</button>
        <hr>
        <button @click="say('hello')">Say hello</button>
        <button @click="say('bye')">Say bye</button>
        <hr>
        <!-- using $event special variable -->
        <button @click="warn('Form cannot be submitted yet.', $event)">
            Inline Event with $event
        </button>

        <!-- using inline arrow function -->
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">
            Inline Event with Arrow Function
        </button>

    </div>
</template>