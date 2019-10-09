<template>
  <header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div class="border-r pr-4">
         <zella class="h-10 w-12 rounded-full pl-2"></zella>  
           <a href="#"></a>
      </div>
      <div class="">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"><span class="text-purple-600 text-lg font-bold px-2 py-2 ml-2 mr-4">Zella</span>
        </button>
      </div>
      <div>
         <a href="#"> <p>{{greetUser()}}</p></a>
  
      </div>
      <div>
              <!--span class="flex items-center absolute  mr-3"><img v-bind:src="searchIconUrl" alt="search" class="h-5 w-5 rounded-full"></span-->
        
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <a href="/contractor" class="block px-2 py-1 text-gray-500 font-semibold rounded hover:bg-gray-800">Sub Contractors</a>
      
      <a href="/employee" class="mt-1 block px-2 py-1 text-gray-500 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Employees</a>
      <a href="/messenger" class="mt-1 block px-2 py-1 text-gray-500 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a>
      
       <a href="#" class="mr-8"><Logout /></a> 
      <a href="#"> <img alt="User Profile" class="absolute inset-y-1 right-0 mr-4 w-8 h-8 rounded-full" v-bind:src="sessionUserProfileUrl()"></a> 
    </nav>
  </header>
</template>

<script>
  import Logout from '@/components/auth/Logout.vue';
  
  import status from '@/statusCode';
  import zella from '@/components/icons/Zella.vue';
  
  export default {
      name: 'AuthHeader',
    data() {
      return {
        isOpen: false,
        message: "",
        sessionUser: "",
        sessionUserId: "",
        
        page: "",
        searchIconUrl: this.$api + "/z3/static/images/logo/i-search.svg",
        
      }
    },
      components: {
    Logout,
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
    sessionUserProfileUrl () {
      return this.$api + "/z3/static/profile/" + this.sessionUserId + ".png";
    }

  },  
  mounted() {
    const thisSessionUser = localStorage.getItem('sessionUser');
    const thisSessionUserId = localStorage.getItem('sessionUserId');
    
    if (thisSessionUser ) {
      this.sessionUser = thisSessionUser;
      this.sessionUserId = thisSessionUserId;
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