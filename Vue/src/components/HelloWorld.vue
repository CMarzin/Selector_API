<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="whenIClick">count</button>
  </div>
</template>

<script>
// import store from '@/store'
// import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeMount () {
    const options = {
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'GET',
      data: {}
    }

    axios(options)
    .then((response) => {
      console.log('data', response)
      return this.$store.dispatch('callApi', response)
    })

    // this.$store.dispatch('increment')
  },
  methods: {
    whenIClick () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
