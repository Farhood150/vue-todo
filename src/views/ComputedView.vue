<script setup>
import { ref, reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(() => {
    if(author.books.length > 0) {
        return 'Yes'
    } else {
        return 'No' 
    }
    //   return author.books.length > 0 ? 'Yes' : 'No'
})

// cart
const cart = ref([])
const showCart = ref(false)


const cartCount = computed(() => {
    if(cart.value.length === 0) {
        return 'empty'
    }
    return cart.value.length
})

cartCount.value + 1

const toggleCart = () => {
    showCart.value = !showCart.value
}

const addToCart = (item) => {
    cart.value.push(item)
}

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    if(newValue.includes(' ')) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
  }
})
</script>

<template>
        <div class="flex flex-col items-center gap-5">
            <h1 class="text-3xl font-bold">Computed</h1>
            <p>
                {{ author.name }}
            </p>
            <p>
                Has published books:
                <span>{{ publishedBooksMessage }}</span>
            </p>

            <h2 @click="toggleCart">Cart {{ cartCount }}</h2>
            <pre v-if="showCart">
                {{ cart }}
            </pre>

            <button class="border px-3 py-2" @click="addToCart({name: 'item1'})">Item 1</button>
            <button class="border px-3 py-2" @click="addToCart({name: 'item2'})">Item 2</button>
            <button class="border px-3 py-2" @click="addToCart({name: 'item3'})">Item 3</button>

            <input type="text" name="First Name" v-model="firstName" class="bg-transparent">
            <input type="text" name="Last Name" v-model="lastName" class="bg-transparent">
            <input type="text" name="Full Name" v-model="fullName" class="bg-transparent">

            <h3>{{ fullName }}</h3>

</div>
</template>