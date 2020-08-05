<template>
  <div id="back" class="container mb-5">
    <div class="d-flex justify-content-center">
      <div id="inlive" class="mb-2">
        <h2>
          Matches
          <i>
            <img id="redpoint" src="@/assets/redpoint.png" alt="red point" />
          </i>
        </h2>
      </div>
    </div>
    <div class="container" v-for="match in filterMatches" :key="match.id">
      <div class="father">
      <div class="row d-flex">
          <div class="col align-self-center d-flex flex-column flex-nowrap">
            {{getLogo(match.equipoLocal)}}
            <img class="images align-self-center" :src="require('@/assets/shields/'+ logo)" :alt="logo" />
            <p class="align-self-center large">{{match.equipoLocal}}</p>
            <p class="align-self-center small">{{changeName(match.equipoLocal)}}{{initial}}</p>
          </div>
          <div class="col d-flex flex-column flex-wrap">
            <p class="align-self-center">{{match.date}}</p>
            <img class="vs align-self-center" src="@/assets/vs.png" alt="VS" />
            <p class="align-self-center">{{match.horario}}</p>
          </div>
          <div class="col d-flex flex-column flex-wrap">
            {{getLogo(match.equipoVisital)}}
            <img class="images align-self-center" :src="require('@/assets/shields/'+logo)" :alt="logo" />
             <p class="align-self-center large">{{match.equipoVisital}}</p>
            <p class="align-self-center small">{{changeName(match.equipoVisital)}}{{initial}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { db } from "@/firebase/init.js";
export default {
  name: "matchs",
  data() {
    return {
      date: "",
      teams: [],
      matches:[],
      currentMatchWeek:0,
    };
  },
  created() {
    // this.saveTeams(
      db
        .ref("teams")
        .once("value")
        .then(snap => {
          this.teams = snap.val();
          this.saveTeams(snap.val());
        })
    ,
      
        db
          .ref("matches")
          .once("value")
          .then(snap => {
            this.matches = snap.val();
            this.saveMatches(snap.val());
            this.date = this.getDay()
            this.currentMatchWeek = this.getMatchWeek()
             })
      ;
  },
  methods: {
    ...mapMutations(["saveMatches","getLogo","saveTeams","changeName"]),
    
    getDay() {
      var today = new Date();
      var dates =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      return dates;
    },
    getMatchWeek(){
      let aux= 99
      this.matches.forEach(e => {
        if(e.date >= this.date && e.fecha < aux){
          aux = e.fecha
        }
      });
      return aux
    },
  },
  computed:{
    ...mapState(['logo', 'initial']),
    filterMatches() {
      return this.matches.filter(e => e.fecha === this.currentMatchWeek)
    }
    
  }
};
</script>
<style scoped>

p{
  color:white
}
.images {
  width: 9vh;
}
.row {
  margin-bottom: 6vh;
  background-color: rgba(0, 0, 0, 0.589);
  border: rgb(38, 255, 0) solid 0.2vh;
}
.vs {
  width: 10vw;
}
#redpoint {
  width: 2vh;
  align-items: center;
  animation-name: redpoint;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

h2 {
  text-align: center;
  font-size: 16px;
  color: rgb(255, 255, 255);
}
#inlive {
  border: 0.2vh solid rgb(38, 255, 0);
  background-color: rgba(0, 0, 0, 0.698);
  border-radius: 4vh;
  height: 4.2vh;
  width: 25vw;
}
.large{
    display: none;
  }
  .small{
    display:block;
  }
/* RESPONSIVE */
@media screen and (min-width: 750px){
  .large{
    display: block;
  }
  .small{
    display:none;
  }
}
@media (min-width: 300px) and (orientation: landscape){
  #inlive{
   height: 4.3vw;
  }
}
@media (min-width: 300px) {
  
  #inlive {
    width: 100px;
  }
  h2 {
    font-size: 17px;
  }
}
@media (min-width: 425px) {
  .tamaño {
    height: 40vh;
    width: 80vw;
  }
  #inlive {
    width: 100px;
  }
 
  h2 {
    font-size: 18px;
  }
  .row {
    width: 425px;
    border-radius: 25px;
  }
  .father {
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 540px) and (orientation: landscape) {
  .images {
    height: 80px;
    width: 80px;
  }
  .row {
    width: 900px;
    height: 120px;
    border-radius: 25px;
  }
 
}
@media (min-width: 736px) and (orientation: landscape) {
  #inlive {
    width: 100px;
    height: 30px;
  }
  h2 {
    font-size: 22px;
  }
  .row {
    width: 900px;
    height: 120px;
    border-radius: 25px;
  }
  .images {
    height: 90px;
    width: 90px;
  }
  .vs {
    width: 60px;
  }
  .father {
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 800px) {
  #redpoint {
    width: 13px;
  }
  #inlive {
    width: 120px;
    height: 30px;
  }
  h2 {
    font-size: 22px;
  }
  .row {
    align-items: center;
    width: 900px;
    height: 150px;
    border-radius: 25px;
  }
  .images {
    height: 100px;
    width: 100px;
  }
  .vs {
    width: 70px;
  }
  .father {
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 1440px) {
  #inlive {
    width: 100px;
    height: 70px;
  }
}
/* animation */
@keyframes redpoint {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(150deg);
  }
  100% {
    transform: rotate(150deg);
  }
}
</style>