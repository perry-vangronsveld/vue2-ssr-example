<template>
  <div id="app">
    <hello-world/>
    <click-counter />
  </div>
</template>

<script>
import HelloWorld from "./src/components/HelloWorld.vue";
import ClickCounter from "./src/components/ClickCounter.vue";
export default {
  name: "App",
  components: {ClickCounter, HelloWorld},
}
</script>

<style scoped>

</style>