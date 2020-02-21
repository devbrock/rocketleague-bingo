<template>
  <div id="app" class="bg-gray-100 min-h-screen box-border">
    <div class="max-w-6xl p-16 mx-auto min-h-screen">
      <h1 class="font-bold text-4xl text-gray-900 mx-auto">Welcome To Rocket League Bingo!</h1>
      <p
        class="text-sm text-gray-600"
      >To begin, enter up to 25 challenges to add to your Bingo Card!</p>

      <!-- <img class="h-48 mx-auto" alt="rocket league logo" src="./assets/rocket-league.svg" /> -->
      <button
        class="mt-4 px-4 py-2 bg-blue-900 text-gray-100 font-medium focus:outline-none hover:bg-gray-300 hover:text-blue-900"
        v-on:click="addChallenge"
      >Add A Challenge</button>
      <BingoCard v-bind:tasks="tasks" />
    </div>
  </div>
</template>

<script>
import "@/assets/styles.css";
import BingoCard from "./components/BingoCard";

export default {
  name: "App",
  components: {
    BingoCard
  },
  methods: {
    addChallenge() {
      const title = prompt("What would you like to add?");
      const newTask = {
        title,
        completed: false
      };
      this.tasks = [...this.tasks, newTask];
    }
  },
  data() {
    return {
      tasks: [
        { title: "Score a hat trick", completed: false },
        { title: "opponent has anime profile pciture", completed: false },
        { title: "3 minute overtime", completed: false },
        { title: "rule 1", completed: false },
        { title: "enemy is toxic", completed: false },
        { title: "lag indicator", completed: false },
        { title: "test challenge", completed: false },
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
        { title: "score an air dribble goal", completed: false }
      ]
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
  }
};
</script>

<style>
</style>
