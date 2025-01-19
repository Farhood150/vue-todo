<script setup>
import { useTodoStore } from '@/stores/todo'
const store = useTodoStore()
</script>

<template>
    <h1 class="text-4xl">This is an about page</h1>
    <h2 class="text-2xl mt-5">Here's a list of completed todos:</h2>
    <ul v-if="store">
        <li v-for="todo in store.todos" :key="todo.id">
            <span v-if="todo.completed">
                {{ todo.text }}
            </span>
        </li>
    </ul>
</template>
