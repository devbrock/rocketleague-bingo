<template>
  <div class="justify-center flex flex-col flex-1 overflow-auto">
    <h1 v-if="won" class="text-6xl text-center text-green-500 font-bold">You won!</h1>
    <img
      v-if="won"
      src="https://media.giphy.com/media/xUPGcF89oa1gwy96LK/giphy.gif"
      class="max-w-sm mx-auto"
    />
    <table class="table-auto mt-12 border-collapse bg-gray-300">
      <tbody>
        <tr>
          <td v-for="task in tasks.slice(0,5)" v-bind:key="task.title">
            <CardItem v-bind:task="task" v-on:checkWin="checkWin" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(5,10)" v-bind:key="task.title">
            <CardItem v-bind:task="task" v-on:checkWin="checkWin" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(10,12)" v-bind:key="task.title">
            <CardItem v-bind:task="task" v-on:checkWin="checkWin" />
          </td>
          <td>
            <div
              class="line-through bg-green-500 text-gray-800 text-center px-4 py-8 uppercase"
            >Free</div>
          </td>
          <td v-for="task in tasks.slice(13,15)" v-bind:key="task.title">
            <CardItem v-bind:task="task" v-on:checkWin="checkWin" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(15,20)" v-bind:key="task.title">
            <CardItem v-bind:task="task" v-on:checkWin="checkWin" />
          </td>
        </tr>
        <tr>
          <td v-for="task in tasks.slice(20,25)" v-bind:key="task.title">
            <CardItem v-bind:task="task" v-on:checkWin="checkWin" />
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
  props: ["tasks", "taskId", "tasksCompleted"],
  components: { CardItem },
  data() {
    return {
      bingoArrays: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [5, 10, 15, 20, 25],
        [1, 7, 13, 19, 25],
        [5, 9, 13, 17, 21]
      ],
      won: false
    };
  },
  methods: {
    checkWin(title) {
      let allTasks = this.$props.tasks;
      let completedTasks = this.$props.tasksCompleted;
      let index = allTasks.findIndex(x => x.title === title);
      completedTasks.push(index + 1);

      console.log("completed");
      console.log(completedTasks);

      this.bingoArrays.forEach(arr => {
        if (
          completedTasks.includes(arr[0]) &&
          completedTasks.includes(arr[1]) &&
          completedTasks.includes(arr[2]) &&
          completedTasks.includes(arr[3]) &&
          completedTasks.includes(arr[4])
        ) {
          this.won = true;
        }
      });

      // this.won =
      //   completedTasks.includes(1) &&
      //   completedTasks.includes(2) &&
      //   completedTasks.includes(3) &&
      //   completedTasks.includes(4) &&
      //   completedTasks.includes(5);

      // let completed = JSON.stringify(completedTasks);
      // console.log(completed);
      // let winners = JSON.stringify(this.bingoArrays);
      // console.log(winners);
      // let found = winners.indexOf(completed);
      // if (found != -1) {
      //   this.won = true;
      // }
    }
  }
};
</script>

<style scoped>
</style>