<template>
<div class="bg-white border-b">

      <div class="mx-auto flex items-center py-1">
        <div class="w-1/5 text-left pl-5">
          <a href="#">
            <zella class="h-10 w-16 rounded-full"></zella>            
          </a>
          <a href="#"><span class="text-purple-600 text-lg font-bold px-2 py-2 ml-10 mr-4">Zella</span></a>
           
        
        </div>
        <nav class="w-2/5 text-left"> 
        <a href="#"> <p>{{greetUser()}}</p></a>
        
        </nav>
          <a href="#" class="mr-4 relative">
            <input type="text" class="bg-grey-200 h-8 px-4 py-2 text-xs w-64 rounded hover:bg-blue-300" placeholder="Search">
              <span class="flex items-center absolute  mr-3"><img v-bind:src="searchIconUrl" alt="search" class="h-5 w-5 rounded-full"></span>
          </a>
       
        <div class="w-2/5 flex justify-end">
          <div class="relative group">
            <Logout /> 
            

            
            <div class="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-full">
              <a href="#" class="px-4 py-2 block text-black hover:bg-grey-200">View Profile</a>
               <router-link to="/admin" class="px-4 py-2 block text-black hover:bg-grey-200">Admin</router-link>
              <hr class="border-t mx-2 border-grey-300">
              
            </div>
          </div>
             
          <!--NewProjectsForm  v-if="(page.fullPath == '/dashboard')" /-->
     
         
         
          <div v-if="(page.fullPath != '/dashboard')"><router-link to="/dashboard"><button class="button bg-green  text-white rounded p-2 mr-2">Dashboard</button></router-link>
          </div>
         
         <!--userPortal /-->
          <div>
            <router-link to="/about"><button class="button bg-green  text-white rounded p-2 mr-2">About Us</button></router-link>
          </div>
        </div>

      </div>                
    </div>
   
   
  
</template>

<script>
  import Logout from '@/components/auth/Logout.vue';

  //import userPortal from '@/components/auth/user/userPortal.vue';
  //import NewProjectsForm from '../../components/project/newProjectForm.vue';

  import status from '@/statusCode';
  import zella from '@/components/icons/Zella.vue';

export default {
  name: 'MainHeader',
  data () {
      return {
          message: "",
          sessionUser: "",
          page: "",
          searchIconUrl: this.$api + "/z3/static/images/logo/i-search.svg",
        
         
      }

  },
  components: {
    Logout,
    //userPortal,
    //NewProjectsForm,
    zella
     

  },
  methods:{
    getPage(){
      /* Sets the Current page Object */ 
      this.page = this.$router.currentRoute;
    
    },
    greetUser () {
      return `Hi ${this.sessionUser}!`;
    },
    

  },  
  mounted() {
    const thisSessionUser = localStorage.getItem('sessionUser');
    if (thisSessionUser) {
      this.sessionUser = thisSessionUser;
      this.getPage()
    }
  },
  watch: {
    sessionUser(newSessionUser) {
      localStorage.setItem('sessionUser', newSessionUser);
    }
  },
  props: {
    msg: String
  }
}
</script>