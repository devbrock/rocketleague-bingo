<template>
  <div id="app" class="bg-gray-100 min-h-screen box-border">
    <div class="md:max-w-full lg:max-w-6xl md:px-2 lg:px-16 py-8 mx-auto min-h-screen">
      <router-view></router-view>
    </div>
    <footer class="text-center text-sm text-gray-500 py-2 flex justify-center">
      <ul class="flex">
        <li class="mx-2">Copyright &copy; Brock Balducci 2020</li>
        <li class="mx-2">
          <a href="https://github.com/devbrock/rocketleague-bingo" target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import "@/assets/styles.css";

export default {
  name: "App",
  components: {},
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
        { title: "opponent has anime profile picture", completed: false },
        { title: "3 minute overtime", completed: false },
        { title: "rule 1", completed: false },
        { title: "opponent is toxic", completed: false },
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
