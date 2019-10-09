<template>
<div class="tooltip">
  <p class="text-xs text-teal-500 ml-3">{{ button }}</p>
  <span class="tooltiptext">{{tooltext}}</span>
</div>

</template>
<script>
export default {
  name: 'tooltip',
 
   props: ['tooltext','button'],
  
}
</script>


<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 1.102s;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>