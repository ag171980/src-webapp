<template>
  <div class="d-flex justify-content-center">
    <template v-if="user">
      <div class="parent-container">
      <div class="wrap-contact img_and_form">
        <!-- <div class="js-tilt img">
          <img src="@/assets/support.png" alt="img_support" id="support" />
        </div> -->

        <form class="contact-form validate-form form_dats" @submit.prevent= "addQuery">
          <span class="contact-form-title shadow p-3 mb-2 rounded">Contact us</span>
          
          <div class="input-group wrap-input validate-input form_dats_items">
            <input
              type="text"
              class="input_dats form-control validate-input"
              name="email"
              placeholder="Asunto"
              v-model= "newQuery.asunto"
            />
          </div>
          <div class="input-group wrap-input validate-input form_dats_items">
            <textarea 
              id="msg" 
              class="input_dats form-control" 
              name="message" 
              placeholder="Message"
              v-model= "newQuery.msg"
              required
            >
          </textarea>
          </div>
          <div class="container-form-btn form_dats_items">
            <button class="form-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
    </template>
    <template v-else>
      <div class="container  alert alert-danger mt-3 text-center" role="alert">
        Solo usuarios registrados pueden visualizar esta pestaña.
        Usted no se encuentra registrado, por favor ingrese con su cuenta
        <router-link to="/" >aqui</router-link>
        , o cree una cuenta 
        <router-link to="/register" >aqui</router-link>
      </div>
    </template>
    
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
import db from "@/firebase/init.js";
let bd = firebase.database();
let websitesRef = bd.ref("Support");
export default {
  name: "Formcontact",
  firebase: {
    websites: websitesRef
  },
  data() {
    return{
      user:null,
      newQuery: {
        asunto: "",
        msg : ""
      }
    }
  },
  methods: {
    addQuery (){
      var usuario = {
        email: this.user.email,
        asunto: this.newQuery.asunto,
        msg: this.newQuery.msg
      }
      
      websitesRef.push(usuario);
      (usuario.email=""),
      (usuario.asunto=""),
      (usuario.msg="");
      (this.newQuery.asunto = ""),
      (this.newQuery.msg="")
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style scoped>
/* Style input boxes */
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #09f128;
  border-radius: 0.25rem;
  transition: border-color 0.15s;
}
* {
  box-sizing: border-box;
}
/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}
textarea {
  outline: none;
  border: none;
}
.parent-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-image: url("../assets/backk.png");
}
.wrap-contact {
  height: 60vh;
  width: 100vw;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
}
/*------------------------------------------------------------------
[  ]*/
.contact-form {
  width: 390px;
}
/* Form title */
.contact-form-title {
  display: block;
  font-family: ExtraBold;
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
  width: 100%;
  height: 9vh;
  border-radius: 25px;
  background: rgb(10,64,2);
  background: linear-gradient(0deg, rgba(10,64,2,0.720792540649072) 0%, rgba(32,154,22,0.8412407199207808) 48%, rgba(52,200,28,1) 100%);
  line-height: 1.5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
input.input_dats {
  height: 8 vh;;
  border-radius: 25px;
  padding: 0 30px 0 50px;
}
textarea.input_dats {
  min-height: 10vh;
  border-radius: 25px;
  padding: 10px 25px;
}
/*----------------------------------------------*/
/* IMG */
#support {
  width: 350px;
  margin-top: 10vh;
  margin-right: 50px;
}
/*---------------------------------------------*/
/* Distance input */
.wrap-input {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}
/* Inside the form */
.input_dats {
  display: block;
  width: 100%;
  background: #e6e6e6;
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
}
/*------------------------------------------------------------------
[ Button send]*/
.form-btn {
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #1a6d01;
  opacity: 0.8;
  font-family: Montserrat-Bold;
  font-size: 23px;
  line-height: 1.5;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  outline: none;
  border: none;
}
.form-btn:hover {
  background: #333333;
}
@media (min-width: 0px) and (orientation: landscape) {
  .parent-container {
    background: none;
    background-image: url("../assets/backk.png");
  }
  .wrap-contact {
    height: 65vh;
    width: 50vw;
    position: absolute; top: 100px;
    background-image: url("../assets/backk.png");
  }
  #support {
    display: none;
  }
}
</style>