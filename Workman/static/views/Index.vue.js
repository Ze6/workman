<template lang="html">
 <div class="index bg-blue-100">
    <div class="index flex flex-row bg-blue-100 lg:pt-10 sm:pt-1 pb-5 px-2 items-center">
        <zella />
        <p class="">
            <span class="text-purple-600 text-lg font-bold  ml-10 mr-4">Zella</span>
            <span class="text-gray-600 text-md font-semibold"> Account Log In</span>
        </p>
  </div>
        <div class="bg-gray-200 items-middle p-20">           

                    <div class="flex border-shadow rounded p-2">
                   

                    <div class="center-pane relative lg:w-1/2 sm:w-full flex flex-col bg-gray-100 lg:px-20 sm:px-1 text-gray-500 text-sm font-semibold p-5 lg:ml-20 mb-5"><!-- Sign in -->
                    <p>Use Your Acess Id or Username & Password</p>
                    <Login />
                                       
                    <p class="border shadow hover:bg-gray-200 text-xs text-center font-normal cursor-pointer mt-10 p-1" @click="startTrial">No Account Yet?<span class="text-blue-600">Free 30 Day Trial</span></p>
                    </div><!-- End Sign in -->
                      
                


                  
                    </div>
                    
                </div>

                  <div class="flex flex-row items-center">
                    <zella />
                    <p class="text-xs text-gray-500 p-2">Copyright &copy; 2019-2020 ZellaCore&reg;  All Rights Reserved</p>
                  </div>
                 
           
            </div>
         
         

</template>

<script lang="js">
  import genny from '../resource';
  import status from '../statusCode';

  import Login from '@/components/auth/Login.vue';
  import zella from '@/components/icons/Zella.vue';




  export default  {
    name: 'index',
    components: {
      Login,
      zella

    },
    props: [],
    mounted() {

    },
    data() {
      return {
         user: {
                uid: null,
                username: null,
                safePassword: null,
                tempPass: null
                },
            authedUser: null,
            users: [],
      
            resolve: null,
            noresolve: null,
            imgs: {
                tech: this.$api + '/z3/static/images/tech.png',
            }

      }
    },
    methods: {
      
      startTrial () {
            alert(status[1100].resolve);
      }

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .index {

  }
</style>
