<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'; 

</script>

<template>

  <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-5">
  <Card msg="Card 1" />
  <Card msg="Card 2" />
  <Card msg="Card 3" />
  <Card msg="Card 4" />

</div>
</template>

<style></style>
