<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
const store = useTodoStore()
// const canChangeColor = ref(false)
// const someClass = ref('text-gray-400')

// const toggleTextColor = () => {
// if(someClass.value === 'text-red-400') {
// 	someClass.value = 'text-gray-400'
// } else {
// 	someClass.value = 'text-red-400'
// }

// 	someClass.value === 'text-red-400' ?
// 	someClass.value = 'text-gray-400'
// 	:
// 	someClass.value = 'text-red-400'

// 	console.log(someClass.value)
// }
</script>

<template>
	<section class="flex flex-col items-center gap-5">
		<h1 class="text-2xl font-bold">Todos</h1>
		
		<p v-if="store.todos.length === 0" class="text-gray-400 text-bold text-2xl">No tasks to show!</p>

		<!-- <p v-if="store.todos.length === 0" class="text-bold text-2xl" v-bind:class="canChangeColor ? someClass : 'text-gray-400'">No tasks to show!</p>
		
		<button class="bg-gray-500 p-5" @click="toggleTextColor">Make text red</button>
		
		<div class="flex items-center gap-5">
			<label for="changeColor">Can change color</label>
			<input type="checkbox" name="changeColor" id="changeColor" v-model="canChangeColor"/>
		</div>
		
		<span>{{ canChangeColor }}</span> -->

		<ul class="flex flex-col gap-5">
			<TaskItem v-for="todo in store.todos" :key="todo.id" :todo="todo" @delete="(id) => store.deleteTodo(id)" />
		</ul>
		<NewTask />
	</section>
</template>
