<template>


<!--    <script type="text/javascript" src="jQuery/jquery-3.5.1.js"> </script>-->
<!--    <script type="text/javascript" src="jQuery/jquery-ui.js"> </script>-->


    <div id="body" class="bai" oncontextmenu="return false;" onselectstart="return false">
    <div style="width: 100%;height: 80%; position: relative">
<!--    <div id="loading">-->
<!--        <img alt="" :src="imageURL[0]"><br>-->
<!--    </div>-->

    <div><img :src="imageURL[1]" alt="" id="bj"></div>

    <div><img :src="imageURL[2]" alt="" id="taiyang"></div>

    <div id="jishiben" style="display: none">
        <div class="jin">
            <input v-model="inputValue" @keyup.enter="add" placeholder="你想说什么.." onfocus="this.placeholder=''" class="in">
        </div>
        <div class="jli-box">
            <div class="jli"  v-bind:key="item" v-for="(item,idex) in list">
                <div>
                    <span>{{idex + 1}}.</span>
                    <label>{{item}}</label>
                </div>
            </div>
        </div>
        <div class="jf-box">
            <div class="itemNum" style="margin: 3px">
                {{list.length}} items
            </div>
            <div style="margin: 3px" @click="remove">
                clear
            </div>
        </div>
    </div>

    <div id="all">
        <div id="div1" class="">
            <a href="http://www.bilibili.tv" target = "_blank" id="lianjie1">
                <img :src="imageURL[3]" id="bili" class="photo">
            </a>
        </div>
        <div id="div2" class="">
            <a href="https://weibo.com/u/5653500034/home?leftnav=1" target = "_blank" id="lianjie2">
                <img :src="imageURL[4]" id="weibo" class="photo">
            </a>
        </div>
        <div id="div3" class="">
            <a href="http://i.mooc.chaoxing.com/space/index?t=1591944171888" target = "_blank" id="lianjie3">
                <img :src="imageURL[5]" id="chaoxing" class="photo">
            </a>
        </div>
        <div id="div4" class="">
            <a href="http://www.tmall.com" target = "_blank" id="lianjie4">
                <img :src="imageURL[6]" id="tianmao" class="photo">
            </a>
        </div>
    </div>



    <div id="allBiao">
        <div id="biao1" class="">

            <table class="table">
                <tr>
                    <td>Video</td>
                    <td>Shop</td>
                    <td>Job</td>
                    <td>Music</td>
                    <td>POWER</td>
                    <td>Live</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><a href="https://www.iqiyi.com/" target = "_blank"> 爱奇艺 </a></td>
                    <td><a href="https://www.taobao.com/" target = "_blank"> 淘宝 </a></td>
                    <td><a href="https://www.51job.com/" target = "_blank" >前程 </a> </td>
                    <td><a href="http://www.kugou.com/" target = "_blank" >酷狗 </a> </td>
                    <td><a href="https://www.toolnb.com/" target = "_blank">工具 </a></td>
                    <td><a href="https://www.douyu.com/" target = "_blank">斗鱼</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.youku.com/" target = "_blank"> 优酷 </a></td>
                    <td><a href="https://www.suning.com/" target = "_blank" >苏宁 </a> </td>
                    <td><a href="https://www.tianyancha.com/" target = "_blank">天眼查</a></td>
                    <td><a href="https://music.163.com/" target = "_blank" >网易云 </a> </td>
                    <td><a href="https://www.zhihu.com/" target = "_blank">知乎 </a></td>
                    <td><a href="https://www.yy.com/" target = "_blank">YY</a></td>
                </tr>
                <tr>
                    <td><a href="https://v.qq.com/" target = "_blank" >腾讯 </a> </td>
                    <td><a href="https://ju.taobao.com/" target = "_blank">聚划算</a></td>
                    <td><a href="https://www.zhipin.com/" target = "_blank">BOSS</a></td>
                    <td><a href="https://y.qq.com/" target = "_blank" >QQ </a> </td>
                    <td></td>
                    <td><a href="https://egame.qq.com/" target = "_blank">企鹅</a></td>
                </tr>
                <tr>
                    <td><a href="https://www.mgtv.com/" target = "_blank"> 芒果 </a></td>
                    <td><a href="https://www.jd.com/" target = "_blank">京东</a></td>
                    <td><a href="https://www.shixiseng.com/" target = "_blank">实习僧</a></td>
                    <td><a href="https://www.xiami.com/" target = "_blank" >虾米</a> </td>
                    <td></td>
                    <td><a href="https://www.huya.com/" target = "_blank">虎牙</a></td>
                </tr>
                <tr>
                    <td><a href="https://tv.sohu.com/" target = "_blank"> 搜狐 </a></td>
                    <td><a href="http://www.dangdang.com/" target = "_blank">当当</a></td>
                    <td><a href="https://www.kanzhun.com/" target = "_blank">看准</a></td>
                    <td><a href="https://music.migu.cn/" target = "_blank" >咪咕</a> </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><a href="http://www.pptv.com/" target = "_blank"> PPTV </a></td>
                    <td><a href="https://www.mogu.com/" target = "_blank">蘑菇街</a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table></div>
        <div id="biao2" class="">
            <table style="border-spacing: 5px 40px">
                <tr>
                    <td><input type="text" id="wangzhi1" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao1" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi2" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao2" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi3" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao3" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi4" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao4" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi5" class="wangzhi"></td>
                    <td><input type="button" value="背景" id="tijiao5" class="tijiao"></td>
                </tr>
            </table>
        </div>

        <div id="biao3" class="">
            <table style="border-spacing: 5px 40px">
                <tr>
                    <td><input type="text" id="wangzhi6" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao6" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi7" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao7" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi8" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao8" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi9" class="wangzhi"></td>
                    <td><input type="button" value="提交" id="tijiao9" class="tijiao"></td>
                </tr>

                <tr>
                    <td><input type="text" id="wangzhi10" class="wangzhi" placeholder="网易云歌曲id"></td>
                    <td><input type="button" value="音乐" id="tijiao10" class="tijiao"></td>
                </tr>
            </table>
        </div>


        <select id="sel">
            <option value="scj" >&nbsp;收藏夹</option>
            <option value="tubiao" >&nbsp;自定义图标</option>
            <option value="lianjie" >&nbsp;自定义链接</option>
            <option value="null"  selected > </option>
        </select>
    </div>




    <form action="http://www.baidu.com/s?word=" target= "_blank">
        <div class="search">
            <input id="shuru" type="text" name="word" class="text" style="height: 50px;width: 600px;background: snow;border: black 2px solid">
            <input id="shuchu" type="submit" value=" " class="text" style="width: 100px;height: 52px;background: black;border: 0px">
        </div>
    </form>

    <div id="yc1">
        <div id="yc2"></div>
        <br>
        <label class="btlab">
            <input type="checkbox" id="bjbtn">
            <span>&nbsp;日间&nbsp;&nbsp;暗夜</span>
        </label>

        <br><br>
        <label class="btlab">
            <input type="checkbox" id="mfbtn">
            <span>&nbsp;魔方&nbsp;&nbsp;隐藏</span>
        </label>

        <br><br>
        <label class="btlab">
            <input type="checkbox" id="lbbtn">
            <span>&nbsp;轮播&nbsp;&nbsp;隐藏</span>
        </label>

        <br><br>
        <label class="btlab">
            <input type="checkbox" checked id="jsbbtn">
            <span>&nbsp;记事&nbsp;&nbsp;隐藏</span>
        </label>
    </div>



    <div class="box" id="box">
        <div><img :src="imageURL[7]" alt=""></div>
        <div><img :src="imageURL[8]" alt=""></div>
        <div><img :src="imageURL[9]" alt=""></div>
        <div><img :src="imageURL[10]" alt=""></div>
        <div><img :src="imageURL[11]" alt=""></div>
        <div><img :src="imageURL[12]" alt=""></div>
    </div>




    <div class="plbg">
        <img :src="imageURL[13]" class="play">
        <p id="song">小小恋歌</p>
    </div>
    <audio id="myMusic" src="http://music.163.com/song/media/outer/url?id=29829683.mp3" loop="loop">

    </audio>

    <div class="lb-box">
        <div class="lbj" id="lbj">
            <div id="lbtn">
                <input type="button" id="lbtn0" class="lbtn">
                <input type="button" id="lbtn1" class="lbtn">
                <input type="button" id="lbtn2" class="lbtn">
            </div>
            <img :src="imageURL[14]" alt="" class="lbphoto">
            <img :src="imageURL[15]" alt="" hidden class="lbphoto">
            <img :src="imageURL[16]" alt="" hidden class="lbphoto">
        </div>
    </div>

    <div id="tk" ></div>
    <div id="tk2" hidden></div>
    </div>
    </div>




</template>

<script>
import {all} from './private.js'

import img0 from './picture/2233load.gif'
import img1 from './picture/flowerm.png'
import img2 from './picture/太阳.png'
import img3 from './picture/bilibili.png'
import img4 from './picture/weibo.png'
import img5 from './picture/chaoxing.jpg'
import img6 from './picture/天猫.png'
import img7 from './picture/22331.gif'
import img8 from './picture/22332.gif'
import img9 from './picture/22333.gif'
import img10 from './picture/22334.gif'
import img11 from './picture/22335.gif'
import img12 from './picture/22336.gif'
import img13 from './picture/qq.png'
import img14 from './picture/feiji.png'
import img15 from './picture/hehua.png'
import img16 from './picture/shaonv.png'
import img17 from './picture/yueliangs.png'


    export default {
        name: "privateWeb",
        mounted() {
            all();
        },
        data(){
            return{
            imageURL:[img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17],
                list: [],
                inputValue: ""
            }
        },
        methods: {
            add: function(){
                this.list.push(this.inputValue)},
            remove: function () {
                this.list.splice(0,10)
            }
        }
    }
</script>

<style scoped>
@import "private.css";
</style>