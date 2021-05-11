<template>
  <div id="app">
    <keep-alive :include="keepAliveInclude">
      <router-view class="router-view" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    keepAliveInclude: () => [], // 增加做keep-alive的页面，需对应该页面组件的name一致
  }
}
</script>

<style lang="scss">
.router-view {
  display: flex;
  // min-height: 100vh;
}
</style>
