<template lang="html">

  <section class="exam">
    <h1>exam Component</h1>
    <MCQ/>
  </section>

</template>

<script lang="js">
  import { HttpService } from '@/util/http/http.service'
  import { resources } from '@/conf'
  import { from } from 'rxjs';

  import MCQ from '@/components/MCQ.vue'
  
  export default  {
    name: 'exam',
    components: {
      MCQ,
    },
    props: [],
    mounted() {
      this.created()
    },
    data() {
      return {

      }
    },
    methods: {
      // init function
      created() {
        console.log(`init exam`)
        const service = new HttpService(resources.api.questions)
        const responseObservable = from(service.get())
        responseObservable.subscribe(_ => console.log(_))
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .exam {

  }
</style>
