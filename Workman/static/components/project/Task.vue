<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="flex flex-row bg-white">
      <div class="w-1/4">left
      <form action="#" method="post">
        <label for="username">Username</label>
        
        <input type="text" name="username" id="username" v-model="user.username" required autofocus>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" autocomplete="off" v-model="ssl.temppass"><br>
        <input type="button" value="submit" @click="submit">
      </form>
       <p class="bg-gray-500 py-2 px-4 text-grey-700 text-center rounded-top text-lg items-center">Remote Projects</p>
      <ul class="list-reset" >
        <li class="bg-gray-200 text-gray-500 text-md py-2 px-1" v-for="project of projects" :key="project.pid">
          {{project.pid}}
          <span class="ml-2"> {{project.name }}</span>
          
          </li>
      </ul>
     
      </div>
      <div class="w-3/4 items-center tasks-panel">

        <header>Completed Tasks</header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>TYPE</th>
              <th>QTY</th>
              <th>UNIT</th>
              <th>COST</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody v-for="task of tasks" :key="task.tid">

    
              <tr class="border border-gray-600">
                <td>{{ task.tid }} </td>
                <td>{{ task.title }}</td>
                <td><p class="description">{{ task.description }}</p></td>
                <td>Other</td>
                <td>{{ task.mquantity }}</td>
                <td>{{ task.munit }}</td>
                <td>{{ task.mtotal }}</td>
                <td>cost</td>
              </tr>
            </tbody>
          
        </table>
          
       </div>
      
    </div>   
  </div>
</template>

<script>

  const axios = require('axios');

  export default {
    name: 'Tasks',
    data () {

      return {
            
        ssl: {
          decryptedPass: null,
          encKey: null,
          temppass: null
        },
        user: {
            username:null,
            userId: null,
            firstName: null,
            lastName: null,
            authenticated: false,
            admin:false,
            password:null
        },
        projects: [{
                  "pid": "PJ6645",
                  "name": "Jamalcoa MSC Roof Job",
                  "category": "Industrial",
                  "address": "Jamalcoa Plant Operations, Hayes, Clarendon",
                  "start": "2019-07-22T08:01:00",
                  "end": "2019-07-31T04:02:00",
                  "author": 1
                  },
                  {
                  "pid": "PS8856",
                  "name": "Sandringham Sandals",
                  "category": "Residential",
                  "address": "Sandals, White House, Montego bay, St James",
                  "start": "2019-07-17T09:31:00",
                  "end": "2019-12-20T16:32:00",
                  "author": 1
                  },
              ],
        tasks:[{
"slug": null,
"unit": "ft2",
"paused": null,
"is_active": false,
"production": 110,
"restart": null,
"is_paused": false,
"id": 1,
"total": 110,
"completed": "2019-08-14T15:16:00",
"title": "4mm unsanded Bituminous membrane",
"is_expired": false,
"quantity": 2000,
"completion": "2019-08-29T15:17:00",
"is_completed": true,
"tid": "TB83905",
"munit": "m2",
"terminated": null,
"category": "Rooofing",
"is_terminated": false,
"mproduction": 11,
"author_id": null,
"description": "4mm unsanded Bituminous membrane",
"created": "2019-08-01T17:10:49",
"mtotal": 11,
"output": 185,
"start": "2019-08-05T15:16:00",
"mquantity": 200
},
{
"slug": null,
"unit": "ft2",
"paused": null,
"is_active": false,
"production": 53.45,
"restart": null,
"is_paused": false,
"id": 2,
"total": 54,
"completed": "2019-07-25T16:44:00",
"title": "Temporary Barriers and Enclosures",
"is_expired": false,
"quantity": 2250,
"completion": "2019-07-22T16:45:00",
"is_completed": true,
"tid": "TT87228",
"munit": "m2",
"terminated": null,
"category": "Preliminaries",
"is_terminated": false,
"mproduction": 542,
"author_id": null,
"description": "Relocation and Repairs of hoarding",
"created": "2019-09-04T18:35:57",
"mtotal": 540,
"output": 320,
"start": "2019-07-17T10:10:00",
"mquantity": 221
},
{
"slug": null,
"unit": "FT3",
"paused": "2019-06-20T13:15:00",
"is_active": false,
"production": null,
"restart": "2019-06-22T10:00:00",
"is_paused": false,
"id": 3,
"total": null,
"completed": "2019-06-27T06:30:00",
"title": "Marl Pad Backfill",
"is_expired": false,
"quantity": null,
"completion": "2019-06-24T16:30:00",
"is_completed": true,
"tid": "TM39409",
"munit": "m3",
"terminated": null,
"category": "Excavations",
"is_terminated": false,
"mproduction": 3000,
"author_id": null,
"description": "Carry-backfill spread and compact marl ",
"created": "2019-09-04T23:05:08",
"mtotal": 3000,
"output": 6,
"start": "2019-06-18T09:00:00",
"mquantity": 62
},
{
"slug": null,
"unit": "ft3",
"paused": "2019-06-20T13:35:00",
"is_active": false,
"production": 180,
"restart": "2019-06-23T10:35:00",
"is_paused": false,
"id": 4,
"total": 185,
"completed": "2019-06-24T16:33:00",
"title": "Excavation demolition clearing",
"is_expired": false,
"quantity": 400,
"completion": "2019-06-21T16:34:00",
"is_completed": true,
"tid": "TE6882",
"munit": "m3",
"terminated": null,
"category": "Excavations",
"is_terminated": false,
"mproduction": 2000,
"author_id": null,
"description": "Excavation into sand, and or Earth to include demolition of existing wall footings, pavements and column pad. Also cart away excavated materials.",
"created": "2019-09-04T23:25:41",
"mtotal": 2000,
"output": 120,
"start": "2019-06-17T11:32:00",
"mquantity": 35
},
{
"slug": null,
"unit": "ft2",
"paused": null,
"is_active": false,
"production": 50,
"restart": null,
"is_paused": false,
"id": 5,
"total": 50,
"completed": "2019-07-24T17:30:00",
"title": "1200x1200x50 Rigid Insulation",
"is_expired": false,
"quantity": 2000,
"completion": "2019-08-07T09:44:00",
"is_completed": true,
"tid": "TR62147",
"munit": "m2",
"terminated": null,
"category": "Roofing",
"is_terminated": false,
"mproduction": 539.3,
"author_id": null,
"description": "To install 1200 x 1200 x 50 Rigid Insulation to naked Roof Slab : include  to secure to roof deck by down with 80mm concrete screws or supplied anchors $ washers ",
"created": "2019-09-11T09:41:48",
"mtotal": 540,
"output": 300,
"start": "2019-07-17T08:48:00",
"mquantity": 185.42
},
{
"slug": null,
"unit": "ft2",
"paused": null,
"is_active": false,
"production": 110,
"restart": null,
"is_paused": false,
"id": 6,
"total": 110,
"completed": "2019-08-14T16:56:00",
"title": "4mm sanded Bituminous membrane",
"is_expired": false,
"quantity": 2000,
"completion": null,
"is_completed": true,
"tid": null,
"munit": "m2",
"terminated": null,
"category": "Rooofing",
"is_terminated": false,
"mproduction": 1186.46,
"author_id": null,
"description": "To Heat and apply final 4mm sanded Bituminous membrane to unsanded layer",
"created": "2019-09-11T09:51:29",
"mtotal": 1186,
"output": 185,
"start": "2019-08-08T09:56:00",
"mquantity": 185.42
}]      

      }

    },
    methods: {
      submit () {
        alert('working');
      },
      getUser () {
        alert('getting');

      },
      async getRemoteProjects() {
            const self = this;
            try {
                
                const uri = `${this.$api}/api/resource/projects`
               await axios.get(uri)
                .then(res => {
                    //console.log(res) 
                    self.projects.push(res.data);    

                })
                .catch(error => {
                console.log(error);
                });                  
                    
                
            } catch (err) {
                self.projectTasks.push(err);
                console.log(err);
            }
        
        },
        
    },
    props: {
      msg: String
    },
    mounted () {
      /*this.getRemoteProjects();*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h3 {
  @apply text-lg;
}

a {
  color: #42b983;
}
th {
  @apply bg-gray-700 text-gray-200 text-xs tracking-tight;
}

.description, td {
  @apply text-xs text-gray-700 leading-tight;
}

</style>
