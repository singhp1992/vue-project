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

 nav {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0;           /* top left corner should start at leftmost spot */
  top: 0;            /* top left corner should start at topmost spot */
  width: 100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
  height: 50px;     /* define height for content */
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
