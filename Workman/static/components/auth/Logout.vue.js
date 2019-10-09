Vue.component(
    'Logout',
     {
    template: `<div><template><div><button class="block px-2 py-1 text-gray-500 font-semibold rounded hover:bg-gray-300" @click="logOut">Logout</button></div></template></div>`,
    methods: {        
        logOut () {
            // Remove the Authed user's data from session
            localStorage.removeItem('sessionId');
            localStorage.removeItem('sessionUser'); 
            localStorage.removeItem('sessionUserId')
                                             
            this.$router.push("/"); // Redirect to Home 
        }
    }
});