<template>
  <div
    class="px-4 py-8 text-gray-900 hover:bg-green-400 hover:text-gray-800 text-center flex-1"
    v-bind:class="{'line-through bg-green-500': task.completed}"
    v-on:click="markComplete"
  >
    <span class="uppercase">{{task.title}}</span>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["task"],
  methods: {
    markComplete() {
      this.task.completed = !this.task.completed;
    }
  }
};
</script>

<style scoped>
</style>