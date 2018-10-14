<!-- vuex Demo -->
<template>
  <div>
    {{count}}--{{evenOrOdd}}
    <button @click="INCREMENT">增加</button>
    <button @click="DECREMENT">减少</button>
    <button @click="INCREMENTIFODD">如果是奇数就增加</button>
    <button @click="incrementAsyc">异步增加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  components: {},

  data () {
    return {
    }
  },

  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT', 'INCREMENTIFODD']),
    ...mapActions(['incrementAsyc'])
  },

  watch: {},

  created () {},

  mounted: {},

  destroyed () {}

}

</script>

<style lang="scss" scoped>

</style>
