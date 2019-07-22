<template>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}
      </router-link>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'Categories',
          page:'/Categories'
        },
        {
          id: 2,
          text: 'Random',
          page:'/Random'
        }
      ]
    }
  }
}
</script>

<style>
.spacing { 
    margin-left: 20px; 
    margin-right: 20px;
} 

nav {
  height: 50px;
  width: 100%;
  font-size: 25px;
  text-align: center;
  background-color: rgb(77, 77, 77);
  padding-top: 20px;
  /* position: fixed; */
}

a {
   text-decoration: none;
   color: black;
}

a:visited {
  color: black;
}

a:hover {
    color: #bcc4dd;
}
</style>
