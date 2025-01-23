<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

const state = reactive({ count: 0 })
const count = ref(0)
function increment() {
    count.value++
}

const obj = ref(
    {
        nested: { count: 0 },
        arr: ['foo', 'bar']
    }
)

function mutateDeeply() {
    obj.value.nested.count++
    obj.value.arr.push('baz')
}

const firstRef = ref(0)
const mainState = reactive({ firstRef })
console.log('mainState.firstRef: ', mainState.firstRef) // 0
mainState.firstRef = 10
console.log('mainState.firstRef: ', mainState.firstRef) // 10

const secondRef = ref(2)
mainState.firstRef = secondRef
console.log('mainState.firstRef: ', mainState.firstRef) // 2
console.log('firstRef.value: ', firstRef.value) // 10
secondRef.value = 11
mainState.firstRef = 100

console.log('secondRef: ', secondRef.value) // 100
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl font-bold">Reactivity</h1>
        <button class="text-bold text-2xl p-5" @click="increment">Increment</button>
        <button class="text-bold text-2xl p-5" @click="count--">Decrement</button>
        <p>{{ count }}</p>
        <hr>
        <button class="text-bold text-2xl p-5" @click="mutateDeeply">Mutate Deeply</button>
        <p>{{ obj.nested.count }}</p>
        <pre>{{ obj.arr }}</pre>
        <hr>
        <h2>Reactive() API</h2>
        <button class="text-bold text-2xl p-5" @click="state.count++">Increment</button>
        <p>{{ state.count }}</p>
    </div>
</template>