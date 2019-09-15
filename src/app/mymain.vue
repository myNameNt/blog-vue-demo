<template>
  <el-container class="main">
      <el-aside width='200px' class="main-nav">
        <the-index-nav />
      </el-aside>
      <el-container class="main-space">
        <el-main class="main-content container">
          <div class="scrollContainer">
            <div v-for="(item) in listData" :key="item.id">
              <input type="checkbox" :id='item.id' :value='item.value' v-model="isShow">
            </div>
             <label  for="input_box">{{isShow}}</label>
             <div  v-for="(item) in listData" :key="item.id">
               <input type="radio" :id="item.id+'radio'" :value='item.value' v-model="radio">
               <label :for="item.id+'radio'">{{item.value}}</label>
             </div>
             <div>{{radio}}</div>
             <input type="text" v-model.lazy.number.trim="age" />
             <div>{{age}}</div>
            <!-- <the-index-page-one/>
            <the-index-page-two/>
            <the-index-page-three/> -->
          </div>
        </el-main>
      </el-container>
  </el-container>
</template>
<script>
import TheIndexNav from './common/the-index-nav'
import TheIndexPageOne from './main/components/the-index-page-one'
import TheIndexPageTwo from './main/components/the-index-page-two'
import TheIndexPageThree from './main/components/the-index-page-three'
// import fullpage from '../assets/js/script'
export default {
  data() {
    return {
      listData:[
        {
          value: '猴子',
          id: 'monkey'
        },
        {
          value: '蛇',
          id: 'snake'
        },
        {
          value: '兔子',
          id: 'rabbit'
        },
      ],
      isShow: [],
      radio: null,
      age:0
    }
  },
  mounted () {
    // fullpage 启动
    // fullpage.fullpage()
  },
  components: {
    'the-index-nav': TheIndexNav,
    'the-index-page-one': TheIndexPageOne,
    'the-index-page-two': TheIndexPageTwo,
    'the-index-page-three': TheIndexPageThree
  }
}
</script>
<style lang='scss'>
.main{
  height: 100vh;
  background: url('../assets/img/index-bg.jpg') no-repeat center center;
  background-size: cover;
}
.main-nav{
  background-color: rgba(255, 255, 255, 0.1);
  border-right: 1px solid transparent;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 0px 10px rgba(255,255,255,0.3);
}
.container{
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    overflow: hidden;
    background: transparent;
}
.scrollContainer{
    width: 100%;
    transition: all ease 1s;
}
</style>
