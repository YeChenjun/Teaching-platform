import VueRouter from 'vue-router';
import forNews from "@/components/forNews";
import tt from "@/components/tt"
import Home from "@/components/Home";
import gongGao from "@/components/gongGao";
import privateWeb from "@/components/private/privateWeb";
import ForSearch from "@/components/ForSearch";


var router =new VueRouter({

    routes: [

         {path: '/',redirect:'/shouYe'}, //此代码不生效，原因不明
         {name:'Home',path: '/Home', components: {'Home':Home},
             children : [
                 {name:'forNews' ,path: '/forNews', components: {'forNews':forNews}},
                 {name:'tt' ,path: '/tt', components: {'tt':tt}},

             ],
         },
         {name:'gongGao' ,path: '/gongGao', components: {'gongGao':gongGao}},
         {name:'privateWeb' ,path: '/privateWeb', components: {'privateWeb':privateWeb}},
         {name:'ForSearch' ,path: '/ForSearch', components: {'ForSearch':ForSearch}},

    ],
    mode:"history"
});

export default router