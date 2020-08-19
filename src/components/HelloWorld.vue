<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="reduce">reduce</button>
    {{count}}
    <button @click="addCount">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useStore, Store } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup () {
    const { dispatch, state, commit } = useStore() as StoreInit.Store
    const { count } = toRefs(state)
    const addCount = () => {
      dispatch('addCountPlay')
    }
    const reduce = () => {
      commit('reduceCount')
    }
    return {
      count,
      addCount,
      reduce
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
