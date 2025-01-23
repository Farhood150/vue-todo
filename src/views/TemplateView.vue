<script>
// Options API
// export default {
//     data() {
//         return {
//             canChangeColor: false,
//             someClass: 'text-gray-400'
//         }
//     },
//     methods: {
//         toggleTextColor() {
//             if (this.someClass === 'text-red-400') {
//                 this.someClass = 'text-gray-400'
//             } else {
//                 this.someClass = 'text-red-400'
//             }
//         }
//     },
// }

// Composition API
import { ref } from 'vue'
export default {
    setup() {
        const canChangeColor = ref(false)
        const someClass = ref('text-gray-400')

        const toggleTextColor = () => {
            if (someClass.value === 'text-red-400') {
                someClass.value = 'text-gray-400'
            } else {
                someClass.value = 'text-red-400'
            }
            // Sample for ternary operator
            // someClass.value === 'text-red-400' ?
            //     someClass.value = 'text-gray-400'
            //     :
            //     someClass.value = 'text-red-400'

        }
        return {
            canChangeColor,
            someClass,
            toggleTextColor
        }
    }

}
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl font-bold">Template</h1>
        <p class="text-bold text-2xl" v-bind:class="canChangeColor ? someClass : 'text-gray-400'">A sample Text</p>

        <button class="bg-blue-500 px-3 py-2 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-lg"
            :disabled="!canChangeColor" @click="toggleTextColor">Toggle Text Color</button>

        <div class="flex items-center gap-5">
            <label for="changeColor">Can change color?</label>
            <input type="checkbox" name="changeColor" id="changeColor" v-model="canChangeColor" />
        </div>

        <span>{{ canChangeColor }}</span>
    </div>
</template>