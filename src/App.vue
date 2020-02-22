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
      tasksCompleted: [13]
    };
  }
};
</script>

<style>
</style>
