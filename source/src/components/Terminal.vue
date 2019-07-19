<template>
  <div id="terminal">
    <div v-for="item in command_history">
      {{ item.path }} $
      <span class="white">{{ item.input }}</span>
      <span class="blink" v-if="item.active">&nbsp</span>
      <input type="text" id="input" v-if="item.active" v-model="item.input" />
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
import { is_mobile } from "@/utils/is-mobile.js";

const commands = ["ls", "help", "cd", "cat", "treeview", "clear"];

export default {
  name: "terminal",
  data: function() {
    let path;
    if (!is_mobile()) {
      path = "~/Home/Garret";
    } else {
      path = "~/Mobile/Garret";
    }
    return {
      command_history: [
        {
          path: path,
          input: "",
          command: "",
          active: true
        }
      ]
    };
  },

  methods: {
    focus(e) {
      $("#input").focus();
    },
    process(e) {
      this.focus();
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
      command = command.toLowerCase();
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
      if (!is_mobile()) {
        this.command_history.push({
          path: newPath,
          input: "",
          command: "",
          active: true
        });
      }
    }
  },

  created: function() {
    $(document).keydown(this.process);
    $(document).click(this.focus);
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

  width: 2rem;
  height: 5rem;
  animation: blinking 1.2s infinite;
}
</style>
