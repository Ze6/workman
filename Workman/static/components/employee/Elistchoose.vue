<template lang="html">

  <section class="elistchoose">
    <div class="flex flex-row">
      <div class="flex flex-row mb-2">
        <button @click="myFunction()" class="dropbtn rounded">  <img v-bind:src="imgs.arrow" alt="" class="h-4 w-4 mb-1 rounded-full"></button>
         <input class="px-2 py-2 rounded-lg border border-gray-300 ml-2 w-full" type="text" placeholder="Search.." id="myInput" @keyup="filterFunction()">
      </div>
      <p class="lg:px-5 px-2 py-2 text-orange-600" v-if="!imgs.arrowFlip">Arrow Activates Search</p>
  </div>
    <p class="error text-red-500  lg:m-4 m-2 p-2" v-if="errorMessage">{{ errorMessage }}</p>
      
    
    <div class="dropdown ">
      
      <div id="myDropdown" class="dropdown-content flex flex-col">
       
        
        <div>
          <a href="employee.eid" class="lg:py-2 py-1 items-center sm:items-inline" v-for="employee of employeesList" :key="employee.eid">
         <div class="card flex bg-white p-2 flex-row mb-2 rounded"> 
	  <img class="rounded-full lg:ml-5 ml-1 mr-2 w-8 h-8" v-bind:src="employee.imgUrl" alt="profile" /> 
           
           <span class="text-teal-600 text-sm lg:text-md font-light ">{{employee.eid}}</span>
           
           <span class="text-gray-600 text-sm font-light lg:ml-5 ml-2">{{employee.name }}</span>
           <span class="text-gray-600 text-xs font-light lg:ml-5 ml-2">{{employee.alias }}</span>
           <span class="text-xs text-gray-600 lg:ml-5 ml-2">{{employee.occupation}}</span>
           <span class="text-xs text-gray-600 lg:ml-5 ml-2 w-40 whitespace-pre">{{employee.address}}</span>
            
        </div>
          </a>
	
      </div>
  </div>
    </div>
  
        
  </section>

</template>

<script lang="js">
  export default  {
    name: 'elistchoose',
    props: [],
    mounted() {
      this.getEmployees();
      this.flip();
    },
    data() {
      return {
        employeeResourceUrl: this.$api + '/api/hr/employees',
        employeesList: [],
	    errorMessage: null,
        
        imgs: {
          arrow: null,
          arrowdown: this.$api + '/z3/static/images/svgs/arrow-d-white.svg',
          arrowup: this.$api + '/z3/static/images/svgs/arrow-u-white.svg',
          arrowFlip: false,
        
        }
         
	

      }
    },
    methods: {
      async getEmployees () {
	  const self = this;
          try {
              
	      let employee;
              const result = await self.$http.get(self.employeeResourceUrl);
              const data = await result.data.employees;
	      
              data.forEach( function (employee) {
		      employee.imgUrl = self.$api + '/z3/static/profile/' + employee.eid + '.png';
		
		      self.employeesList.push(employee)
                 
               });  
	         

          } catch (e) {
              self.errorMessage = e.message;
          }
      },
      async setAge(date) {
	const birtDate = new Date(date),
	      dateDiff = Date.now() - birthDate,
	      ageDelta = new Date(dateDiff);
	return Math.abs(ageDelta.getUTCFullYear() - 1970);
      },
      async setFullName(firstname, lastname) {
	return firstname + ' ' + lastname;
      },
        
    async myFunction() {
        const self = this;
        document.getElementById("myDropdown").classList.toggle("show");
        
        self.imgs.arrowFlip = !self.imgs.arrowFlip;
        self.flip ()
        
        
      },
    async filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        var div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          var txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      },
    async flip () {
      if ( !this.imgs.arrowFlip) { this.imgs.arrow = this.imgs.arrowdown; }
      else { this.imgs.arrow = this.imgs.arrowup; }
      
    
    },
			

    },
    computed: {

    }
}
</script>


<style scoped lang="css">
  .elistchoose {

  }
  /* Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 6px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #3e8e41;
}

/* The search field */
#myInput {
 
  background-image: url('http://192.168.0.17:19000/z3/static/images/svgs/search-black.svg');
  background-position: 190px 12px;
  background-repeat: no-repeat;
  
  
  
  border-bottom: 1px solid #ddd;
}

/* The search field when it gets focus/clicked on */
#myInput:focus {outline: 2px solid #ddd;}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  /*position: relative;
  display: inline-flex;*/
  
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  z-index: 0;
  border: 1px solid #ddd;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  /*display: inline-flex;*/
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
  .show {display: inline-flex;}
</style>
