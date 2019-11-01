<template>
  <div class="caiji">
    <div id="nav" :style="isCollapse ? 'width: 2%' : 'width: 12%'">
      <div class="title" :style="isCollapse? 'border-bottom:none':'1px solid #d1d1d1'">
        <span v-if="!isCollapse">集成中心</span>
      </div>
      <i class="arrow" :class="isCollapse ? 'el-icon-arrow-right' :'el-icon-arrow-left'"
        @click="isCollapse=!isCollapse"></i>
      <el-menu v-if="!isCollapse" default-active="/" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false" :router="true" @select="handleSelect">
        <el-menu-item index="/">
          <i><img src="../../assets/collection/08.png" alt=""></i>
          <span>采集规则</span>
        </el-menu-item>
        <el-menu-item index="visit">
          <i><img src="../../assets/collection/09.png" alt=""></i>
          <span>访问凭证</span>
        </el-menu-item>
        <el-menu-item index="integrate">
          <i><img src="../../assets/collection/10.png" alt=""></i>
          <span>集成类型</span>
        </el-menu-item>
        <el-menu-item index="dashboard">
          <i><img src="../../assets/collection/11.png" alt=""></i>
          <span>仪表盘</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="container" id="container" :style="isCollapse ? 'width:98%' : 'width:88%;'">
      <router-view :msg="isCollapse" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      console.log(keyPath)
    }
  },
  watch: {
  }
}
</script>
<style lang="less" scoped>
.caiji {
  height: 100%;
  width: 100%;
  display: flex;
  #nav {
    position: relative;
    height: 100%;
    border-right: 1px solid #d1d1d1;
    background-color: #f2f3f6;
    z-index: 1;
  }
  #container {
    height: 100%;
    min-width: 950px !important;
  }
  i.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -12.5px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #b4b6be;
    z-index: 1;
  }
  .title {
    height: 10%;
    padding-left: 30px;
    display: flex;
    flex-direction: row; /*这里可以不写，flex布局默认方向横向即row*/
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    border-bottom: 1px solid #d1d1d1;
    color: #333333;
  }
  .el-menu {
    background-color: rgba(0, 0, 0, 0);
    border-right: none;
    width: 100%;
    margin-top: 15%;
    overflow: hidden;
    .el-menu-item {
      width: 90%;
      margin-left: 4%;
      height: 40px;
      line-height: 40px;
      margin-bottom: 10px;
      i {
        padding-right: 11px;
      }
    }
    .is-active {
      background-color: #fff;
      padding: 0 10px;
    }
  }
}
</style>
