<template lang="html">
  <div class="lg:m-10 m-3 employees-list">
    <section class="e-list">
      <h1>Projects Index</h1>
      <p class="error lg:m-4 m-2 p-2" v-if="errorMessage">{{ errorMessage }}</p>
    </section>
    
    <table id="pp1" class="projects bg-gray-100 border border-gray-300 rounded-lg lg:p-5 p-2">
      <thead class="bg-gray-700 text-gray-200 text-sm p-2">
        <tr >
          <th>ID</th>
          <th>NAME</th>
          <th>CATEGORY</th>
          <th>ADDRESS</th>
          <th>Start</th>
          <th>End</th>
          <th>Completed</th>
          <th>Logged</th>
          </tr>
      </thead>
      
      <tbody v-for="project of projectsList" :key="project.eid">
      <tr class="border border-b border-gray-300 rounded-lg mb-2 p-2">
        <td class="text-blue-500 text-xs p-2">{{project.pid}}</td>
        <td class="text-blue-500 text-xs p-2">{{project.name}}</td>
        <td class="text-blue-500 text-xs p-2">{{project.category}}</td>
        <td class="text-blue-500 text-xs p-2">{{project.address}}</td>
         <td class="text-teal-500 text-xs p-2">{{cdate(project.start)}}</td>
          <td class="text-orange-500 text-xs p-2">{{cdate(project.end)}}</td>
           
          <td class="text-green-500 text-xs p-2" v-if="(project.completed < project.end)">{{cdate(project.completed)}}</td>
          <td class="text-red-500 text-xs p-2" v-else>{{cdate(project.completed)}}</td>
           
          <td class="text-xs p-2">{{cdate(project.registration)}}</td> 
        
      </tr>      
        
  
      </tbody>
 
  
  </table>
      
  </div>
</template>

<script lang="js">
  
  import cDate from '@/zcalendar';
  export default  {
    name: 'Projectlist',
    components: {
           
    },
    props: [],
    mounted() {
      this.getProjects();

    },
    data() {
      return {
        projectsList: [],
	    errorMessage: null,
        apiUrl: this.$api + "/api/resource/baseprojects",
        cdate: cDate,
        projectState: {
          is_completed: false,
          is_completed: false,
          is_expired: false,
        }

      }
    },
    methods: {
      async getProjects () {
        const self = this;
        try {              
	      let project;
              const result = await self.$http.get(self.apiUrl);
              const data = await result.data.projects;
	      
              data.forEach( function (project) {
                if (project.pid) {
		          self.projectsList.push(project)
                  }
               });  
	         

          } catch (e) {
              self.errorMessage = e.message;
          }
      },

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .p-list {

  }
</style>
