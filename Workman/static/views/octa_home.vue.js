const octaHomePage = Vue.component("OctaPage", {
    template: `<div lang="html">
        <template id="auth-login" >
            <section id="auth-intro">
                <h1 class="text-2xl text-gray-700 m-5 p-2">{{ title }}</h1>
                <p class="text-teal-500 m-5 p-2">Enter Username or Email!</p>
            </section>
            <section>
                <Login></Login>
            </section>
            
        </template>
    </div>`,
    
    data () {
        return {
            title: "Workman Login"

        }
    }

});