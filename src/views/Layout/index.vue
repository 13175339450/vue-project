<script setup lang="ts">
  import LayoutNav  from "@/views/Layout/components/LayoutNav.vue";
  import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
  import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
</script>

<template>
  <div>
    <LayoutNav/>
    <LayoutHeader/>
    <router-view/>
    <LayoutFooter/>
  </div>
</template>

<style scoped>

</style>
