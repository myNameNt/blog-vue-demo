<template>
  <el-row class="menu-wrap">
    <el-col class="menu-content" :span="24">
    <el-menu
        background-color="transparent"
        active-text-color='gold'
    >
        <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
    </el-menu-item>
    </el-menu>
    </el-col>
</el-row>
</template>
<script>
export default {

}
</script>
<style lang='scss'>
.menu-wrap{
    height: 100%;
}
.menu-content{
    margin-top: 100px;
}
</style>
