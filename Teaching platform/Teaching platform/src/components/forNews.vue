<template>
        <div>
        <ul style="list-style-type:none;padding: 0">
            <!--            <li  v-bind:key="item" v-for="(item,index) in musicList" :data-op="index">{{item.name}}</li>-->
            <li>
                <i class="el-icon-bell"></i>
                {{musicList[0].id}}
            </li>
            <li>
                <i class="el-icon-bell"></i>
                {{musicList[1].id}}
            </li>
            <li>
                <i class="el-icon-bell"></i>
                {{musicList[2].id}}
            </li>
            <li>
                <i class="el-icon-bell"></i>
                {{musicList[3].id}}
            </li>
            <li>
                <i class="el-icon-bell"></i>
                {{musicList[4].id}}
            </li>
            <li>
                <i class="el-icon-bell"></i>
                {{musicList[5].id}}
            </li>

        </ul>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "forNews",
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

</style>