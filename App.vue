<template>
  <div id="app">
    <hello-world/>
    <click-counter />
    <product-list title="Testing" />
  </div>
</template>

<script>
import HelloWorld from "./src/components/HelloWorld.vue";
import ClickCounter from "./src/components/ClickCounter.vue";
import ProductList from "./src/components/ProductList.vue";
export default {
  name: "App",
  components: {ProductList, ClickCounter, HelloWorld},
}
</script>

<style scoped>

</style>