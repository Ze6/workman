<template lang="html">
  <div class="lg:m-10 m-3 employees-list">
  <section class="e-list">
    <h1>Employees Index</h1>
	<p class="error lg:m-4 m-2 p-2" v-if="errorMessage">{{ errorMessage }}</p>
	
    
    <ul class="listreset lg:w-1/3 w-full m-4">
	<li class="flex flex-row lg:py-2 py-1 text-teal-600 text-sm lg:text-md font-light items-center sm:items-inline" v-for="employee of employeesList" :key="employee.eid">
	  <img class="rounded-full lg:ml-5 ml-1 mr-2 w-8 h-8" v-bind:src="employee.imgUrl" alt="profile" /> {{employee.eid}} {{employee.name }} <span class="text-xs text-teal-600 m-auto lg:ml-auto">{{employee.occupation}}</span>
	</li>
    </ul>
   <img class="rounded-full lg:ml-5 ml-1 mr-2 w-10 h-10" v-bind:src="testsvg" alt="test" />      
	<p class="bg-gray-800 m-4 text-gray-100 text-xs text-contained rounded" v-for="e of employeesList" :key="e.id"> {{e}}</p>
  </section>
</div>
</template>

<script lang="js">
  /* Dependencies */
  import status from '@/statusCode';
	
  export default  {
    name: 'Elist',
    props: [],
    mounted() {
	this.getEmployees();
	

    },
    data() {
      return {
        employeesList: [],
	    errorMessage: null,
        testsvg: `${this.$api}/z3/static/profile/zella.svg`, 
	

      }
    },
    methods: {
      async getEmployees () {
	  const self = this;
          try {
              
	      let employee;
              const result = await self.$http.get(`${self.$api}/api/hr/employees`);
              const data = await result.data.employees;
	      
              data.forEach( function (employee) {
		 employee.imgUrl = `${self.$api}/z3/static/profile/${employee.eid}.png`
		
		 self.employeesList.push(employee)
                 
               });  
	         

          } catch (e) {
              self.errorMessage = e.message;
          }
      },
      async setAge(date) {
	const birtDate = new Date(date),
	      dateDiff = Date.now() - birthDate,
	      ageDelta = new Date(dateDiff);
	return Math.abs(ageDelta.getUTCFullYear() - 1970);
      },
      async setFullName(firstname, lastname) {
	return firstname + ' ' + lastname;
      }
			
	

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .employees-list { @apply bg-white rounded; }
  .error { @apply text-red-600 font-semibold bg-yellow-300 rounded;}
  h1 { @apply text-2xl text-teal-600 font-light; }
  h1 {@apply p-2;}
  p,ul { @apply p-4; }
</style>
