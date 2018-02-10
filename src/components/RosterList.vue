<template lang="pug">
.roster-list
  //- Make this a responsive masonry grid :)
  ul.list-group(v-for='person in roster')
    li.list-group-item {{ person.name }}
</template>
<script>
export default {
  data: () => ({
    name: 'RosterList',
  }),
  computed: {

  },
  methods: {

  },
  props: ['roster'],
};
</script>
<style lang="scss" scoped>
@import '/Users/ford.heacock/dev/tp-master/trashapp/static/_variables.scss';

.roster-list {
  li {
    display: block;
    margin: 0 auto;
    color:  $main-color;
    max-width: 300px;
  }
}
</style>
