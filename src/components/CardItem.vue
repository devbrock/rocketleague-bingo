<template>
  <div
    class="px-4 py-8 text-gray-900 hover:bg-green-400 hover:text-gray-800 text-center flex-1"
    v-bind:class="{'line-through bg-green-500': task.completed}"
    @click="toggleCompleted(); checkWin()"
  >
    <span class="uppercase">{{task.title}}</span>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["task", "taskId"],
  methods: {
    toggleCompleted() {
      this.task.completed = !this.task.completed;
    },
    checkWin() {
      this.$emit("checkWin", this.task.title);
    }
  }
};
</script>

<style scoped>
</style>