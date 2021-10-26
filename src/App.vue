<template>
  <div class="gg">
    <h1 class="num">{{ counter }}</h1>
    <button @click="addTwo">Add one</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ counter: "counter/num" }),
  },
  methods: {
     ...mapActions({ add: "counter/addOne" }),
    addTwo(){
      this.add()
    }
  },
};
</script>

<style lang="scss" scoped></style> 