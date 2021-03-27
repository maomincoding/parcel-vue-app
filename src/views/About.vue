<template>
  <div class="about">about</div>
  <button @click="changeId('2')">change</button>
  <p>{{ appId }}</p>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "About",
  computed: {
    ...mapGetters(["appId"]),
  },
  methods: {
    ...mapActions({
      useLogin: "user/login",
      changeId: "app/changeAppId",
    }),
  },
  mounted() {
    this.useLogin();
  },
};
</script>
