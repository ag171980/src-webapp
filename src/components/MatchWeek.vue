<template>
  <div>
    <template v-if="user">
      <div class="matchWeek back">
        <h2 class="title">Matches</h2>
        <div class="containerFather">
          <div class="containerDates">
            <label
              class="label"
              v-for="fecha in getValueKey(matches, 'fecha')"
              :key="fecha.id"
            >
              <input type="radio" :value="fecha" class="matches text-center" v-model="currentMatch" />
                <div class="fechass">

              {{fecha}}
                </div>
              
            </label>
          </div>
          <div class="nextPrev">

            <button class="btn btn-success" @click="currentCalc(false)">
              <font-awesome-icon icon="arrow-left" />
            </button>
            <p class="nameMatch">MatchWeek {{currentMatch}}</p>
            <button class="btn btn-success" @click="currentCalc(true)">
              <font-awesome-icon icon="arrow-right" />
            </button>
          </div>
          <div class="vsContainer">
            <p v-for="match in filterMatches" :key="match.id" class="matchs">
              <a class="matchsBox d-flex justify-content-between " @click="routeMatch(match.id)">
                <img class="ml-1"
                  :src="require('@/assets/shields/'+ getLogo(match.equipoLocal))"
                  
                />
                <div id="vs">{{match.equipoLocal}} VS {{match.equipoVisital}}</div>
                <img class="mr-1"
                  :src="require('@/assets/shields/'+ getLogo(match.equipoVisital))"
                  
                />
              </a>
            </p>
          </div>
        </div>
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
import { mapMutations } from "vuex";
import { db } from "@/firebase/init.js";
import firebase from "firebase";
export default {
  name: "MatchWeek",
  data() {
    return {
      matches: [],
      fechas: [],
      cantFechas: [],
      teams: [],
      currentMatch: 1,
      user: null
    };
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
            this.matches.forEach(e => {
              if (this.cantFechas.includes(e.fecha) == false) {
                this.cantFechas.push(e.fecha);
              }
            });
            this.cantFechas.sort();
          })
      );
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    ...mapMutations(["saveMatches"]),
    ...mapMutations(["saveTeams"]),
    ...mapMutations(["getLogo"]),
    getValueKey(array, key) {
      let result = [];
      array.forEach(e =>
        !result.includes(e[key]) ? result.push(e[key]) : null
      );
      return result;
    },
    currentCalc(calc) {
      if (calc == true) {
        if (this.currentMatch > this.cantFechas.length - 1) {
          this.currentMatch = 1;
        } else {
          this.currentMatch++;
        }
      } else {
        if (this.currentMatch <= 1) {
          this.currentMatch = this.cantFechas.length;
        } else {
          this.currentMatch--;
        }
      }
    },
    routeMatch(id) {
      this.$router.push({ path: "match/" + id });
    },
    getLogo(name) {
      var logo = "";
      this.teams.forEach(e => {
        if (e.name === name) {
          logo = e.logo;
        }
      });
      return logo;
    }
  },
  computed: {
    changeCurrent() {
      return (this.currentMatch = this.fechas);
    },
    filterMatches() {
      return this.matches.filter(e => e.fecha === this.currentMatch);
    }
  }
};
</script>
<style scoped>
.matchWeek {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.containerFather{
  margin-top: 8.5vh;
}
.title{
  background: #1a990c;
    background: -webkit-gradient(left top, left bottom, color-stop(0%, #1a990c), color-stop(100%, rgba(0, 0, 0, 0.72)));
    background: -webkit-gradient(linear, left top, left bottom, from(#1a990c), to(rgba(0, 0, 0, 0.72)));
    background: linear-gradient(to bottom, #1a990c 0%, rgba(0, 0, 0, 0.72) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#1a990c", endColorstr="#000000", GradientType=0 );
    height: 11vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 98;
    top: 0vh;
    color: white;
    position: fixed;
   
}
.containerDates {
  display: flex;
  justify-content: space-between;
  padding: 0vw 2vw;
  margin-top: 5vh;
  width: 100vw;
}
.label {
  background-color: rgba(0, 0, 0, 0.589);
  border: rgb(38, 255, 0) solid 0.2vh;
  width: 12vw;
  font-size: 3.5vh;
  align-items: center;
}
label {
  padding: 3%;
  margin: 2%;
  color: white;
}
input[type="radio"] {
  display: none;
}
.nextPrev {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nameMatch {
  color: white;
  border-top-left-radius: 2vh;
  border-top-right-radius: 2vh;
  background-color: rgba(0, 0, 0, 0.657);
  padding: 10px;
  margin: 1vh;
  font-size: 20px;
}
.vsContainer{
  margin-top: 2.5vh;
  height: 70vh;
  text-align: center;
}
.matchs {
  display: flex;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.596);
  border-top: solid 2px rgb(59, 211, 32);
  border-bottom: solid 2px rgb(59, 211, 32);
  height: 12vh;
  font-size: 3vh;
  width: 100%;
}
#vs{
  width: 60vw;
  font-size: 3vh;
  margin: 1px 5px ;
}
img {
  height: 18vw;
  width: 18vw;
}
/* Responsive */
@media (max-width:  641px) and (orientation: landscape) {
  
  .containerDates{
    margin-top: 10vh;
    height: 17vh;
  }
  .label{
    padding: 8px;
    text-align: center;
    height: 14vh;
    font-size: 4.5vh;
  }
  .matchs{
    height: 23vh;
    display: flex;
    justify-content: space-around;
  }
  .vsContainer{
    height: 100vh;
  }
  #vs{
    font-size: 10vh;
    margin-top: 3vh;
  }
  
  
  img{
    height: 8.6vw;
    width: 8.6vw;
  }
  
}
@media (max-width: 812px) and (orientation: landscape) {
  
  .title{
  margin-top: -4.3vh;
  height: 13vh
  }
  .label{
    padding: 11px;
    text-align: center;
    font-size: 6vh;
  }
  .nextPrev{
    margin-top: 3vh;
    margin-bottom: 4vh;
    height: 20vh;
  }
  .nameMatch{
    font-size: 7vh;
  }
  .matchs{
    height: 20vh;
    display: flex;
    justify-content: space-around;
  }
  .vsContainer{
    height: 110vh;
  }
  img{
    height: 9vw;
    width: 9vw;
  }
  #vs{
    font-size: 8vh;
    margin-top: 3vh;
  }
}
@media (max-width: 823px) and (orientation: landscape) {
  
  .title{
  margin-top: -3.9vh;
  height: 13vh
  }
  .label{
    padding: 11px;
    text-align: center;
    font-size: 6vh;
  }
  .nextPrev{
    margin-top: 3vh;
    margin-bottom: 4vh;
    height: 20vh;
  }
  .nameMatch{
    font-size: 7vh;
  }
  .matchs{
    height: 20vh;
    display: flex;
    justify-content: space-around;
  }
  .vsContainer{
    height: 110vh;
  }
  #vs{
    font-size: 7.5vh;
    margin-top: 4vh;
  }
  img{
    width: 9vw;
    height: 9vw;
  }
}
</style>