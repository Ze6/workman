<template>
    <div>
      <MainHeader/>
      <div class="flex bg-grey-light">

        <div class="w-1/4 bg-white p-2 m-1">
      

         <RemoteProjectsIndex></RemoteProjectsIndex>
        
               
        </div>

         <div class="w-1/2 bg-white p-2 m-1">
           <div class="flex flex-row">
            <ToolTip tooltext="Number of projects"/>
         <ProjectStats class="mr-2">  </ProjectStats>
             <ToolTip tooltext="Number of tasks"/>
           <TaskStats/>
         

           <div>
           
             <ul class="list-reset">
               <p>Your Recent Project </p>
               <li>Project {{project.name}}</li>
                <li>Location {{project.location}}</li>
                 <li>Category {{project.category}}</li>
                  <li>Start Date {{project.start}}</li>
                   <li>End Date {{project.end}}</li>
                 <li>Author {{project.author_id}}</li>
                  
                
             </ul>
           </div>
  </div>
    <!-- New Project Modal -->
 
    <div v-if="modal" @click.self="toggleModal" class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
      <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
        <h2 class="text-4xl text-center font-hairline md:leading-loose text-grey md:mt-6 mb-4">New Project</h2>

          <!--.........................Project Identification......................-->
                  <div class="flex flex-wrap -mx-3 mb-6">

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1 mt-5" for="grid-first-name">
                        Project Name
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Project Unique Name..." v-model="project.name" autocomplete="on">
                      <p class="text-red text-xs italic" v-if="!project.name">Please fill out this field.</p>
                    </div>
                     <transition name="fade">
                    <div class="w-full md:w-1/2 px-3" v-if="project.name">
                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1 mt-5" for="grid-last-name">
                        Location
                      </label>
                      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="text" placeholder="Project address..." v-model="project.location" autocomplete="on">
                    </div>
                      </transition>
                       
                       
                        <div class="flex flex-wrap -mx-3 mb-6" v-if="project.location">
                       <transition name="fade"> 
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" v-if="project.location">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="category">
                          Category
                        </label>
                        <div class="category">
                          <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="select" v-model="select">
                               <option>Charity</option>
                                <option>Commercial</option>
                                <option>Government</option>             
                                <option>Residential</option>            
                                <option>Other...</option>
                          </select>
                          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>                          
                        </div>
                      </div>
                       </transition>
                        <transition name="fade">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" v-if="select">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-alias">
                          Autor id
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-alias" type="text" placeholder="Also Known as..." v-model="project.author_id" autocomplete="on">                       
                      </div>
                        </transition>
                       <transition name="fade">
                      <div class="w-full md:w-1/3 px-3" v-if="project.author_id">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-dob">
                          Start
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-dob" type="date" v-model="project.start">
                      </div>
                       </transition>
                        <transition name="fade">
                       <div class="w-full md:w-1/3 px-3" v-if="project.start">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" for="grid-dob">
                          Completion Date
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-dob" type="date" v-model="project.end">
                      </div>
                       </transition>
                                                
                    </div>


                  </div>


      
        <div class="inline-flex justify-center">
          <button @click="toggleModal" class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded">Create Project          </button>
          <button @click="toggleModal" class="bg-grey-lighter flex-1 md:flex-none border-b-2 border-red ml-2 hover:bg-red-lightest text-grey-darkest font-bold py-4 px-6 rounded">
                           Cancel                        </button>
        </div>
        <span @click="toggleModal" class="absolute pin-t pin-r pt-4 px-4">
                        <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
      </div>
    </div>


        </div>

          <div class="w-1/4 bg-white p-2 m-1">
        
             <div class="bg-white text-sm text-blue-light mt-2 p-2 rounded">
              <h3>Tasks Index</h3>
              <ul class="list-reset">
                <li  v-for="(task) in tasks" :key="task.tid" class="border border-b p-2"><span>{{ task.tid }}</span><span>{{ task.title }}</span></li>
              </ul>

          </div>
        </div>
      </div>

       
       
        <div class="flex flex-row mb-5">
           <div class="w-1/4"> 
           <p>{{select}}</p>           
                <trend
                :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                auto-draw
                smooth
                >       
                </trend>
            </div>
            <div class="w-1/4">
             <line-chart :chart-data="datacollection"></line-chart>
                <button @click="fillData()">Randomize</button>
            </div>
            <div class="w-1/4">
            <h2>Monthly Tasks Completed</h2>
            <!--bar/-->
            </div>
            <div class="w-1/4">
            <h3>Monthly Paybills</h3>
            <!--monthly-paybills/-->
            </div>
        </div>
       <div>
         <ToolTip tooltext="ouch"/>
         <progress value="75" max="100"></progress>

       </div>

      
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import MainHeader from '@/components/headers/mainHeader.vue';
import Trend from "vuetrend";
import LineChart from '../../components/charts/employeeEarningsChart.js';
import Bar from '../../components/charts/monthlyTasksCompletedChart.js';
import MonthlyPaybills from '../../components/project/monthlyPaybills.vue';
import RemoteProjectsIndex from '../../components/project/remoteProjects.vue';
import NewProjectsForm from '../../components/project/newProjectForm.vue';
import ProjectStats from '../../components/project/stats/projectStats.vue';
import TaskStats from '../../components/project/stats/taskStats.vue';
import ToolTip from '../../components/widgets/toolTip.vue';


export default {
    name: 'UserBoard',
    data () {
        return {
            msg: 'to The commoners',
            datacollection: null,
            projectname: '',
            modal: false,
            select: null,
            project: {
              name: null,
              location: null,
              author_id: null,
              category: null,
              start: null,
              end: null
            }
           
        }
    },
    components: {
      Bar,
      LineChart,
      MainHeader,
      MonthlyPaybills,
      RemoteProjectsIndex,
      ProjectStats,
      TaskStats,
      ToolTip,
      Trend,
    
       
    },
    mounted () {
      this.fillData();
      this.$store.dispatch('loadProjects');
      this.$store.dispatch('loadTasks');
      this.resolveLocalProject();

    },
    methods: {
      toggleModal() {
      this.modal = !this.modal
      },
      resolveLocalProject(){
        var resolvedLocalProject = JSON.parse(localStorage.getItem('localproject'))
        this.project.name = resolvedLocalProject.name
        this.project.location = resolvedLocalProject.location
        this.project.category = resolvedLocalProject.category
        this.project.start = resolvedLocalProject.start
        this.project.end = resolvedLocalProject.end
        this.project.author_id = resolvedLocalProject.author_id
       

      },

      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data Two',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data Three',
              backgroundColor: 'blue',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
         
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },

      ...mapMutations([
        'ADD_PROJECT'
      ]),
      ...mapActions([
        'removeProject'
      ]),
      addProject: function() {
        let data = {
          name: this.projectname,
          pid: this.projectname[0] + Date()
        }
        this.ADD_PROJECT(data)
        this.projectname = ''
      },
      removeProjects: function(project) {
        this.removeProject(project)
      },
     

    },
  computed: {
    ...mapState([
      'projects', 'tasks'
      
    ])
  },
  watch() {
    this.resolveLocalProject()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>