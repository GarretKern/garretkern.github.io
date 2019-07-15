<template>
  <div id="terminal">
    <div v-for="item in command_history">
      {{ item.path }} $
      <span class="white">{{ item.input }}</span>
      <span class="blink" v-if="item.active">&nbsp</span>
      <input
        type="text"
        id="input"
        v-if="item.active"
        v-model="item.input"
        autofocus
      />
      <br />
      <div class="output white seperated" v-if="item.command">
        <component
          v-bind:is="item.command"
          v-bind:input="item.input"
          v-bind:path="item.path"
          v-on:change-directory="change_directory"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { tab_complete } from "@/utils/filesystem.js";

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

  methods: {
    process(e) {
      $("#input").focus();
      if (e.keyCode === 13) {
        this.command();
      }
      if (e.keyCode === 9) {
        if (e.preventDefault) {
          e.preventDefault();
        }
        let current_command = this.current_command();
        let inputs = current_command.input.split(" ");
        let pre_input = inputs.slice(0, inputs.length - 1);
        let post_input = inputs[inputs.length - 1];

        let complete = tab_complete(current_command.path, post_input);
        if (complete) {
          pre_input.push(complete);
          current_command.input = pre_input.join(" ");
        }
      }
    },

    current_command() {
      return this.command_history[this.command_history.length - 1];
    },

    change_directory(path) {
      this.current_command().path = path;
    },

    command() {
      let current = this.current_command();

      // parse input to determine command
      let command = current.input.split(" ")[0];
      if (command != "" && commands.indexOf(command) === -1) {
        command = "invalid";
      }
      if (command === "clear") {
        this.command_history = [];
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
    $(document).keydown(this.process);
    this.command_history[this.command_history.length - 1].input = "cat readme";
    this.command();
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
  margin-left: 10%;
  width: 80%;
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
