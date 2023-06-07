<template>
<div>
    <div style="display: flex;justify-content: center">
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item><router-link to="/Home" style="text-decoration:none;"><div style="width: 100%;height: 100%">首页</div></router-link></el-menu-item>
        <el-submenu>
            <template slot="title">公告通知</template>
            <router-link to="/gongGao" style="text-decoration:none;"><el-menu-item index="2-1">选项1</el-menu-item></router-link>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>

        <el-menu-item index="3"><a href="https://www.imooc.com/" target="_blank" style="text-decoration:none;"><div style="width: 100%;height: 100%">在线开放课程</div></a></el-menu-item>

        <el-menu-item><router-link to="/privateWeb" style="text-decoration:none;"><div style="width: 100%;height: 100%">学生空间</div></router-link></el-menu-item>
    </el-menu>
    </div>

    <router-view name="Home"></router-view>
    <router-view name="gongGao"></router-view>
    <router-view name="privateWeb"></router-view>
    <router-view name="ForSearch"></router-view>
</div>
</template>

<script>
    export default {
        name: "DaoHang",
        data() {
            return {

            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>