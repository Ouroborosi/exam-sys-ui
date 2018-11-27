<template lang="html">

  <section class="exam">
    <h1>exam Component</h1>
    <MCQ/>
  </section>

</template>

<script lang="js">
  import MCQ from '@/components/MCQ.vue'

  export default  {
    name: 'exam',
    components: {
      MCQ,
    },
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .exam {

  }
</style>
