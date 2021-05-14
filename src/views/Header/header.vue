<template>
  <div class="headerBox">
    <div class="header_left">赵佳乐的博客</div>
    <div class="header_right">
      <el-tabs >
        <el-tab-pane label="首页" name="home">首页</el-tab-pane>
        <el-tab-pane label="JavaScript" name="JavaScript">js知识点</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script></script>

<style scope>
.headerBox {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
}
.header_left,.header_right{
  display: inline-block;
}

</style>
