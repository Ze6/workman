const contractorPage = Vue.component("ContractorPage", {
  template: `<div lang="html">

    <section class="contractor">
      <AuthHeader />
      <sublist />
    </section>

  </div>`,
  props: ["title"],
  components: {
      AuthHeader,
      sublist
  },
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

