<template>
  <div>
    <h2>{{title}}</h2>
    <button v-on:click="updateCount">Click me</button>
    <p>Times clicked: {{getCount}}</p>
  </div>
</template>

<script>
export default {
  name: "click-counter",
  props: {
    title: {
      type: String,
      required: true
    }
  },
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