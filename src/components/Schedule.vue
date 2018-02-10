<template lang="pug">
.schedule
  h1 {{ name }}
  .container.well
    h3 Coming soon...
    el-button Default
</template>
<script>

export default {
  data: () => ({
    name: 'Schedule',
  }),
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  components: {

  },
};
</script>
<style lang="scss" scoped>
.schedule {
  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
