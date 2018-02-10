<template lang="pug">
.main
  .jumbotron
</template>

<script>

export default {
  data: () => ({
    name: 'Trash Pandas Ultimate',
  }),
  components: {

  },
  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '/Users/ford.heacock/dev/tp-master/trashapp/static/_variables.scss';

.main {
  .btn {
    background-color: $main-color;
    border: none;
  }
  .jumbotron {
    background: none;
    img {
      margin: 0 auto;
    }
  }
  text-align: center;
  h1, h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
