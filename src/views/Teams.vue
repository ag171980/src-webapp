<template>
  <div>
    
    <template v-if="user">
      <div class="list asd">
        <h2 class="text-center bg">TEAMS</h2>
        <main class="container">
          <section>
            <div class="box bloque" v-for="(team,index) in teams" :key="index">
              <div @click="routeMatch(team.id)">
                <img :src="require('@/assets/shields/' + team.logo)" height="75" />
              </div>
              <div>
                <h3>{{team.name}}</h3>
                <p>{{team.nickname}}</p>
              </div>
            </div>
          </section>
        </main>
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


import { db } from "@/firebase/init.js";
import firebase from "firebase";

export default {
  name: "teams",
  components: {
    
  },
  data() {
    return {
      teams: [],
      user: null
    };
  },
  created() {
    db.ref("teams")
      .once("value")
      .then(snap => {
        this.teams = snap.val();
      });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
     routeMatch(id){
      this.$router.push({path: "team/"+id})
    }
  },
};
</script>
<style lang="scss" scoped>
h2{
  font-size: 5vh;
}
.asd{

  padding: 10vh 0 15vh 0;
    background-image: url("../assets/backmobile.jpg");
  background-size: 100% 100%;
}
.bg{
  
background: rgba(26,153,12,1);
background: -moz-linear-gradient(top, rgba(26,153,12,1) 0%, rgba(0,0,0,0.72) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(26,153,12,1)), color-stop(100%, rgba(0,0,0,0.72)));
background: -webkit-linear-gradient(top, rgba(26,153,12,1) 0%, rgba(0,0,0,0.72) 100%);
background: -o-linear-gradient(top, rgba(26,153,12,1) 0%, rgba(0,0,0,0.72) 100%);
background: -ms-linear-gradient(top, rgba(26,153,12,1) 0%, rgba(0,0,0,0.72) 100%);
background: linear-gradient(to bottom, rgba(26,153,12,1) 0%, rgba(0,0,0,0.72) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a990c', endColorstr='#000000', GradientType=0 );
    height: 9vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 98;
    margin-top: -10vh;
}
@media (min-width: 768px) and (max-width: 1199px) and (orientation: landscape){
 h2{
  font-size: 7vh;
}
.bloque{
  img{
    width: 10vh;
    height: 10vh;
  }
}
.bg{
height: 7vw;
}
}
@media (min-width: 481px) and (max-width: 767px) and (orientation: landscape){
   .box{
    height: 25vh !important;
  }
.bloque{
  h3{
    font-size: 5vh;
  }
  p{
    font-size: 3.5vh;
  }
    img{
    width: 20vh;
    height: 20vh;
  }
}
.bg{
  height: 7 vw;

}
h2{
  font-size: 8vh;
}
}

.list {
  
  color: beige;
}

.box {
  display: flex;
  justify-content: space-around;
  height: 16vh;
  margin: 2%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  border:greenyellow solid 0.5px;
}
img {
  height: 14vh;
  position: relative;
  bottom: 8px;
  margin: 12px;
}
h3 {
  font-size: 16px;
  margin: 10px;
  text-align: left;
}
p {
  font-size: 12px;
  margin: 10px;
  text-align: left;
}
</style>
