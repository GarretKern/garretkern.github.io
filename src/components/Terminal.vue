<template>
  <div id="terminal">
    <div v-for="item in command_history">
      {{ item.path }} $
      <span class="white">{{ item.input }}</span>
      <span class="blink" v-if="item.active">&nbsp</span>
      <input type="text" id="input" v-if="item.active" v-model="item.input" />
      <br />
      <div class="output white" v-if="item.command">
        <component
          v-bind:is="item.command"
          v-bind:input="item.input"
          v-bind:path="item.path"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import help from "@/components/commands/help.vue";
import ls from "@/components/commands/ls.vue";
import cat from "@/components/commands/cat.vue";
import treeview from "@/components/commands/treeview.vue";
import invalid from "@/components/commands/invalid.vue";

const commands = ["ls", "help", "cd", "cat", "treeview", "clear"];

export default {
  name: "terminal",
  data: function() {
    return {
      command_history: [
        {
          path: "~/Home/Garret",
          input: "",
          command: "",
          active: true
        }
      ]
    };
  },

  components: {
    help,
    ls,
    cat,
    treeview,
    invalid
  },

  methods: {
    process(e) {
      $("#input").focus();
      if (e.keyCode === 13) {
        this.command();
      }
    },

    command() {
      let current = this.command_history[this.command_history.length - 1];

      // parse input to determine command
      let command = current.input.split(" ")[0];
      if (command != "" && commands.indexOf(command) === -1) {
        command = "invalid";
      }
      if (command === "clear") {
        this.command_history = [];
      }
      if (command === "cd") {
        command = "";
        console.log("change directory");
      }

      // reset current command
      let newPath = current.path;
      current.command = command;
      current.active = false;

      // push new active command to history
      this.command_history.push({
        path: newPath,
        input: "",
        command: "",
        active: true
      });
    }
  },
  created: function() {
    $("#input").focus();
    $(document).keydown(this.process);
  },
  updated: function() {
    window.scrollTo(0, $("#app")[0].scrollHeight);
  }
};
</script>

<style scoped lang="scss">
@import "@/variables.scss";

#terminal {
  font-size: $medium-text;
  margin-left: 20%;
  width: 60%;
  margin-top: 2%;
}

#input {
  width: 0px;
  height: 0px;
  background-color: $dark;
  border: none;
  &:focus {
    outline: none;
  }
}

.output {
  margin-left: 30px;
}

.blink {
  @keyframes blinking {
    0% {
      background-color: $dark;
    }
    100% {
      background-color: $white;
    }
  }

  width: 2px;
  height: 5px;
  animation: blinking 1.2s infinite;
}
</style>
