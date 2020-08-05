<template>
  <div class="profile">
    <template v-if="user">
      <div v-for="(item,index) in profile" :key="index">
        <template v-if="item.email == user.email">
          <img
            :src="require('@/assets/profile/' + item.imagen)"
            style="position:absolute;z-index:0;background-size:cover;width:100vw;height:50vh;filter: blur(4px);filter: brightness(0.4);"
            alt
          />
          <div class="content" style="position:relative;z-index:1;">
            <div class="head">
              <div class="foto">
                <img
                  :src="require('@/assets/profile/' + item.imagen)"
                  width="80"
                  height="80"
                  style="border-radius:50%;"
                  alt
                />
              </div>
              <div class="fullname">
                
                <h5>{{item.firstname}} {{item.lastname}}</h5>
                <p>{{item.rol}}</p>
              </div>
            </div>
            <div class="info">
              <div class="info-content">
                <font-awesome-icon icon="user" class="icon" />
                <h6>{{item.firstname}} {{item.lastname}}</h6>
              </div>
              <div class="info-content">
                <font-awesome-icon icon="calendar-alt" class="icon" />
                <h6>{{item.birthdate}}</h6>
              </div>
              <div class="info-content">
                <font-awesome-icon icon="at" class="icon" />
                <h6>{{item.email}}</h6>
              </div>
              <div class="info-content">
                <font-awesome-icon icon="phone-alt" class="icon" />
                <h6>{{item.phone}}</h6>
              </div>
              <div class="info-content">
                <div class="gender" v-if="item.gender == 'male'">
                  <font-awesome-icon icon="mars" class="icon" />
                  <h6>{{item.gender}}</h6>
                </div>
                <div class="gender" v-else>
                  <font-awesome-icon icon="venus" class="icon" />
                  <h6>{{item.gender}}</h6>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
<!--           
          <div class="alert alert-primary mt-2 text-center" id="cuadro" role="alert">
            <p>Necesitamos algunos datos personales suyos.</p>
            <button
              type="button"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Ingresar Datos</button>
          </div> -->
          <!-- <input type="file" @change="selectPhoto" /> -->
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Formulario de Datos</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form class="formulario" @submit.prevent="addRegister">
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="firstname" class="formulario__label text-dark">
                        <font-awesome-icon icon="user" />First Name
                      </label>
                      <input
                        type="text"
                        class="form-control formulario__input"
                        id="firstname"
                        v-model="newRegister.firstname"
                      />
                    </div>

                    <div class="form-group">
                      <label for="lastname" class="formulario__label text-dark">
                        <font-awesome-icon icon="user" />Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control formulario__input"
                        id="lastname"
                        v-model="newRegister.lastname"
                      />
                    </div>

                    <div class="form-group">
                      <label for="birthdate" class="formulario__label text-dark">
                        <font-awesome-icon icon="calendar-alt" />Birth Date
                      </label>
                      <input
                        type="date"
                        class="form-control formulario__input"
                        id="birthdate"
                        v-model="newRegister.birthdate"
                      />
                    </div>

                    <div class="form-group">
                      <label for="gender" class="formulario__label text-dark">
                        <font-awesome-icon icon="venus-mars" />Gender
                      </label>
                      <div class="radio">
                        Male
                        <input
                          type="radio"
                          class="formulario__input"
                          id="gender"
                          value="male"
                          v-model="newRegister.gender"
                        />
                        Female
                        <input
                          type="radio"
                          class="formulario__input"
                          id="gender"
                          value="female"
                          v-model="newRegister.gender"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="phone" class="formulario__label text-dark">
                        <font-awesome-icon icon="phone-alt" />Cellphone/Telephone
                      </label>
                      <input
                        type="number"
                        class="form-control formulario__input"
                        id="phone"
                        v-model="newRegister.phone"
                      />
                    </div>
                    <div class="form-group">
                      <label for="rol" class="formulario__label text-dark">
                        <font-awesome-icon icon="user-tag" />Role
                      </label>
                      <select class="form-control" id="rol" v-model="newRegister.rol">
                        <option value="parents">Parents</option>
                        <option value="children">Children</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input type="file" @change="onFileChange" />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class="container alert alert-danger mt-3 text-center" role="alert">
        Solo usuarios registrados pueden visualizar esta pestaña.
        Usted no se encuentra registrado, por favor ingrese con su cuenta
        <router-link to="/">aqui</router-link>, o cree una cuenta
        <router-link to="/register">aqui</router-link>
      </div>
    </template>
  </div>
</template>
<script>
import nolog from "@/components/nologged.vue";
import firebase from "firebase";
import { db } from "@/firebase/init.js";
import store from "firebase";
let bd = firebase.database();
var storage = firebase.storage();
let websitesRef = bd.ref("User");
export default {
  name: "profile",
  components: {
    nolog
  },
  data() {
    return {
      profile:[],
      imagenperfil:'',
      user: null,
      newRegister: {
        firstname: "",
        lastname: "",
        birthdate: "",
        gender: "",
        phone: "",
        rol: ""
      }
    };
  },
  methods: {
    onFileChange(e) {
      var usuarioActual = this.user;
      // var imagenPerfil = this.imagenperfil;
      var files = this.newRegister.file;
      files = e.target.files || e.dataTransfer.files;

      if (!files) {
      } else {
        var storageRef = firebase.storage().ref();

        var FileName = files[0].name;
        
      }
      return this.imagenperfil = FileName;
      //   var metadata = {
      //     contenttype: "image/jpeg"
      //   };

      //   var uploadTask = storageRef
      //     .child("imagenesperfiles/" + FileName)
      //     .put(files[0]);
      //   console.log(uploadTask);
      //   console.log(storageRef);

      //   uploadTask.on(
      //     firebase.storage.TaskEvent.STATE_CHANGED,
      //     function(snapshot) {
      //       var progress =
      //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //       console.log("Upload is " + progress + "% done");
      //       switch (snapshot.state) {
      //         case firebase.storage.TaskState.PAUSED: // or 'paused'
      //           console.log("Upload is paused");
      //           break;
      //         case firebase.storage.TaskState.RUNNING: // or 'running'
      //           console.log("Upload is running");
      //           break;
      //       }
      //     },
      //     function(error) {
      //       switch (error.code) {
      //         case "storage/unauthorized":
      //           break;

      //         case "storage/canceled":
      //           break;

      //         case "storage/unknown":
      //           break;
      //       }
      //     },
      //     function() {
      //       var starsRef = storageRef.child("imagenesperfiles/" + FileName);
      //       starsRef
      //         .getDownloadURL()
      //         .then(function(imagenprofile) {
                
      //           imagenPerfil = imagenprofile;
      //           console.log(imagenPerfil)

      //           return  imagenPerfil;
      //         })
      //         .catch(function(error) {});
      //     }
      //   );
      // }

      // return imagenPerfil;
    },

    addRegister(file) {
      var usuario = {
        email: this.user.email,
        firstname: this.newRegister.firstname,
        lastname: this.newRegister.lastname,
        birthdate: this.newRegister.birthdate,
        gender: this.newRegister.gender,
        phone: this.newRegister.phone,
        rol: this.newRegister.rol,
        imagen: this.imagenperfil
      
      };

      websitesRef.push(usuario);
      (usuario.email = ""), (usuario.firstname = ""), (usuario.lastname = "");
      usuario.birthdate = "";
      usuario.gender = "";
      usuario.phone = "";
      usuario.rol = "";
      usuario.imagen = "";
      (this.newRegister.firstname = ""),
        (this.newRegister.lastname = ""),
        (this.newRegister.birthdate = ""),
        (this.newRegister.gender = ""),
        (this.newRegister.phone = ""),
        (this.newRegister.rol = "");
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
    db.ref(`User`)
      .once("value")
      .then(snap => {
        this.profile =  snap.val();
      });
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/coolors.scss";
@import "@/scss/mixin_flex.scss";
@import "@/scss/MediaQueries.scss";

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    @include flex-column;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-top: 2px solid black;
    margin-top: 40vh;
    margin-bottom: 12vh;

    width: 100vw;
    .head {
      @include flex-row;
      align-items: flex-end;
      .foto {
        position: relative;
        top: -7vh;
      }
      .fullname {
        @include flex-column;
        justify-items: flex-end;
      }
    }
    .info {
      .info-content {
        width: 100vw;
        border-bottom: 2px solid #e5e5e5;
        padding: 20px;
        font-size: 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        .gender {
          @include flex-row;
        }
        h6 {
          padding: 10px 15px 0 15px;
        }
      }
    }
    .foto {
      width: 80px;
      border-radius: 50%;
    }
  }
  .modal {
    .modal-dialog {
      .modal-content {
        .radio {
          @include flex-row;
        }
      }
    }
  }
}
</style>