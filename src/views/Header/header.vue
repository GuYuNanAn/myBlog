<template>
  <div class="headerBox">
    <a-button type="primary" class="btn_collect">收藏文章</a-button>
    <a-tabs tabPosition='top'>
      <a-tab-pane key="1" tab="首页推荐">这里是首页推荐</a-tab-pane>
      <a-tab-pane key="2" tab="JavaScript分区">这里是js</a-tab-pane>
      <a-tab-pane key="3" tab="NodeJs分区">这里是nodejs</a-tab-pane>
      <a-tab-pane key="4" tab="Vue3分区">这里是vue3</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script></script>

<style scope>
  .headerBox {
    width: 100%;
  }
  .btn_collect{
   position: fixed;
  }
</style>