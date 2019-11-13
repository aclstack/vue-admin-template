<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">count: {{count}}</div>
    <el-button type="primary" @click="handleIncrement">+1</el-button>
    <el-button type="danger" @click="handleDecrease">-1</el-button>
    <p>{{list}}</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ]),
    count() {
      return this.$store.state.count
    },
    // eslint-disable-next-line vue/return-in-computed-property
    list() {
      // return this.$store.state.list.filter(item => item < 10)
      return this.$store.getters.filterList
    }
  },
  methods: {
    handleIncrement() {
      // this.$store.commit('increment', 100)
      this.$store.dispatch('increment')
    },
    handleDecrease() {
      this.$store.commit({
        type: 'decrease',
        count: 3
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
