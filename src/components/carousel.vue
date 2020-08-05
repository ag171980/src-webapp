<template>
  <div class="carousel">
    <div id="backk">
      <div class="container">
        <div class="home d-flex justify-content-center slide-bck-center mb-2">
          <div
            id="carouselExampleIndicators"
            class="carousel slide tamaño d-flex align-items shadow"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active ">
               <img class="d-block tamaño" :src="require('@/assets/news/'+ filterNews[0].image)" :alt="filterNews[0].image" />
                <div class="carousel-caption  d-md-block">
                   <a @click="routeMatch(filterNews[0].id)"><h5>{{filterNews[0].title}}</h5></a>
                </div>
              </div>
              <div class="carousel-item carousel">
                <img class="d-block tamaño" :src="require('@/assets/news/'+ filterNews[1].image)" :alt="filterNews[1].image" />
                <div class="carousel-caption  d-md-block">
                  <a @click="routeMatch(filterNews[1].id)"><h5>{{filterNews[1].title}}</h5></a>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block tamaño" :src="require('@/assets/news/'+ filterNews[2].image)" :alt="filterNews[2].image" />
                <div class="carousel-caption  d-md-block">
                  <a @click="routeMatch(filterNews[2].id)"><h5>{{filterNews[2].title}}</h5></a>
                </div>
              </div>
              
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { db } from "@/firebase/init.js";
export default {
  name: "home",
  data(){
    return{
      news:[],
      date:"" ,
    }
  },
  created(){
     db
        .ref("news")
        .once("value")
        .then(snap => {
          this.news = snap.val();
          this.date = this.getDay()
        })
  },
  methods: {
    routeMatch(id){
      this.$router.push({path: "news/"+id})
    },
     getDay() {
      var today = new Date();
      var dates =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      return dates;
    }
  },
  computed: {
    // filterNews(){
    //   return this.news.filter(e=> e.date <= this.date).sort(function(a,b){return a.date-b.date}) 
    // },
    filterNews() {
      return this.news.filter(e=> e.date <= this.date).sort(function(a,b){return b.date-a.date})
  },
}
}
</script>
<style scoped>
.carousel {
  margin: 10px;
}
.tamaño {
  height: 30vh;
  width: 100%;
}

.shadow {
  -webkit-box-shadow: -4px 46px 57px -3px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: -4px 46px 57px -3px rgba(0, 0, 0, 0.52);
  box-shadow: -4px 46px 57px -3px rgba(0, 0, 0, 0.52);
}
img {
  width: 12vw;
}
/* RESPONSIVE */
@media (min-width: 320px) {
  .tamaño {
    height: 30vh;
  }
}
@media (min-width: 360px) {
  .tamaño {
    height: 40vh;
  }
}
@media (min-width: 540px) {
  .tamaño {
    height: 50vh;
    width: 80vw;
  }
}
@media (min-width: 720px) {
  .tamaño {
    width: 80vw;
  }
}
@media (min-width: 800px) {
  .tamaño {
    width: 80vw;
    height: 53vh;
  }
}
@media (min-width: 1000px) {
  .tamaño {
    width: 80vw;
    height: 70vh;
  }
}
/* animation */
</style>