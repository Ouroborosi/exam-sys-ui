<template lang="html">

  <section class="mcq">
    <h1>mcq Component</h1>
    <md-content>
      <md-card>
        <md-card-header>
          <div class="md-title">Card without hover effect</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button class="md-raised md-primary">Action</md-button>
          <md-button class="md-raised md-accent">Action</md-button>
        </md-card-actions>
      </md-card>
    </md-content>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'mcq',
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
  .mcq {
    .md-content {
      background-color: transparent;
      .md-card {
        text-align: left;
        margin: 0 25%;
      }
    }
  }
</style>
