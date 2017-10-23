<template>
  <div id="github">
    <ul class="list">
      <li v-for="repo in repos">
        <a :href="repo.url" target="_blank" rel="noopner">
          {{ repo.full_name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GitHub',
  data () {
    return {
      repos: []
    }
  },
  mounted () {
    if (this.repos.length === 0) {
      this.getGithubData()
    }
  },
  methods: {
    getGithubData () {
      let repos = []
      axios.get('https://api.github.com/users/s4kr4/repos', {
        params: {
          sort: 'pushed'
        }
      })
        .then(res => {
          res.data.map(d => {
            repos.push(d)
          })
        })

      this.repos = repos
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
