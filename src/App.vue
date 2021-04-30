<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/units">Units</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "New Tegomin", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 97vh;
}

#nav {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #6f8f8a;
  margin-right: 20px;
  text-decoration: none !important;
}

#nav a.router-link-exact-active {
  color: #0089ba;
}
</style>
