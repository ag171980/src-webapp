<template>
  <div id="back">
    <div class="d-flex flex-column align-items-center  flex-wrap ">
      <div>
        <img id="log" :src="require('@/assets/shields/'+teams[$route.params.id-1].logo)" height="100px" />
      </div>
      <h2>{{teams[$route.params.id-1].name}}</h2>
    </div>
    <div id="transparent" class="d-flex flex-column align-items-center flex-wrap">
      <h5 class="min">{{teams[$route.params.id-1].fullname}}</h5>
      <h5 class="max">Full Name: {{teams[$route.params.id-1].fullname}}</h5>
      <h5>Nickname: {{teams[$route.params.id-1].nickname}}</h5>
      <h5>Foundation: {{teams[$route.params.id-1].fondation}}</h5>
      <h5>Stadium: {{teams[$route.params.id-1].stadium}}</h5>
    </div>
    <div id="cont">
      <img
        id="img"
        :src="require('@/assets/stadiums/'+teams[$route.params.id-1].img)"
        width="350px"
      />
    </div>
      </div>
</template>

<script>
import { db } from "@/firebase/init.js";
export default {
  data() {
    return {
      teams: []
    };
  },
  created() {
    db.ref("teams")
      .once("value")
      .then(snap => {
        this.teams = snap.val();
      });
  }
};
</script>
<style scoped>
#back {
  background-image: url("../assets/backmobile.jpg");
  background-position: center;
  background-size: cover;
}
#cont {
  display: flex;
  flex-direction: column;
}
#img {
  align-self: center;
  margin-bottom: 100px;
}
#transparent{
    border: solid 5px #5fde47;
    margin: 20px;
    background: rgba(255, 255, 255, 0.418);
}
h2{
    color: white;
}
h5 {
  color: black;
}
.max {
  display: none;
}
.min {
  display: block;
}
#log{
    margin-top: 20px;
}
@media screen and (min-width: 750px) {
  .max {
    display: block;
  }
  .min {
    display: none;
  }
}
</style>