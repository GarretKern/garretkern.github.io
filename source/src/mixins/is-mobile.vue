<script>
import $ from "jquery";

export default {
  name: "isMobile",
  methods: {
    mobile() {
      var isMobile = false; //initiate as false
      // device detection
      if ($("#app").css("display") == "none") {
        isMobile = true;
      }
      return isMobile;
    }
  }
};
</script>
