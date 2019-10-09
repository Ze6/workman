const indexPage = Vue.component("IndexPage", {
    template: `<div>
        <section>
         <p class="bg-gray-700 text-white text-2xl p-5">
        {{ message }}
        <button class="bg-gray-600 text-gray-200 hover:text-gray-100 py-2 px-4 m-5 w-auto rounded"> <router-link to="/octa">Login</router-link></button>

        </p>
        </section>
        <section>
        <p class="bg-blue-500 text-gray-100 hover:text-white py-2 px-4 m-5 rounded">
            Your Project Management just got easier.
        </p>
        </section>      

    </div>`,
    props: ["title"],    
    data () {
        return {
            message: "Your Workman"
        }
    },
    created () {
        
    },
    methods: {
        
    },

});