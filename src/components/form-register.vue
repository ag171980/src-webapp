<template>
  <div class="form">
    <div class="title">
      <h1 class="text-center">Sign Up</h1>
    </div>
    <form class="formulario" action="#" @submit.prevent="register">
      

      <div class="form-group">
        <input
          type="email"
          class="form-control formulario__input"
          aria-describedby="emailHelp"
          v-model="email"
          @click="forms"
        />
        <label for="exampleInputEmail1" class="formulario__label">
          <font-awesome-icon icon="user" />Email
        </label>
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control formulario__input"
          v-model="password"
          @click="forms"
        />
        <label for="exampleInputPassword1" class="formulario__label">
          <font-awesome-icon icon="key" />Password
        </label>
      </div>

      <button type="submit" class="btn btn-lg btn-block button">SignUp</button>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
import router from "../router";
export default {
  name: "form-register",
  data() {
    return {
      log: { nickname: "" },
      
      email: "",
      password: "",
      trigger: "",
      error: ""
    };
  },
  methods: {
    register() {
      this.trigger = "";
      if ( this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            
            this.email = "";
            this.password = "";
            alert("Registrado con exito");
            this.$router.push({ name: "login" });
          })
          .catch(err => {
            this.error = err.message;
          });
      } else {
        this.trigger = "Todos los campos son requeridos";
      }
      // evt.preventDefault()
    },
    forms() {
      var input = document.getElementsByClassName("formulario__input");
      for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("keyup", function() {
          if (this.value.length >= 1) {
            this.nextElementSibling.classList.add("fijar");
          } else {
            this.nextElementSibling.classList.remove("fijar");
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/coolors.scss";
@import "@/scss/mixin_flex.scss";
@import '@/scss/MediaQueries.scss';
.form {
  @include box-design;
  .title {
    h1 {
      color: white;
      margin-bottom: 4vh;
    }
  }
  @include form-label-design;
  
}

@include MediaQueries;
</style>