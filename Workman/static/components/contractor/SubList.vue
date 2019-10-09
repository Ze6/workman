<template lang="html">
  <div class="lg:m-10 m-3 data-list">
  <section class="d-list">
    <h1>{{ title }}</h1>
    <div class="subNav flex flex-row border border-teal-600 h-10 rounded mx-5">
      <button class="btn bg-blue-400 text-gray-100 font-light px-2 h-full">Create</button>
      <p class="error lg:m-4 m-2 p-2" v-if="errorMessage">{{ errorMessage }}</p>	
    </div>
    <ul class="listreset lg:w-1/3 w-full m-4">
	<li class="flex flex-row lg:py-2 py-1 text-gray-600 text-sm lg:text-md items-center sm:items-inline" v-for="resource of  dataList" :key="resource.eid">
	  <img class="rounded-full lg:ml-5 ml-1 mr-1 w-8" v-bind:src="resource.imgUrl" alt="profile" /> {{resource.eid}} {{resource.name }} <span class="text-xs text-teal-600 m-auto lg:ml-auto">{{resource.occupation}}</span>
	</li>
    </ul>
        
	<p class="bg-gray-800 m-4 text-gray-100 text-xs text-contained rounded" v-for="e of dataList" :key="e.id"> {{e}}</p>
  </section>
</div>

</template>

<script lang="js">
  export default  {
    name: 'sublist',
    props: [],
    mounted() {
	this.getApiRequest();
    },
    data() {
      return {
	title: 'Sub Contractors Index',
	dataList: [],
	errorMessage: null,

      }
    },
    methods: {
	async getApiRequest () {
	  
          try {
              const self = this;
	      
              const result = await self.$http.get("http://192.168.0.17:19000/api/hr/subs");
              const data = await result.data.contractors;
	      //console.log(data)
	

		      
              data.forEach( function (item) {
		 item.imgUrl = `http://192.168.0.17:19000/z3/static/profile/${item.eid}.png`
		
		 self.dataList.push(item)                 
               });
	            

          } catch (e) {
              this.errorMessage = e.message;
          }
      },

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .data-list { @apply bg-white rounded; }
  .error { @apply text-red-600 font-semibold bg-yellow-300 rounded;}
  h1 { @apply text-2xl text-teal-600 font-light; }
  h1 {@apply p-2;}
  p,ul { @apply p-4; }

</style>
