<template>
    <div>
        <div class="ser">
            <div class="contain">
            <div>
                <el-input v-model="query"  @keyup.enter="searchMusic" placeholder="请输入内容" style="width: 50%"></el-input>
                <router-link to="/ForSearch" style="text-decoration:none;"><el-button type="primary" icon="el-icon-search" @click="searchMusic">搜索</el-button></router-link>
            </div>
            <div>
            <el-button type="primary">老师登陆</el-button>
            <el-button type="success">学生登陆</el-button>
            </div>
            </div>

        </div>

            <router-view name="ForSearch"></router-view>

    </div>

</template>

<script>
    import axios from "axios";Vue.use(axios);import Vue from 'vue';

    export default {
        name: "search",
        data(){
            return{
                // searchList: [],
                query: "",
            }},
        methods: {
            searchMusic : function() {
                // let _this = this;
                // axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function
                //         (content){
                //         console.log(content.data.result.songs);
                //         _this.searchList = content.data.result.songs;
                //     }
                // );
                this.$store.dispatch('getList',this.query)
            }
        },
    }


</script>

<style scoped>
    .ser{position:relative;background-color: #F5F7FA;width: 100%;height: 70px;}
    .contain{position: absolute;right: 10%;display: flex;justify-content: space-around;align-items:center;width: 80%;height: 100%}
</style>