<template>
  <div class="match">
    <headerPage />
    <button class="btn boton d-flex back">
      <router-link to="/matches">
        <font-awesome-icon icon="arrow-left" />
      </router-link>
    </button>
    <div class="content container">
      <div class="info-container container">
        <div class="teams text-light">
          <img
            :src="require('@/assets/shields/'+getLogo(matches[$route.params.id-1].equipoLocal))"
            height="50"
          />
          {{this.matches[$route.params.id-1].equipoLocal}} VS {{this.matches[$route.params.id-1].equipoVisital}}
          <img
            :src="require('@/assets/shields/'+getLogo(matches[$route.params.id-1].equipoVisital))"
            height="50"
          />
        </div>
        <div class="infoMatch text-light">
          <p>Fecha: {{matches[$route.params.id-1].fecha}}</p>
          <p>Date: {{matches[$route.params.id-1].date}}</p>
          <p>
            Ubication:
            <button
              type="button"
              class="btn boton "
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Ver Mas</button>
          </p>
        </div>
        
        <div class="dropdown-divider">------------------------------------------------------------------------------- </div>
        
        <div class="comments">
          <h1 class="text-light">Comments</h1>
          <form @submit.prevent="addChat" class=" asd">
              <input type="text" class="input_message form-control asd" v-model="newMsg.mensajito" />
              <button class="btn boton ">Enviar</button>
            </form>
          <div class="msg" v-for="(msg,im) in chat" :key="im">
            <p style="font-weight:bold;">{{msg.correo}}</p>
            <p>{{msg.mensaje}}</p>    
          </div>
          <div class="input xx ">
            
          </div>
        </div>
      </div>
    </div>
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
          <div class="modal-header bg ">
            <h5
              class="modal-title  "
              id="exampleModalLongTitle"
            >{{getStadium(matches[$route.params.id-1].equipoLocal)}}</h5>
            <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <iframe
            :src="getUbication(matches[$route.params.id-1].equipoLocal)"
            
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>

    <MenuBottom />
  </div>
</template>
<script>
import MenuBottom from "@/components/MenuBottom.vue";
import headerPage from "@/components/headerPage.vue";
import { mapMutations } from "vuex";
import firebase from "firebase";
import { db } from "@/firebase/init.js";
import router from '../router';
let bd = firebase.database();

export default {
  name: "comments",
  components: {
    MenuBottom,
    headerPage
  },
  // firebase: {
  //   websites: websitesRef
  // },
  data() {
    return {
      user: null,
      matches: [],
      teams: [],
      chat: [],
      newMsg: {
        mensajito: ""
      },
      ruta:this.$route.params.id
    };
  },

  methods: {
    ...mapMutations(["saveMatches"]),
    ...mapMutations(["saveTeams"]),
    getRuta(){
      var r = $route.params.id;
      console.log(r)
    },
    getLogo(name) {
      var logo = "";
      this.teams.forEach(e => {
        if (e.name === name) {
          logo = e.logo;
        }
      });
      return logo;
    },
    getUbication(name) {
      var ubication = "";
      this.teams.forEach(e => {
        if (e.name === name) {
          ubication = e.ubication;
        }
      });
      return ubication;
    },
    getStadium(name) {
      var stadium = "";
      this.teams.forEach(e => {
        if (e.name === name) {
          stadium = e.stadium;
        }
      });
      return stadium;
    },
    addChat() {
      let uss = {
        correo: this.user.email,
        mensaje: this.newMsg.mensajito
      };
      firebase.database().ref(`matches/${this.ruta-1}/chats`).push(uss).key
      this.newMsg.mensajito = "";
    }
  },
  created() {
    this.saveTeams(
      db
        .ref("teams")
        .once("value")
        .then(snap => {
          this.teams = snap.val();
        })
    ),
      this.saveMatches(
        db
          .ref("matches")
          .once("value")
          .then(snap => {
            this.matches = snap.val();
          })
      );

    db.ref(`matches/${this.ruta-1}/chats`)
      .once("value")
      .then(snap => {
        this.chat = snap.val();
      });

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
<style lang="scss" scoped>
.bg{
 color: white;
      background: rgba(7,7,61,1);
background: -moz-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(7,7,61,1)), color-stop(100%, rgba(18,26,11,1)));
background: -webkit-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: -o-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: -ms-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: linear-gradient(to bottom, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#07073d', endColorstr='#121a0b', GradientType=0 ); 
}
.back{
  margin-left:88% ;
  
}
.xx{
  width: 80vw;
}
.boton{
border:none;
background: rgba(9,36,4,0.82);
background: -moz-linear-gradient(top, rgba(9,36,4,0.82) 0%, rgba(26,153,20,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(9,36,4,0.82)), color-stop(100%, rgba(26,153,20,1)));
background: -webkit-linear-gradient(top, rgba(9,36,4,0.82) 0%, rgba(26,153,20,1) 100%);
background: -o-linear-gradient(top, rgba(9,36,4,0.82) 0%, rgba(26,153,20,1) 100%);
background: -ms-linear-gradient(top, rgba(9,36,4,0.82) 0%, rgba(26,153,20,1) 100%);
background: linear-gradient(to bottom, rgba(9,36,4,0.82) 0%, rgba(26,153,20,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#092404', endColorstr='#1a9914', GradientType=0 );
color:white;
}
.asd{
  width: 100%;
  margin-top: 9px;
}
.match {
  padding-bottom: 10vh;
   background-image: url("../assets/backmobile.jpg");
   background-size: 100% 100%;


  .content {
    
    padding-bottom: 8vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10vh;
    border: 0.2vh solid rgb(38, 255, 0);
  background-color: rgba(0, 0, 0, 0.698);
    border-radius: 30px;
    
    box-shadow: 1px 0px 16px 0px rgba(0,0,0,0.75);
    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .teams {
        font-size: 15px;
      }
      .infoMatch {
        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .comments{
       
        .input{
          input[type=text]{
            height: 6vh;
            outline: green;
          }
          button{
            height: 7vh;
          }
          display: flex;
          width: 80vw;
          flex-direction: row;
          align-items: center;
          height: 10vh;
          
          
        }
      }
    }
  }
}
.msg {
       background: rgba(7,7,61,1);
background: -moz-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(7,7,61,1)), color-stop(100%, rgba(18,26,11,1)));
background: -webkit-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: -o-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: -ms-linear-gradient(top, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
background: linear-gradient(to bottom, rgba(7,7,61,1) 0%, rgba(18,26,11,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#07073d', endColorstr='#121a0b', GradientType=0 );
  color: white;
  width: 80vw;
  border-radius: 5px;
}
.input {
  height: 5vh;
}
@media (max-width: 320px){
  .match{
    .content{
      .info-container{
        .teams{
          font-size: 13px;
        }
      }
    }
  }
  

}
</style>