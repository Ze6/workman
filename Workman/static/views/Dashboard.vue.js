const dashboardPage = Vue.component("DashboardPage", {
    template: `<div lang="html">
  
        <template>
            <div class="dashboard bg-blue-100">
                
                <AuthHeader />
            
                <div class="bg-gray-200 ">
                    
                    <div class="flex lg:flex-row flex-col border border-blue-300 rounded-lg lg:mx-20 mx-2 mt-5 mb-10 h-auto">
                        
                        <div class="navbar flex flex-col bg-gray-900 text-gray-200 text-xs w-1/8 lg:ml-10 ml-5 lg:mt-20 mt-5  lg:mb-20 mb-5 rounded-tl-lg rounded-bl-lg p-1">
                            
                            <div><a href="#"><img v-bind:src="imgs.bars" alt="" class="inline-block h-4 w-4 mb-2"></a></div>
                            <div><a href="#"><img v-bind:src="imgs.bSearch" alt="" class="inline-block h-4 w-4 mb-2 rounded-full"></a></div>
                            <div><a href="#"><img v-bind:src="imgs.plus" alt="" class="inline-block h-4 w-3 mb-2 rounded-full"></a></div>
                            <div><a href="#"><img v-bind:src="imgs.action" alt="" class="inline-block h-4 w-4 mb-2 rounded-full"></a></div>
                            <div><a href="#"><img v-bind:src="imgs.star" alt="" class="inline-block h-4 w-4 mb-2 rounded-full"></a></div>  
                            <div><a href="#"><img v-bind:src="imgs.eye" alt="" class="inline-block h-4 w-4 mb-2 rounded-full"></a></div>
                            <div><a href="#"><img v-bind:src="imgs.home" alt="" class="inline-block h-4 w-4 mb-2"></a></div>  
                            <div><a href="#"><img v-bind:src="imgs.project" alt="" class="inline-block h-4 w-4 mb-2"></a></div>
                            <div><a href="#"><img v-bind:src="imgs.calendar" alt="" class="inline-block h-4 w-4 mb-2"></a></div> 
                            <div><a href="#"><img v-bind:src="imgs.user" alt="" class="inline-block h-4 w-4 mb-2"></a></div> 
                            
                        </div>
                        
                        <div class="module flex flex-col bg-white text-gray-800 w-7/8 lg:ml-2 ml-2 lg:mr-10 lg:mt-20 mt-5  lg:mb-20 mb-5 border border-blue-200 border-shadow rounded-sm">
                            
                            <div class="module-head flex lg:flex-row flex-col p-1">
                                
                                <button class="bg-gray-100 text-gray-700 text-sm font-thin hover:font-semibold py-1 px-2 ml-1 rounded shadow" @click="setProjectlistConsole">Projects</button>
                                <button class="bg-gray-100 text-gray-700 text-sm font-thin hover:font-semibold py-1 px-2 ml-1 rounded shadow" @click="setElistConsole">Employees</button>
                                <button class="bg-gray-100 text-gray-700 text-sm font-thin hover:font-semibold py-1 px-2 ml-1 rounded shadow">Contractors</button>
                                <button class="bg-gray-100 text-gray-700 text-sm font-thin hover:font-semibold py-1 px-2 ml-1 rounded shadow">Budget View</button>
                                <div class="inline flex">
                                    <input type="text" class="bg-grey-200 h-8 px-4 py-2 text-xs w-64 rounded hover:bg-blue-100 border border-blue-200 border-shadow ml-1" placeholder="Search">
                                
                                </div>
                                <button class="bg-gray-100 text-gray-700 text-sm font-thin hover:font-semibold py-1 px-2 ml-1 rounded shadow">
                                    <img v-bind:src="imgs.cloudb" alt="" class="h-4 w-4 mb-1 rounded-full">
                                </button>
                                <button class="bg-yellow-400 text-gray-700 text-sm font-thin hover:font-semibold py-1 px-2 ml-1 rounded shadow" >
                                    <img v-bind:src="imgs.eye" alt="" class="h-4 w-4 mb-1">
                                </button>
                                <button class="bg-blue-500 text-gray-700 text-sm font-thin hover:font-semibold px-2 ml-1 rounded shadow">
                                    <img v-bind:src="imgs.mail" alt="" class="h-4 w-4 mb-1">
                                </button>
                                <button class="bg-red-300 text-gray-700 text-sm font-thin hover:font-semibold px-2 ml-1 rounded shadow">
                                    <img v-bind:src="imgs.favourites" alt="" class="h-4 w-4 mb-1">
                                </button>
                                <button class="bg-green-500 text-gray-700 text-sm font-thin hover:font-semibold px-2 ml-1 rounded shadow">
                                    <img v-bind:src="imgs.settings" alt="" class="h-4 w-4 mb-1">
                                </button>
                                
                            </div>
                            
                            <div class="console flex lg:flex-row flex-col border border-blue-300 rounded m-2">
                                <div class="work-pad lg:w-3/4 sm:w-full border border-gray-300 m-1">
                                
                                    <section v-if="console.eportal"><Elist /></section> 
                                    <section v-if="console.elistChoose"><elistchoose/></section>
                                    <section v-if="console.projectListPortal"><Projectlist /></section>
                                </div>
                                <div class="work-pad lg:w-1/4 sm:w-full border border-gray-300 m-1">
                                    <messengerPouch />
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>           
            
                </div>
            </div>
        </template>
    </div>`,
    data () {
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
                bSearch: this.$api + '/z3/static/images/svgs/search-white.svg',
                bars: this.$api + '/z3/static/images/svgs/bars-white.svg',
                eye: this.$api + '/z3/static/images/svgs/eye-white.svg',
                action: this.$api + '/z3/static/images/svgs/action-white.svg',
                alert: this.$api + '/z3/static/images/svgs/alert-white.svg',
                calendar: this.$api + '/z3/static/images/svgs/calendar-white.svg',
                camera: this.$api + '/z3/static/images/svgs/camera-white.svg',
                clock: this.$api + '/z3/static/images/svgs/clock-white.svg',
                cloud: this.$api + '/z3/static/images/svgs/cloud-white.svg',
                cloudb: this.$api + '/z3/static/images/svgs/cloud-black.svg',
                favourites: this.$api + '/z3/static/images/svgs/heart-white.svg',
                home: this.$api + '/z3/static/images/svgs/home-white.svg',
                mail: this.$api + '/z3/static/images/svgs/mail-white.svg',
                plus: this.$api + '/z3/static/images/svgs/plus-white.svg',
                project: this.$api + '/z3/static/images/svgs/shop-white.svg',
                settings: this.$api + '/z3/static/images/svgs/gear-white.svg',
                star: this.$api + '/z3/static/images/svgs/star-white.svg',
                tag: this.$api + '/z3/static/images/svgs/tag-white.svg',
                user: this.$api + '/z3/static/images/svgs/user-white.svg',
                
                
            },
            console: {
                eportal: false,
                elistChoose: false,
                projectListPortal: false,
            },
           
        }

    },
    components: {
       
        AuthHeader,
        epaginate,
        Elist,
        elistchoose,
        messengerPouch,
        
        Projectlist
        
    }, 
    mounted () {
            
    },
    methods: {
        async setEmployeesConsole () {
            /* Enshure all other portals are OFF */
            this.console.elistChoose = false; 
            this.console.projectListPortal = false; 
            /* Required portal ON */
            this.console.eportal =  !this.console.eportal;
        },
        async setElistConsole () {
            /* Enshure all other portals are OFF */
            this.console.eportal = false;
            this.console.projectListPortal = false;
            
            /* Required portal ON */
            this.console.elistChoose =  !this.console.elistChoose;
            
        },
        async setProjectlistConsole () {
            /* Enshure all other portals are OFF */
            this.console.eportal = false;
            this.console.elistChoose = false; 
            /* Required portal ON */
            this.console.projectListPortal =  !this.console.projectListPortal;
            
        },
        resetPassword () {
            alert(status[501].resolve);
        },
        startTrial () {
            alert(status[1100].resolve);
        },
        
            
    }
    
});
