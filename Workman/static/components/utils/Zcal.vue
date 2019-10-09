<template lang="html">

  <section class="zcal">
    <span>{{ date }}</span>
  </section>

</template>

<script lang="js">
  import calendarc from '@/zcalendar';
  export default  {
    name: 'zcal',
    props: ['rawdate'],
    
    mounted() {

    },
    data() {
      return {
        calenderDate: null,

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .zcal {

  }
</style>
