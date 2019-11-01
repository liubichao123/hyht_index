<template>
  <div id="index">
    <div class="nav">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/collection/logo.png" alt="">
        </router-link>
      </div>
      <div class="aside">
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="transparent" text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <span slot="title">
              <router-link to="/"><img src="../assets/collection/01.png" alt=""></router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/index1" tag="span" slot="title"><img src="../assets/collection/02.png" alt="">
            </router-link>
            <!-- <span slot="title"><img src="../assets/collection/02.png" alt=""></span> -->
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/index2" tag="span" slot="title"><img src="../assets/collection/03.png" alt="">
            </router-link>
            <!-- <span slot="title"><img src="../assets/collection/03.png" alt=""></span> -->
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/index3" tag="span" slot="title"><img src="../assets/collection/04.png" alt="">
            </router-link>
            <!-- <span slot="title"><img src="../assets/collection/04.png" alt=""></span> -->
          </el-menu-item>
        </el-menu>
        <ul class="bottom-menu">
          <router-link to="/index4" tag="li"><img src="../assets/collection/05.png" alt=""></router-link>
          <router-link to="/index5" tag="li"><img src="../assets/collection/06.png" alt=""></router-link>
          <router-link to="/index6" tag="li"><img src="../assets/collection/07.png" alt=""></router-link>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<style lang="less" scoped>
#index {
  width: 100%;
  height: 100%;
  min-width:1200px;
  box-sizing: border-box;
  display: flex;
  .nav {
    height: 100%;
    width: 3%;
    min-width: 40px;
    box-shadow: -5px 0px 10px #7ecee5 inset;
    background-color: #b8e3ef;
    position: relative;
    z-index: 1;
    .logo {
      height: 10%;
      display: flex;
      flex-direction: row; /*这里可以不写，flex布局默认方向横向即row*/
      align-items: center;
      justify-content: center;
      a {
        text-align: center;
        img {
          width: 60%;
        }
      }
    }
    .aside {
      width: 100%;
      .el-menu {
        padding: 0;
        width: 100%;
        border-right: 0px solid #d1d1d1;
        .el-menu-item {
          padding: 0 !important;
          text-align: center;
          height: 3%;
          line-height: 0;
          width: 100%;
          margin-top: 36px;
          margin-bottom: 14px;
          img {
            width: 60%;
          }
        }
        .el-menu-item.is-active {
          box-shadow: 3px 0px 0px 0px #000000 inset;
        }
        .el-menu-item:hover {
          background-color: transparent !important;
        }
      }
      .bottom-menu {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        li {
          padding-bottom: 38px;
          img {
            width: 50%;
          }
        }
      }
    }
  }
  .content {
    height: 100%;
    width: 97%;
    min-width: 980px;
  }
}
</style>
<script>
export default {
  methods: {
  }
}
</script>
