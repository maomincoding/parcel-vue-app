<template>
  <div class="home">
    home
    <p>{{ userName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["userName"]),
  },
};
</script>
