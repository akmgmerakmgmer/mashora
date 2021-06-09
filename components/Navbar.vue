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
          <i class="fa fa-bars mt-7 ml-5 icon2 d-lg-none d-block" @click="burger" aria-hidden="true"></i>
        </div>
        <div class="py-lg-7 py-2 mr-lg-0 mr-10 d-lg-block d-none" id="nav-list">
          <ul class="d-flex">
            <li v-for="item in listitems" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="d-lg-flex d-none">
        <i class="fa fa-search pb-7 pt-8 ml-10  icon1" aria-hidden="true"></i>
        <img class="img2 mt-2 mr-5 " src="~/assets/logo1.png"/>
        <button class="px-15">تسجيل الدخول</button>
      </div>
    </div>
    <div class="overlay" v-if="draweron" @click="removeOverlay"></div>
    <div class="drawer transform" id="drawer">
      <ul class="">
        <li class="mt-5 mx-4" v-for="item in listitems" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 999999;
}
ul{
  li{
    margin-left: 15px;
    font-size: 17.5px;
    cursor: pointer;
    color: rgba($color: #000000, $alpha: 0.7);
  }
}
.transform{
  transform: translateX(105%);
  @media (min-width: 500px){
    transform: translateX(105%) !important;
  }
}
.drawer{
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background: white;
  box-shadow: 5px 10px 18px rgba($color: #000000, $alpha: 0.5);
  z-index: 9999999999999999999;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
}
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
      draweron:false,
      listitems:['الصفحة الرئيسية','منتاجتنا','مقياس الاستدامة المالية','حول المقياس','من نحن','تواصل معنا','الاسئلة الشائعة'],
      display:'d-none'
    }
  },
  methods:{
    burger(){
      document.getElementById('drawer').classList.toggle('transform')
      this.draweron=true
    },
    removeOverlay(){
      this.draweron=false
      document.getElementById('drawer').classList.toggle('transform')
    }
  }
}
</script>
