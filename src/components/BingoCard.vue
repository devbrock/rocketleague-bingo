<template>
  <div>
    <div class="text-center">
      <img class="h-48 mx-auto" alt="rocket league logo" src="../assets/rocket-league-logo.png" />
      <h1 class="font-bold text-4xl text-gray-900 mx-auto">Welcome To Rocket League Bingo!</h1>
      <p class="text-sm text-gray-600">Here is your randomized challenge card!</p>
      <!-- <button
        class="mt-4 px-4 py-2 bg-blue-900 text-gray-100 font-medium focus:outline-none hover:bg-gray-300 hover:text-blue-900"
        v-on:click="addChallenge"
      >Add A Challenge</button>-->
    </div>
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
      tasks: [
        { title: "Score a hat trick", completed: false },
        { title: "opponent has anime profile picture", completed: false },
        { title: "3 minute overtime", completed: false },
        { title: "rule 1", completed: false },
        { title: "enemy is toxic", completed: false },
        { title: "lag indicator", completed: false },
        { title: "pre flip goal", completed: false },
        { title: "ground pinch goal", completed: false },
        { title: "turtle goal", completed: false },
        { title: "miss an open net", completed: false },
        { title: "passing play", completed: false },
        { title: "musty flick", completed: false },
        { title: "ceiling shot", completed: false },
        { title: "terrible whiff", completed: false },
        { title: "fake an opponent", completed: false },
        { title: "score a bump/demo goal", completed: false },
        { title: "opponent has weird car", completed: false },
        { title: "get a low five", completed: false },
        { title: "opponent rage quits", completed: false },
        { title: "team pinch", completed: false },
        { title: "epic save", completed: false },
        { title: "score a double  tap", completed: false },
        { title: "demo both opponents", completed: false },
        { title: "score an air dribble goal", completed: false },
        { title: "forfeit before 2:30", completed: false },
        { title: "0 second goal", completed: false },
        { title: "throw a game in the final minute", completed: false },
        { title: "someone goes afk", completed: false },
        { title: "score a flip reset goal", completed: false }
      ],
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
  created() {
    var currentIndex = this.tasks.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.tasks[currentIndex];
      this.tasks[currentIndex] = this.tasks[randomIndex];
      this.tasks[randomIndex] = temporaryValue;
    }

    return this.tasks;
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
    }
  }
};
</script>

<style scoped>
</style>