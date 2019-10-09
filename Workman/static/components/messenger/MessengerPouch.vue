<template lang="html">

  <section class="messenger">

        
    <div class="flex flex-row text-sm p-2 text-blue-400">
      <div>
        <h1>Messages</h1>
      </div>
      <div class="ml-auto">
         <button class="bg-green-500 py-1 px-1 ml-2 rounded-lg" @click="newMessage = !newMessage">
        <img class="w-4 h-4 " v-bind:src="imgs.comment" />
        </button>
         <button class="bg-blue-600 py-1 px-1 ml-2 rounded-lg" @click="showMessages = !showMessages">
        <img class="w-4 h-4 " v-bind:src="imgs.comment" />
        </button>
        
        <button>
        <span class="bg-green-400 text-xs text-white rounded-full p-1 ml-5">{{amtMessage()}}</span></button>
      </div>  
      
          </div>
    <hr>
    <p class="text-xs text-teal-500" v-if="resolve"> {{ resolve }}</p>
     <p class="text-xs text-red-500" v-if="eresolve"> {{ eresolve }}</p>
    <div class="flex flex-col items-center p-2 m-2" v-if="newMessage">      
       
        <input class="border ml-2 mr-5  mb-2 px-1 w-full border-blue-300 rounded" placeholder="To..." v-model="message.recipient"/>
      
      <textarea class="border ml-2 mr-5 px-1 w-full border-blue-300 rounded" rows="5" cols="50" placeholder="Message..." v-model="message.payload"/>
      <button class="bg-green-400 text-xs text-white px-2 py-1 m-2 rounded-full" @click="sendMessage">Send</button>
      
    </div>
     <div class="flex flex-col items-center p-2 m-2" v-if="replyMessage">      
       <p>To {{message.recipient}}{{message.mid}}</p>
        <input class="border ml-2 mr-5  mb-2 px-1 w-full border-blue-300 rounded" placeholder="Reply To..." value="message.sender" v-model="message.sender"/>
      
      <textarea class="border ml-2 mr-5 px-1 w-full border-blue-300 rounded" rows="5" cols="50" placeholder="Message..." v-model="message.payload"/>
      <button class="bg-green-400 text-xs text-white px-2 py-1 m-2 rounded-full" @click="sendMessage">Send</button>
      
    </div>
   
    
    <div v-if="showMessages">
    <div class="mt-1 mb-1" >
    <button class="bg-blue-600 py-1 px-2 ml-2 rounded-full" @click="prevPage" :disabled="page.pageNumber==0">
           <img class="w-4 h-3 rounded-full" v-bind:src="imgs.arrowleft"  />
        </button>
        <button class="bg-blue-600 py-1 px-2 ml-2 rounded-full" @click="nextPage" :disabled="page.pageNumber >= pageCount -1">
           <img class="w-4 h-3 rounded-full" v-bind:src="imgs.arrowright" />
        </button>
      </div>  
    
   
    <ul class="listreset">
      <li class="p-2 border-b" v-for="message of paginatedData()" :key="message.mid">
        
        <div class="card bg-white m-1 p-2 border rounded">
          <div class="flex flex-row">
            
            <div class="flex flex-row">
              <img class="rounded-full w-8 h-8 sprofile" v-bind:src="message.senderProfile" />
                <div class="flex flex-row ml-5">
                <span class="text-xs text-teal-400">
                  {{message.timeStamp}}
                  
                </span>  
              </div>        
            </div>
             
  
          </div>
          <p class="text-xs text-gray-700 pt-2">
            {{message.payload}} 
          </p>  
           <hr>
          <span class="text-xs text-blue-500">{{ message.mid }} </span>  
          <tooltip tooltext="This message was read and replied to." button="R" v-if="message.flag"></tooltip>
          
          <div class="flex flex-row text-xs text-gray-600 p-2">
            <input id="read" type="checkbox" class="border border-gray-500 mt-1 mr-1 cursor-pointer"/>
            <label for="read">read</label>
            
            <button class="bg-gray-400 hover:bg-green-500 rounded px-1 ml-2 mr-2" @click="replyTo(message.mid)">              
               <img class="w-4 h-3 rounded-full" v-bind:src="imgs.back" />
            </button>
            
            <button class="bg-gray-500 hover:bg-yellow-400 rounded px-1 mr-2" @click="archiveMessage(message.mid)"> <img class="w-4 h-3 rounded-full" v-bind:src="imgs.star" /></button>
            
             <button class="bg-gray-400 hover:bg-red-500 rounded px-1 mr-2" v-if="message.replies"> <img class="w-4 h-3 rounded-full" v-bind:src="imgs.delete" /></button>
            
            <button class="bg-blue-500 rounded px-1 mr-2" v-if="message.refference.to">
               <img class="w-4 h-3 rounded-full" v-bind:src="imgs.action" /></button>
            
             <button class="bg-gray-400 hover:bg-red-500 rounded px-1 mr-2" @click="deleteMessage(message.mid)"> <img class="w-4 h-3 rounded-full" v-bind:src="imgs.delete" /></button>
          </div>
      </div>
        
      </li>
  
  </ul>
    <div class="mt-1 mb-1" v-if="paginatedData().length > 0">
    <button class="bg-blue-600 py-1 px-2 ml-2 rounded-full" @click="prevPage">
           <img class="w-4 h-3 rounded-full" v-bind:src="imgs.arrowleft" />
        </button>
        <button class="bg-blue-600 py-1 px-2 ml-2 rounded-full" @click="nextPage">
           <img class="w-4 h-3 rounded-full" v-bind:src="imgs.arrowright" />
        </button>
      </div>
     
  </div> 
     
  </section>

</template>

<script lang="js">
  
  import genny from '@/resource';  
  
  import status from '@/statusCode';
  import tooltip from '@/components/widgets/toolTip.vue';
  
  //import imgs from '@/images'; 
  const md5 = require('js-md5');
  const path = require('path');
  
  //const filepath = path.basename('/datastore/messages.db'); 
  //const mdb = new Datastore({filename: filepath, autoload: true}); 
  
  export default  {
    name: 'messengerPouch',
    props: {},
    components: {
      tooltip
    },
    mounted() {
      this.RemoteMessageSync ();
      this.loadMessages ();          
      

    },
    data() {
      return {
        size:4,
        sessionUser: localStorage.getItem('sessionUser'),
        sessionUserId: localStorage.getItem('sessionUserId'),
        numMessages: null,
        messages : [],
        allMessages: [],
        userMessages : [],
        showMessages: false,
        newMessage: false,
        replyMessage: false,
        resolve: null,
        eresolve: null,
        
        message: {
          mid: genny('M', 'M'),
          sender: null,
          recipient: null,
          payload: null,
          timeStamp: Date.parse(Date()),
          flag: null,
          refference: {
            to: null,
            tag: null,
            timeStamp:null            
          },
          replies: []
        },          
        
        
        imgs: {
                action: this.$api + '/z3/static/images/svgs/action-white.svg',
                alert: this.$api + '/z3/static/images/svgs/alert-white.svg',
                arrowdown: this.$api + '/z3/static/images/svgs/arrow-d-white.svg',
                arrowleft: this.$api + '/z3/static/images/svgs/arrow-l-white.svg',
                arrowright: this.$api + '/z3/static/images/svgs/arrow-r-white.svg',  
                
                
                bars: this.$api + '/z3/static/images/svgs/bars-white.svg',
                back: this.$api + '/z3/static/images/svgs/back-white.svg',
                bSearch: this.$api + '/z3/static/images/svgs/search-white.svg',
               
                calendar: this.$api + '/z3/static/images/svgs/calendar-white.svg',
                camera: this.$api + '/z3/static/images/svgs/camera-white.svg',
                clock: this.$api + '/z3/static/images/svgs/clock-white.svg',
                cloud: this.$api + '/z3/static/images/svgs/cloud-white.svg',
                comment: this.$api + '/z3/static/images/svgs/comment-white.svg',
                commentb: this.$api + '/z3/static/images/svgs/comment-black.svg',
                delete: this.$api + '/z3/static/images/svgs/delete-white.svg', 
                eye: this.$api + '/z3/static/images/svgs/eye-white.svg',    
                home: this.$api + '/z3/static/images/svgs/home-white.svg',
                mail: this.$api + '/z3/static/images/svgs/mail-white.svg',
                plus: this.$api + '/z3/static/images/svgs/plus-white.svg',
                project: this.$api + '/z3/static/images/svgs/shop-white.svg',
                star: this.$api + '/z3/static/images/svgs/star-white.svg',
                tag: this.$api + '/z3/static/images/svgs/tag-white.svg',
                tech: this.$api + '/z3/static/images/tech.png',
                user: this.$api + '/z3/static/images/svgs/user-white.svg',
                
                
        },
        page: {
          pageNumber: 0,  // default to page 0
          size:{
            type:Number,
            required:false,
            default: 6
          }
        }
      }
    },
    methods: {
        
      async loadMessages () {
        const self = this;
        const mpdb = this.$pouch('messages'); 
        
        mpdb.allDocs({
          include_docs: true
          
        }).then(result => {
          var docs = result.rows.map(row => {
            return row.doc;
          });
          //console.log(docs)
          docs.forEach( function (message){
            if(message.recipient === self.sessionUserId) {
            message.senderProfile = self.$api + '/z3/static/profile/' + message.sender + '.png';
            message.timeStamp = new Date(message.timeStamp);
            
            self.userMessages.push(message); 
            
            self.resolve = 'Your Messages have been uploaded';
          }  
             self.userMessages = self.userMessages.slice().reverse();      
          })
          //console.log(self.allMessages)
         
          }).catch(function (err) {
              self.eresolve = err;
          });
         
      },
      
     
      async sendMessage (e) {
        e.preventDefault() 
        const self = this;
        const mpdb = this.$pouch('messages'); 
        //const remoteMpdb = this.$remotePouch('messages');
                      
        self.message.sender = self.sessionUserId;
        self.message._id = self.message.mid;
        // Save on client
        mpdb.put(self.message)
        self.resolve = 'Saved ' + self.message.mid; 
        // Archive on server
                         
        const nomessage = {
          mid: null,
          sender: null,
          recpient: null,
          payload: null,
          refference: {
            to: null,
            tag: null,
            timeStamp:null            
          }
        }; 
        
        self.message = nomessage;  
                     
      },
        
      resetMessage () {
        // Reset message 
        const nomessage = {
          mid: null,
          sender: null,
          recpient: null,
          payload: null,
          refference: {
            to: null,
            tag: null,
            timeStamp:null            
          }
        }; 
        
        self.message = nomessage;        
      },
      
      async markRead (message) {},
        
      async deleteMessage (message) {
          const self = this;
          const mpdb = this.$pouch('messages'); 
        
          mpdb.get(message).then(function (doc) {
            return mpdb.remove(doc);
          });
          self.resolve = null;
          self.eresolve = `Deleted ${message}`;
      },
        
      
      async archiveMessage (message) {
        const self = this;
        var apiRequest = ( 'mid=' + message.mid + '?recipient=' + message.recipient
                            + '&sender=' + message.sender + '&payload=' + message.payload
                          + '&timestamp=' + new Date(message.timeStamp) );
         
       
         try {
            const response = await self.$http.get(
              self.$api + '/api/messenger/newmessage/' + apiRequest
              )         
            console.log(response);
            self.resolve = 'Your message has been Archived';
           
          } catch (error) {
            self.eresolve = error;
          } 
            //console.log(apiRequest);
            
      },
        
      async replyTo (message) {
        const self = this 
        const mpdb = this.$pouch('messages'); 
        
        
        // GET message from mdb
        mpdb.get(message).then( function(doc){
          //prepare reply 
          self.message.to = doc.from;
          self.message.refference.to = message;
          self.message.refference.type = 'reply';
          self.message.refference.timeStamp = new Date();
           // open reply ui
          self.replyMessage = !self.replyMessage;
          self.newMessage = false;
          doc.replies.push(self.message.id);
          doc.flag = 'replied';
          return mpdb.put(doc);
          }).then ( function () {
            self.resolve = 'Updated ' + numReplaced + ' message(s)';
            return mpdb.get(message);
          }).then ( function (doc) {
          console.log('returned', doc);
          
        
          });
          
      },
      
            
      amtMessage () {
        return this.userMessages.length
      },
      nextPage(){
        
         this.page.pageNumber++;
      },
      prevPage(){
        this.page.pageNumber--;
      },
      pageCount(){
          const self = this,
                s = self.size;
          let l = self.userMessages.length;             
              return Math.ceil(l/s);
      },
      resetPage(){
         this.size = 5;
      },
      paginatedData(){
        const self = this;
        const start = self.page.pageNumber * self.size,
              end = start + self.size;
              return self.userMessages.slice(start, end);
      },
      /******************* Data Sync **********************/
        
      async RemoteMessageSync () {
        //syncDom.setAttribute('data-sync-state', 'syncing');
        const self = this;
        const mpdb = this.$pouch('messages'); 
        const rms = 'http://ian:29092@192.168.0.15:5984/messages';
        
        var opts = { live: true, retry: true };
        
        mpdb.sync(rms, opts)
            
      },
      onSyncChange () {
        this.resolve = 'Data has changed refresh user interface...';

      },
      onSyncError () {
        this.resolve = 'Sync error...';

      },
      onSyncPaused () {
        this.resolve = 'Replication up to date. User went offline...';
      }
    
    },
    
    computed: {  
      

    }
}
</script>

<style scoped lang="css">
 
  .sprofile:hover {
      transform: scale(1.8); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: teal;
  opacity: .5; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: blue
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: blue;
}
  
  
</style>
