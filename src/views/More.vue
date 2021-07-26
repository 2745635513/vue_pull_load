<template>
  <div class="container">
    <div class="user-list">
      frace
      <el-button>hello</el-button>
    </div>
    <div class="message-box">
      <Loading :loading="loading">
        <div class="message-list" ref="list" @scroll="handleLoad">
          <div class="message-list-item" v-for="item in list" :key="item.id">
            <p>{{ item.date }}</p>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </Loading>
      <div class="message-input"></div>
    </div>
  </div>
</template>
<script>
import Loading from "../components/Loading.vue";
export default {
  name: "More",
  components: { Loading },
  data() {
    return {
      list: [],
      loading: false,
      page: 1
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    handleLoad(e) {
      if (e.target.scrollTop === 0 && !this.loading) {
        this.load();
      }
    },
    load() {
      const height = this.$refs.list.scrollHeight;
      this.loading = true;
      console.log("-----------");
      const data = [
        {
          id: Math.random()
            .toString()
            .substring(2),
          date: "2021-7-26",
          text: "hi"
        },
        {
          id: Math.random()
            .toString()
            .substring(2),
          date: "2021-7-25",
          text: "出正本和欺骗从【我【从机场那可怜的从ONCO【QNCBCANMNWQNECIO"
        },
        {
          id: Math.random()
            .toString()
            .substring(2),
          date: "2021-7-25",
          text: "从NMC保护大家彼此我去饿慧聪网农村"
        },
        {
          id: Math.random()
            .toString()
            .substring(2),
          date: "2021-7-25",
          text: "出现那种兼顾父亲的破案参加吧宽基础八零"
        },
        {
          id: Math.random()
            .toString()
            .substring(2),
          date: "2021-7-25",
          text: "najcnknca你擦今年擦了擦你爱上了的骄傲楼上的几位大家"
        }
      ];
      setTimeout(() => {
        this.list = data.concat(this.list);
        this.loading = false;
        this.$nextTick(() => {
          const newHeight = this.$refs.list.scrollHeight;
          this.$refs.list.scrollTop = newHeight - height;
        });
      }, 1000);
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  /* align-items: flex-start; */
}
.user-list {
  width: 300px;
}
p {
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.message-list {
  width: 600px;
  height: 300px;
  overflow: auto;
  position: relative;
}
.message-list-item {
  height: 80px;
}
</style>
