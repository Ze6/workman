<template>
 <div class="dropdown">
  <button class="dropbtn bg-green  text-white rounded p-2 mr-2">Active User</button>
  <div class="dropdown-content">
      <a href="#"><img src="sessionUserImgUrl" alt="avatar" class="h-8 w-8 mr-2 rounded-full"></a>
    <a href="#"> {{ sessionUser }}</a>
    <a href="#">Settings</a>
    <a href="#"><Logout /></a>
  </div>
</div>
 
</template>

<script>
import Logout from '@/components/auth/Logout.vue';
export default {
  name: "UserPortal",
  
  data() {
    return {
      message: "OutpostVI",
      sessionUser: "",
      sessionUserImgUrl: ""
    };
  },
  components: {
    Logout 
  },
  methods: {

   
  },
   mounted() {
    const thisSessionUser = localStorage.getItem('sessionUser');
    const thisSessionUserImgUrl = localStorage.getItem('sessionUserImgUrl');

    if (thisSessionUser) {
      this.sessionUser = thisSessionUser;
      this.sessionUserImgUrl = thisSessionUserImgUrl;
    }
  },
  watch: {
    sessionUser(newSessionUser) {
      localStorage.setItem('sessionUser', newSessionUser);
    }
  },
};
</script>

<style>
/* Style The Dropdown Button */
.dropbtn {
 
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>


