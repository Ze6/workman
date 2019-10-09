<template lang="html">

  <section class="navreg">

    
    <div id="nav " class="flex flex-row items-center bg-gray-100 py-2 px-5 text-purple-400">

      <div class="flex flex-row w-1/2 items-center">
       <img alt="icon" class="inset-y-1 right-0 mr-4 w-8 h-8 rounded-full" v-bind:src="icon">
      
        <h1 class="pr-2 text-green-500" v-if="user.username">{{name}}</h1>
        <h1 class="pr-2 text-red-400" v-else>{{name}}</h1>
        <router-link to="/" class="hover:text-purple-200 pr-2">Home</router-link> 
        <router-link to="/about" class="hover:text-purple-200 pr-2">About</router-link>
      </div>
      
      <div class="w-1/4"></div>

      <div class="w-1/4 flex flex-row items-center">
      
      
      <img alt="User Profile" class="absolute inset-y-1 right-0 mr-4 w-8 h-8 rounded-full" v-bind:src="user.profileUrl">
      </div>

        </div>



  </section>

</template>

<script lang="js">
  export default  {
    name: 'navreg',
    props: [],
    mounted() {

    },
    data() {
      return {
          name: "zclient",
          icon: `${this.$api}/z3/static/images/logo/zella.svg`,
          user: {
            username: null,
            userId: null,
            profileUrl:  `${this.$api}/z3/static/profile/IanProfile.jpg`
          }

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .navreg {

  }
</style>
