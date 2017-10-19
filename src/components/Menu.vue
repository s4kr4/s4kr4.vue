<template>
  <div class="menu">
    <ul>
      <li><router-link :to="{ name: 'GitHub' }">GitHub</router-link></li>
      <li><router-link :to="{ name: 'Qiita' }">Qiita</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style scoped>
li {
  list-style: none;
  font-size: 1.5em;
}

a {
  color: #a00;
  text-decoration: none;
}
</style>
