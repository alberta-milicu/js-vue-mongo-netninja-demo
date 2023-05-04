<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>
   
<script>
   export default {
     data() {
       return {
         copyright: 'Copyright 2023 Friendify'
       }
     }
   }
</script>
   
<style scoped>
 
 footer{
    background: rgb(125, 40, 9);
    padding: 6px;
}

p{
    color: rgb(255, 229, 220);
    text-align: center;
}

</style>
   