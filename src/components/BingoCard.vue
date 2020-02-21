<template>
  <div class="justify-center flex flex-col flex-1 overflow-auto">
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
  data() {
    return {
      bingoArrays = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12 ,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,12,18,23],
        [4,9,14,19,24],
        [5,10,15,20,25],
        [1,7,12,17,22],
        [5,9,13,17,21]
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>