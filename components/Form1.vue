<template>
  <div class="form">
    <div v-if="!form">
      <h3 class="text-center mt-3 headings">بيانات المنظمة </h3>
      <form @submit.prevent>
        <div class="row mt-10">
          <div class="col">
            <label>اسم المسؤول <span>*</span></label>
            <input type="text" class="form-control" v-model.trim="owner">
          </div>
          <div class="col">
            <label> منصبه <span>*</span></label>
            <input type="text" class="form-control" v-model.trim="position1">
          </div>
        </div>
        <div class="row mt-10">
          <div class="col-lg-6 col-12">
            <div class="row">
              <div class="col-4">
                <label> رقم الجوال <span>*</span></label>
                <multiselect v-model="value2" :options="options2" placeholder="" :show-labels="false"></multiselect>
              </div>
              <div class="col-8">
                <label class="label-0"> منصبه </label>
                <input type="number" class="form-control" v-model.trim="position2">
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-0"></div>
        </div>
        <div class="row mt-10">
          <div class="col">
            <label>اسم المفوض بالتواصل <span>*</span></label>
            <input type="text" class="form-control" v-model.trim="contacter">
          </div>
          <div class="col">
            <label> منصبه <span>*</span></label>
            <input type="text" class="form-control" v-model.trim="position3">
          </div>
        </div>
        <div class="row mt-10">
          <div class="col-lg-6 col-12">
            <div class="row">
              <div class="col-4">
                <label> رقم الجوال <span>*</span></label>
                <multiselect v-model="value3" :options="options2" placeholder="" :show-labels="false"></multiselect>
              </div>
              <div class="col-8">
                <label class="label-0"> منصبه </label>
                <input type="number" class="form-control" v-model.trim="position4">
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-0">
            <label> البريد الالكتروني <span>*</span></label>
            <input type="email" class="form-control" v-model.trim="email">
          </div>
        </div>
        <div class="mt-10">
          <label>ملاحظات</label>
          <textarea class="form-control" rows="10" v-model="content"/>
        </div>
        <div v-if="error2" class="alert text-center alert-danger mt-3" role="alert">
          <p>برجاء ادخال البيانات الخاصة بك</p>
        </div>
        <div v-if="success" class="alert text-center alert-success mt-3" role="success">
          <p>لقد تم تفعيل الطلب الخاص بكم</p>
        </div>
        <div class="text-center mb-5 mt-15">
          <button @click="formSubmit2">طلب المنتج</button>
        </div>
      </form>
    </div>
    <div v-if="form">
      <div class="text-center mt-15">
        <h2>نموذج طلب المنتج "هندسة الموسم"</h2>
        <h3 class="mt-10 headings">بيانات المنظمة </h3>
      </div>
      <form @submit.prevent>
        <div class="row mt-10">
          <div class="col">
            <label>اسم المنظمة <span>*</span></label>
            <input type="text" class="form-control" v-model.trim="name">
          </div>
          <div class="col">
            <label>نشاط المنظمة <span>*</span></label>
            <input type="text" class="form-control" v-model.trim="activity">
          </div>
        </div>
        <div class="row mt-10">
          <div class="col">
            <label>المنطقة</label>
            <input type="text" class="form-control" v-model.trim="area">
          </div>
          <div class="col">
            <label>المركز/المحافظة</label>
            <input type="text" class="form-control" v-model.trim="city">
          </div>
        </div>
        <h4 class="headings text-center mt-15">الباقة المطلوبة</h4>
        <div class="my-5">
          <label>اختر الباقة  <span>*</span></label>
          <multiselect v-model="value" :options="options" placeholder="" class="w-50" :show-labels="false"></multiselect>
        </div>
        <div v-if="error" class="alert text-center alert-danger" role="alert">
          <p>برجاء ادخال البيانات الخاصة بك</p>
        </div>
        <div class="text-center mb-5 mt-15">
          <button @click="formSubmit">التالي</button>
        </div>
      </form>
    </div>
    <div class="text-center my-5">
      <div class="circle" :class="active" @click="nav1"></div>
      <div class="circle" :class="active2" @click="formSubmit"></div>
    </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
.circle{
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.active{
  background: #65BDE1;
}
h2{
  font-weight: 800;
  font-size: 40px;
}
.headings{
  color: #65BDE1;
  font-weight: 600;
}
.form{
  margin-right: 15%;
  margin-left: 15%;
  .label-0{
    opacity: 0;
  }
  input{
    outline: none;
  }
  label{
    font-size: 18px;
    span{
      color: red;
    }
  }
  button{
    background: #65BDE1;
    padding: 10px 25%;
    color: white;
    outline: none;
  }
  @media (max-width: 575.98px){
    margin-right: 2%;
    margin-left: 2%;
  }

  @media (min-width: 576px) and (max-width: 767.98px){
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
    data () {
    return {
      value2:'+966',
      value3:'+966',
      owner:'',
      position1:'',
      position2:'',
      position3:'',
      position4:'',
      number1:'',
      number2:'',
      contacter:'',
      email:'',
      content:'',
      value: '',
      name:'',
      activity:'',
      city:'',
      area:'',
      form:true,
      options:['باقة 10','باقة 20','باقة 30'],
      options2:['+966','+20'],
      error:false,
      error2:false,
      success:false,
      active:'active',
      active2:'',
      navigate:false
    }
  },
  methods:{
    formSubmit(){
      if(this.name!="" && this.activity!="" && this.city!="" && this.area!='' && this.value!=''){
        this.form=false
        this.error=false
        this.active2='active'
        this.active=''
      }else{
        this.error=true
      }
    },
    formSubmit2(){
      if(this.owner!="" && this.position1!="" && this.position2!="" && this.position3!="" && this.position4!='' && this.value2!='' && this.value3!='' && this.contacter!='' && this.email!='' && this.email.includes('@') && this.content!=''){
        this.form=true
        this.error2=false
        this.success=true
      }else{
        this.error2=true
      }
    },
    nav1(){
      this.active2=''
      this.active='active'
      this.form=true
    },
    customLabel ({ title, desc }) {
      return `${title} – ${desc}`
    }
  }
}
</script>
