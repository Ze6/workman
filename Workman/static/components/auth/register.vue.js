Vue.component('Register', {
    template: `<div>
    <template class="registration">
        <section>
            <div class="dashboard bg-blue-100">
                <p class="lg:pt-10 sm:pt-1">
                    <span class="text-purple-600 text-lg font-bold px-2 py-2 ml-10 mr-4">Workman</span>
                    <span class="text-gray-600 text-md font-semibold"> Trial Account Registration</span>
                </p>
            </div>            
        </section>
        <section>
        <form action="">
                    <label for="username">username</label>
                    <div>
                        <input class="input hover:bg-teal-100 border  border-teal-500 lg:pr-10 rounded" id="username" type="text" v-model="user.username" required autofocus>
                    </div>
                    <div v-if="user.username">
                            <label for="email">Email</label>
                        
                        
                            <input class="input hover:bg-teal-100 border  border-teal-500 rounded" id="email" type="text" v-model="user.email" required>
                        </div>

                        
                    
                    <div v-if="user.username">
                            <label for="password">password</label>
                        
                        <div>
                            <input class="input hover:bg-teal-100 border  border-teal-500 rounded" id="tempass" type="password" v-model="tempass" required>
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

                    <div v-if="tempass">
                        <button class="button bg-blue-500 hover:bg-blue-600 text-gray-100 mt-5 py-3 px-5 rounded" type="submit" @click="generateHashId">
                            Register
                        </button>
                    </div>
                </form>
                <p class="text-xs text-blue-600 font-normal hover:font-semibold hover:underline cursor-pointer mt-10" @click="resetPassword" v-if="serverMessage">Forgot Password?</p>
                
        </section></template></div>`,

    data () {
        return {
            serverMessage: null,
            acessGrantedMessage: null,
            tempass: null,
            user: {
                _id: null,
                uid: null,
                username: null,
                passhash: null,
                email: null
                }
        }
    },
    methods: {
        
        async generateUserId () {
            const self = this;
        
            if (self.user.username)
            self.user.uid = await genny(self.user.username, self.user.username[1]);
        },
        async generateHashId(){
            const self = this;
            if (self.tempass) {
                self.user._id = objectHash.sha1({
                    user: self.user.username,
                    password: self.tempass
                });
                console.log('hashed id',self.user._id )
            }

        },
        async hashPass () {
            const self = this;
            /* returns a hash string of a given word or sentence */
            // check if secret is of a valid length min 3 char
            if (self.tempass.length > 2) {
                await this.generateHashId();
                
                var salt = bcrypt.genSaltSync(10);
                self.user.passhash = bcrypt.hashSync(self.tempass, salt);
                console.log('before',self.tempass);
                self.tempass = null;
                console.log(self.user.passhash);
                console.log('after',self.tempass);
                // Store hash in your password DB.
            }
            
        },
        async registerUser () {
            const self = this;            
            if(this.username || this.password){
                // check if the username already exist
                let userRegistrationData = {
                    _id: genny(self.username,self.username[1]),
                    username: self.username,
                    passWordHash: self.passhash,
                    email: self.email,
                    timeStamp: Date.parse(Date())
                }
            }else {
                // return user from database 
                console.log('invalid credentials!')
            }
                }
    }
});