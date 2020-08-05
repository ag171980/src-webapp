<template>
    <div class="back">
        <div>
        <img class="d-block tamaño" :src="require('@/assets/news/'+ news[$route.params.id-1].image)" :alt="news[$route.params.id-1].image" />
        <h1>{{news[$route.params.id-1].title}}</h1>
        </div>
    <div class="text">
        <p>{{news[$route.params.id-1].p1}}</p>
        <p>{{news[$route.params.id-1].p2}}</p>
        <p>{{news[$route.params.id-1].p3}}</p>
    </div>
    <div class="space"></div>
    </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { db } from "@/firebase/init.js";
export default {
    data(){
        return{
            news:[]
        }
    },
    created(){
     db
        .ref("news")
        .once("value")
        .then(snap => {
          this.news = snap.val();
        })
  }
}
</script>
<style scoped>
h1{
  color: white;
}
.back {
  background-image: url("../assets/backmobile.jpg");
  background-position: center;
  background-size: cover;
}
img {
  width: 100vw;
}
.text{
  margin: 20px;
  border: solid 5px #5fde47;
  background: rgba(255, 255, 255, 0.473);
  padding: 20px;
  color: black;
}
.space{
  height: 100px;
}
  h1{
    text-align: center;
  }
</style>