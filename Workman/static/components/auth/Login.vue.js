var bcrypt = dcodeIO.bcrypt;

Vue.component(
    'Login',
     {
    template: `<div>
        <section>
            <div class="ml-10 p-5 bg-gray-300">
            
                <h4>Login</h4>
                <form action="">
                    <label for="username">username</label>
                    <div>
                        <input class="input hover:bg-teal-100 border  border-teal-500 lg:pr-10 rounded" id="userinput" type="text" v-model="userInput" required autofocus>
                    </div>
                    
                    <div v-if="userInput">
                            <label for="password">password</label>
                        
                        <div>
                            <input class="input hover:bg-teal-100 border  border-teal-500 rounded" id="password" type="password" v-model="password" required>
                        </div>
                        <div>
                            <p class="text-xs text-red-500">
                                {{serverMessage}}
                            </p>
                            <p class="text-xs text-green-400">
                        {{acessGrantedMessage}}
                        </p>
                        </div>
                    </div>

                    <div v-if="password">
                        <button class="button bg-blue-500 hover:bg-blue-600 text-gray-100 mt-5 py-3 px-5 rounded" type="submit" @click="hashu">
                            Login
                        </button>
                    </div>
                </form>
                <p class="text-xs text-blue-600 font-normal hover:font-semibold hover:underline cursor-pointer mt-10" @click="resetPassword" v-if="serverMessage">Forgot Password?</p>
                
                
            </div>
        </section>
        <section><Register /></section>
</div>`,
    data () {
            return {
                authUrl: this.$api + "/api/user/", /* Where auth is processed */
                /* The roles Uri switch */
                roleSet: {
                    admin: "admin?auth=", // Roles Admins Auth switch
                    guest: "guest?auth=",// Roles Guests Auth switch
                    user: "user/" // Roles Regular Users Auth switch
                },  
                userInput: null,                  
                username: null,
                password: null,
                email: null,
                serverMessage: "",
                acessGrantedMessage: "",
                authId: "",// This comes from the Local Auth backend
                userId: "",
                accessToken: null,
                timestamp: Date.parse(Date())         

            }
        },
        methods: {
            async processUserInput () {
                if (this.userInput.includes('@')) {
                    this.email = this.userInput;
                    this.accessToken = {}
                }
                else { this.username = this.userInput  }
            },

            async generateUserId () {
                const self = this;
                await self.processUserInput();
                if (self.email)
                self.userId = await genny(self.username, self.username[1]);
            },
            async hashPass (secret) {
                /* returns a hash string of a given word or sentence */
                // check if secret is of a valid length min 3 char
                if (secret.length > 2) {
                    /* hash password with argon2
                    argon2.hash({ pass: secret, salt: 'somesalt' })
                    .then(h => console.log(h.hash, h.hashHex, h.encoded))
                    .catch(e => console.error(e.message, e.code))*/
                    const self = this;
                    var salt = bcrypt.genSaltSync(10);
                    var hash = bcrypt.hashSync(secret, salt);
                    return hash
                    // Store hash in your password DB.
                }
                
            },
            async hashu () {
                var self = this;
                //var usersIndex = TAFFY();
                await this.processUserInput();
                 
                var data = {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    timestamp: this.timestamp}
                //var authedDb = new this.$pouch('authedUser'); // Connect on form submit
                //usersIndex.insert(data)
                //console.log(data.__id)                
                
                //console.log(usersIndex({username:{has:this.username}}));
                await this.resetUserData()

            },
        async resetPassword () {
            alert(status[501].resolve);
        },
        async resetUserData () {
            this.username = null;
            this.password = null;
            this.hashPass = null;
            this.email = null;
        }
            
    }
});





