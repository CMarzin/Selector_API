<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="whenIClick">count</button>
    {{ testYOlo() }}
  </div>
</template>

<script>
import { fetchExample } from '@/actions/example'
import exampleSelector from '@/selector/example'
import store from '@/store'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeMount () {
    fetchExample()
  },
  methods: {
    testYOlo () {
      return exampleSelector(store.state.description)
    },
    whenIClick () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
