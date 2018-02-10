<template lang="pug">
.about
  h1 {{ name }}
  .container
    .well
      p
        | Trash Pandas are a third-year mixed Ultimate team representing Nashville, Tennessee.
        | Though we’re a new team, we plan to be around for a while. We are getting better all
        | the time and we hope to become the team that everyone in town wants to play for.
        | Whether it’s grinding out a marathon point at Regionals or bowling at Donelson Lanes -
        | or even all 27 pandas hanging out together on a Friday night before a tournament in a
        | single motel room - we cherish each other. We are a family of competitive Ultimate players
        | who want to get better in an intentional manner and have a ton of fun in the process. We
        | focus on process over results and there’s no place we’d rather be on a summer weekend than
        | tossing frisbees together at a nondescript field complex somewhere in the Southeast.
</template>

<script>
export default {
  data: () => ({
    name: 'About Us',
  }),
  computed: {

  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss">
.about {
  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
