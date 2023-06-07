<template>
    <div class="down">

                <div class="download"> &nbsp;下载专区 </div>
                <div>
                     <ul style="list-style-type:none;padding: 0">
        <!--            <li  v-bind:key="item" v-for="(item,index) in musicList" :data-op="index">{{item.name}}</li>-->
                        <li>
                            <i class="el-icon-s-release"></i>
                            {{musicList[0].id}}
                        </li>
                        <li>
                            <i class="el-icon-s-release"></i>
                            {{musicList[1].id}}
                        </li>
                        <li>
                            <i class="el-icon-s-release"></i>
                            {{musicList[2].id}}
                        </li>
                        <li>
                            <i class="el-icon-s-release"></i>
                            {{musicList[3].id}}
                        </li>
                         <li>
                             <i class="el-icon-s-release"></i>
                             {{musicList[4].id}}
                         </li>
                         <li>
                             <i class="el-icon-s-release"></i>
                             {{musicList[5].id}}
                         </li>

                    </ul>
            </div>

    </div>
</template>

<script>
    import axios from "axios";Vue.use(axios);import Vue from 'vue';

    export default {
        name: "Download",
        data() {
            return {
                musicList: [],
                // tableData: [{
                //     date: '2016-05-02',
                //     name: '王',
                //     address: '上海市普陀区金沙江路 1518 弄'
                // }]
            }},

        methods: {
            searchMusic : function() {
                let _this = this;
                axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function
                        (content){
                        console.log(content.data.result.songs);
                        _this.musicList = content.data.result.songs
                    }
                )
            }
        },

        mounted() {
            this.searchMusic();
        }

    }
</script>

<style scoped>
    .down{
    width: 100%;height: 30%;
    }
    .download{
       display: flex;justify-content: flex-start;align-items: center; width: 100%;height: 20%;background-color: #F5F7FA;border-radius: 4px
    }
</style>