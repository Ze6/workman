const employeePage = Vue.component("EmployeePage", {
  template: `<div lang="html">
    <template lang="html">

      <section class="employee">
        <AuthHeader />
        <Elist />
      </section>


    </template>
  </div>`,
    components: {
      AuthHeader,
      Elist
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
});