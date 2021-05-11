<template>
  <div class="demo">
    <div class="btn" @click="btn">1u165176567756</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#ccc'
    }
  },
  methods: {
    btn() {
      this.$native.getUserInfo({ a: 1 }).then((res) => {
        console.log('res', res)
      })
    },
  }
};

</script>

<style lang="scss" scoped>
.demo {
  font-size: 12px;
  padding: 10px;
}
.btn {
  border: 1px solid #e5e5e5;
  font-size: 20px;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
}
</style>
