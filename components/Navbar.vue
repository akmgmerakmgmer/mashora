<template>
  <div>
    <div class="nav1 text-white py-4 d-flex justify-content-end px-md-16 px-4">
      <i class="fa fa-twitter mt-1" aria-hidden="true"></i>
      <i class="fa fa-whatsapp mt-1 mx-8" aria-hidden="true"></i>
      <p>اللغة العربية<i class="fa fa-caret-down ml-2" aria-hidden="true"></i></p>
    </div>
    <div class="nav2 d-flex flex-lg-row flex-column justify-content-between">
      <div class="d-flex flex-lg-row flex-column">
        <div class="d-flex justify-content-between">
          <img class="img1 mt-2 mb-lg-0 mb-2 mr-5" src="~/assets/logo2.png"/>
          <i class="fa fa-bars mt-6 ml-5 icon2 d-lg-none d-block" @click="burger" aria-hidden="true"></i>
        </div>
        <div class="py-lg-7 py-2 mr-lg-0 mr-10 d-lg-block d-none" id="nav-list">
          <ul class="d-flex flex-lg-row flex-column">
            <li class="mt-lg-0 mt-2" v-for="item in listitems" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="d-lg-flex d-none">
        <i class="fa fa-search pb-7 pt-8 ml-10  icon1" aria-hidden="true"></i>
        <img class="img2 mt-2 mr-5 " src="~/assets/logo1.png"/>
        <button class="px-15">تسجيل الدخول</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img1{
  width: 110px;
  height: 60px;
  object-fit: cover;
}
.img2{
  width: 65px;
  height: 65px;
}
.nav1{
  background: #0D2E75;
  i{
    font-size: 18px;
  }
  p{
    cursor: pointer;
  }
}
.nav2{
  border-bottom: 1px solid rgba($color: #0000, $alpha: 0.2);
  color: rgba($color: #000000, $alpha: 0.7);
  ul{
    li{
      margin-left: 15px;
      font-size: 17.5px;
      cursor: pointer;
    }
  }
  .icon2{
    cursor: pointer;
    font-size: 20px;
  }
  .icon1{
    border-left: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-right: 1px solid rgba($color: #000000, $alpha: 0.2);
    font-size: 17.5px;
    padding: 0 25px;
  }
  button{
    background: #65BDE1;
    color: white;
  }
}
</style>
<script>
export default {

  data(){
    return{
      listitems:['الصفحة الرئيسية','منتاجتنا','مقياس الاستدامة المالية','حول المقياس','من نحن','تواصل معنا','الاسئلة الشائعة'],
      display:'d-none'
    }
  },
  methods:{
    burger(){
      document.getElementById('nav-list').classList.toggle("d-none")
    },
  }
}
</script>
