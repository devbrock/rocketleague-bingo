<template>
  <div class="justify-center flex flex-col">
    <table class="table-auto mt-12 border-collapse bg-gray-300">
      <tbody>
        <tr>
          <td v-for="task in tasks.slice(0,5)" v-bind:key="task.title">
            <CardItem v-bind:task="task" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(5,10)" v-bind:key="task.title">
            <CardItem v-bind:task="task" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(10,12)" v-bind:key="task.title">
            <CardItem v-bind:task="task" />
          </td>
          <td>
            <div
              class="line-through bg-green-500 text-gray-800 text-center px-4 py-8 uppercase"
            >Free</div>
          </td>
          <td v-for="task in tasks.slice(13,15)" v-bind:key="task.title">
            <CardItem v-bind:task="task" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(15,20)" v-bind:key="task.title">
            <CardItem v-bind:task="task" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(20,25)" v-bind:key="task.title">
            <CardItem v-bind:task="task" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: "BingoCard",
  props: ["tasks"],
  components: { CardItem },
  methods: {}
};
</script>

<style scoped>
</style>