<template>
<div class="container mr-5">
    <div>{{ percent }}%</div>
    <div class="loading-bar"></div>
    <div class="percentage pr-5" :style="{'width':seek + '%'}"></div>
</div>

</template>

<script>
export default {
    name: 'PowerProgress',
    data() {
        return{
            title: "Power Scale",
            percentage: 0,
            seek: 0,
        }
    },
     props: ['percentage'],
    computed: {
        percent() {
            return this.seek.toFixed();
        }

    },
    created(){
        var interval = setInterval(() =>{
            if(this.seek < this.percentage)
            this.seek += .25;

        }, 10)
    }

    
}
</script>

<style scoped>
.container {
    text-align: right;
    font-size: 1.5rem;
    color: #555;
     width: 150px;
}
.loading-bar {
  
    width: 100%;
    height: 15px;
    border-radius: 8px;
   
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(225,225,225, .4),
    0 -1px 1px #ffff, 0 1px 0 #fff; 
}
.percentage {
   
   
    display: block;
    height: 15px;
    width: 100%;
    border-radius: 10px;
    background-color: #a5df41;
    background-size: 20px 20px;
    background-image: linear-gradient(135deg,
         rgba(255,255,255, .15) 25% transparent 50%,
        rgba(189, 192, 192, 0.15) 50%,
        rgba(255,255,255, .15) 75%, transparent 75%, transparent);
    animation: animate-stripes 3s linear infinite;  
}
@keyframes animate-stripes {
    0% { background-position: 0 0;}
    100% {  background-position: 60px 0; }
    
}
</style>
