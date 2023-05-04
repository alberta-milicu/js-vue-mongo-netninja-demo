<template>
   <header>
    <h1>{{ title }}</h1>
   </header>
</template>
  
<script>
  export default {
    data() {
      return {
        title: 'Friendify'
      }
    }
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Sofia');

header{
    background: rgb(248, 100, 46);
    padding: 10px;
}

h1{
    color: rgb(255, 229, 220);
    text-align: center;
    font-family: 'Sofia';
    font-size: 50px;
}

</style>
  