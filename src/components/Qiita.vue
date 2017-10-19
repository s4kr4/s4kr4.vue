<template>
  <div id="qiita">
    <ul class="list">
      <li v-for="item in items">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Qiita',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    if (this.items.length === 0) {
      this.getQiitaData()
    }
  },
  methods: {
    getQiitaData () {
      let items = []
      axios.get('https://qiita.com/api/v2/users/s4kr4/items')
        .then(res => {
          res.data.map(d => {
            items.push(d)
          })
        })

      this.items = items
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
