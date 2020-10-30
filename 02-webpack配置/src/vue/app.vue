<!--  -->
<template>
  <!-- <div>
    <h1>{{ message }}</h1>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <cpm />
  </div> -->

  <div class="game">
    <!-- <h2>打地鼠游戏</h2> -->
    <!-- <div class="wraper">
      <div class="item" v-for="n in TOTAL" :key="n">
        <div :style="{'visibility': random === n ? 'visible' : 'hidden'}" @click="clickItem">{{n}}号地鼠</div>
      </div>
    </div> -->
    <div class="scoped">
      <div class="set">
        <!-- <p>设置参数</p>
        <p>
          速度： <input type="number" v-model="setSpeed">
        </p>
        <p>
          总数：<input type="number" v-model="setNum">
        </p> -->
        <p>
          <button @click="clickItem">开始</button>
        </p>
      </div>
      <!-- <div class="count set">
        <h3>统计分数面板</h3>
        <h3>总数： {{TOTAL}}</h3>
        <h3>击中： {{clickNum}}</h3>
        <h3>击中率： {{level}}%</h3>
      </div> -->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import cpm from "./Cpm";
import {Decrypt} from './app.js'


export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // cpm,
  },
  data() {
    //这里存放数据
    return {
      // message: "hello webpack! => hahahaha =======.woqu ",
      // name: "code-Demo",
      clickFlag: true, // 单个地鼠只能点击一次
      setNum: 40, // 绑定设置地洞数量
      setSpeed: 1000, // 绑定设置地鼠出现速度
      speed: 2000, // 地鼠出现速度
      random: "", // 随机出现的地鼠位置
      TOTAL: 40, // 地鼠总数
      count: 0, // 统计总共出现了多少次地鼠同于判断不能大于总数
      clickNum: 0, // 点中地鼠统计
      timmerId: null,
    };
  },
  //监听属性 类似于data概念
  computed: {
    // // 统计打中的地鼠数量
    // level: function () {
    //   let num = ((this.clickNum / this.TOTAL) * 100).toFixed(2) || 0;
    //   return num;
    // }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    clickItem() {
      console.log("点击按钮");
      Decrypt();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
/* @import url(); 引入公共css类 */
/* div {
  color: aqua;
} */
.game {
  border: 1px solid #ccc;
  width: 1200px;
  padding: 10px;
  user-select: none;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  h2 {
    font-size: 16px;
    color: #eee;
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  .wraper {
    width: 900px;
    float: left;
  }
  .scoped {
    width: 260px;
    height: 540px;
    float: left;
    padding-left: 15px;
    border-left: 1px solid #ccc;
    h3 {
      font-size: 16px;
      color: #fff;
    }
    .set {
      height: 200px;
      width: 100%;
      border: 1px solid #ccc;
      p {
        padding: 10px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        button {
          width: 90%;
        }
      }
    }
    .count {
      .set;
      margin-top: 20px;
      padding-top: 25px;
      text-align: center;
      line-height: 40px;
      h3 {
        font-weight: normal;
      }
    }
  }
  .item {
    display: inline-block;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    border: 1px solid #ccc;
    div {
      height: 100%;
      background: #eee;
      border-radius: 50px;
    }
  }
}
</style>