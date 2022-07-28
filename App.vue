<template>
  <div id="app">
    <hello-world/>
    <button v-on:click="updateCount">Click me</button>
    <p>Times clicked: {{getCount}}</p>
  </div>
</template>

<script>
import HelloWorld from "./src/components/HelloWorld.vue";
export default {
  name: "App",
  components: {HelloWorld},
  data() {
    return {
      count: 0
    }
  },
  methods: {
    updateCount() {
      this.count++;
    }
  },
  computed: {
    getCount() {
      return this.count;
    }
  }
}
</script>

<style scoped>

</style>