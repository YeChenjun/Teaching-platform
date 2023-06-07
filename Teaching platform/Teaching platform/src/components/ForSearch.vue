<template>
    <div>
        <search></search>
        <div style="position: absolute;
            left: 50%;
            transform: translateX(-50%);">
        <el-table
                :data="searchList"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="代码"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="课程名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width='180'>
                Undefined
            </el-table-column>
        </el-table>
    </div>
    </div>

</template>

<script>
import {mapState} from 'vuex'

    export default {
        name: "ForSearch",
        data(){
            return{

            }},
        computed:{
            ...mapState(['searchList'])  //调用state时必须使用mapState映射
        }

    }
</script>

<style scoped>

</style>



