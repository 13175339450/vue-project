<script setup lang="ts">
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/">居家</router-link>
        </li>
        <li>
          <router-link to="/">美食</router-link>
        </li>
        <li>
          <router-link to="/">服装</router-link>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }


  .search {
    // 核心2：把整个搜索框推到页面最右侧
    margin-left: auto;
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      margin-left: auto;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }

  .app-header-nav {
    display: flex;
    // 核心1：保持导航与logo的固定间距
    margin-left: 100px;
    li {
      height: 132px;
      line-height: 132px;
      padding: 0 20px;
      a {
        display: block;
        height: 100%;
        padding: 0 10px;
        color: #333;
        font-size: 16px;
        font-weight: 500;
        transition: color 0.3s;
        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}
</style>
