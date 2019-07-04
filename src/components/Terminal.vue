<template>
  <div id="terminal">
    <p v-for="item in command_history">
      {{ item.path }} $
      <span class="text">{{ item.command }}</span>
      <br />
      <span class="text" v-if="item.output"> &nbsp {{ item.output }} </span>
    </p>
    <p>
      ~/Home/Garret $
      <span class="text">{{ command }}</span>
      <span class="blink">&nbsp</span>
      <input type="text" id="input" v-model="command" />
    </p>
  </div>
</template>

<script>
import $ from "jquery";

let in_focus = document.activeElement;

export default {
  name: "terminal",
  data: function() {
    return {
      path: "~/Home/Garret",
      command: "",
      command_history: [],
      focus: in_focus
    };
  },

  methods: {
    write(e) {
      this.command += String.fromCharCode(e.keyCode);
    },

    process(e) {
      $("#input").focus();

      let output = "";

      if (e.keyCode === 8) {
        // backspace
        this.command = this.command.slice(0, -1);
      }

      if (this.command === "help") {
        console.log("help");
        output = "Commands: ls, cd, cat, clear";
      }
      if (this.command === "ls") {
        console.log("ls");
        output = "README  Security  Developer  Resume";
      }

      if (e.keyCode === 13) {
        // enter
        this.command_history.push({
          path: this.path,
          command: this.command,
          output: output
        });
        if (this.command === "clear") {
          console.log("-clear");
          this.command_history = [];
        } else if (this.command.slice(0, 2) === "cd") {
          console.log("-cd");
          this.path = "~/Home/Garret/Security";
        }

        this.command = "";
      }
    }
  },
  created: function() {
    //$(document).keypress(this.write);
    $("#input").focus();
    $(document).keydown(this.process);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/variables.scss";

#terminal {
  font-size: 14pt;
  margin-left: 20%;
}

#input {
  // visibility: hidden;
  width: 0px;
  height: 0px;
  background-color: $dark;
  border: none;
  &:focus {
    outline: none;
  }
}

.text {
  color: $white;
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
