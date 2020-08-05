<template>
  <div class="container asd">
    <h2>ABOUT</h2>
    <div class="content-boxes">
      <div class="box">
        <div class="logo">
          <font-awesome-icon class="icon" icon="bullseye" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Mission</h3>
          </div>
          <div class="info">
            <p>
              To support young athletes living in Chicago's northside
              neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and
              practice skills related to the game of soccer, specifically those skills around team cooperation and
              good sportsmanship
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="logo">
          <font-awesome-icon class="icon" icon="eye" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Vision</h3>
          </div>
          <div class="info">
            <p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="logo">
          <font-awesome-icon class="icon" icon="info-circle" />
        </div>
        <div class="content">
          <div class="title">
            <h3>General Information</h3>
          </div>
          <div class="info">
            <p>The Northside Youth Soccer League was estabilished in 1996 to provide athletes residing in Chicago´s notthside neighborhoods an environment in which to learn and play soccer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
export default {
  name: "infogame",
  data() {
    return {
      user: null
    };
  },
  created() {
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
* {
  margin: 0;
  padding: 0;
}
.container {
  h2 {
    text-shadow: 4px 4px 21px rgba(69, 152, 209, 1);
    background: rgba(26, 153, 12, 1);
    background: -moz-linear-gradient(
      top,
      rgba(26, 153, 12, 1) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, rgba(26, 153, 12, 1)),
      color-stop(100%, rgba(0, 0, 0, 0.72))
    );
    background: -webkit-linear-gradient(
      top,
      rgba(26, 153, 12, 1) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
    background: -o-linear-gradient(
      top,
      rgba(26, 153, 12, 1) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
    background: -ms-linear-gradient(
      top,
      rgba(26, 153, 12, 1) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(26, 153, 12, 1) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a990c', endColorstr='#000000', GradientType=0 );
    height: 9vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 98;
    top: 0;
    color: white;
  }
  h3 {
    margin-top: 2vh;
    text-shadow: 4px 4px 21px rgba(69, 152, 209, 1);
    font-size: 5vh;
  }
  p {
    font-size: 2.2vh;
    margin-top: 2vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -20vh;
  padding: 10vh 0 12vh 0;
  .content-boxes {
    margin-top: 20vh;
    .box {
      background: rgba(6, 6, 43, 1);
      background: -moz-linear-gradient(
        top,
        rgba(6, 6, 43, 1) 0%,
        rgba(6, 6, 43, 0.87) 42%,
        rgba(16, 122, 16, 0.69) 100%
      );
      background: -webkit-gradient(
        left top,
        left bottom,
        color-stop(0%, rgba(6, 6, 43, 1)),
        color-stop(42%, rgba(6, 6, 43, 0.87)),
        color-stop(100%, rgba(16, 122, 16, 0.69))
      );
      background: -webkit-linear-gradient(
        top,
        rgba(6, 6, 43, 1) 0%,
        rgba(6, 6, 43, 0.87) 42%,
        rgba(16, 122, 16, 0.69) 100%
      );
      background: -o-linear-gradient(
        top,
        rgba(6, 6, 43, 1) 0%,
        rgba(6, 6, 43, 0.87) 42%,
        rgba(16, 122, 16, 0.69) 100%
      );
      background: -ms-linear-gradient(
        top,
        rgba(6, 6, 43, 1) 0%,
        rgba(6, 6, 43, 0.87) 42%,
        rgba(16, 122, 16, 0.69) 100%
      );
      background: linear-gradient(
        to bottom,
        rgba(6, 6, 43, 1) 0%,
        rgba(6, 6, 43, 0.87) 42%,
        rgba(16, 122, 16, 0.69) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#06062b', endColorstr='#107a10', GradientType=0 );

      position: relative;
      z-index: 0;
      border-radius: 10px;
      color: white;
      width: 90vw;
      height: 45vh;
      margin: 2vh 0;

      padding: 10px;
      text-align: center;

      &:nth-child(2) {
        .content {
          top: 60px;
        }
      }
      .logo {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        z-index: 2;
        height: 100%;
        width: 100%;

        background: rgba(7, 7, 61, 1);
        background: -moz-linear-gradient(
          top,
          rgba(7, 7, 61, 1) 0%,
          rgba(18, 26, 11, 1) 100%
        );
        background: -webkit-gradient(
          left top,
          left bottom,
          color-stop(0%, rgba(7, 7, 61, 1)),
          color-stop(100%, rgba(18, 26, 11, 1))
        );
        background: -webkit-linear-gradient(
          top,
          rgba(7, 7, 61, 1) 0%,
          rgba(18, 26, 11, 1) 100%
        );
        background: -o-linear-gradient(
          top,
          rgba(7, 7, 61, 1) 0%,
          rgba(18, 26, 11, 1) 100%
        );
        background: -ms-linear-gradient(
          top,
          rgba(7, 7, 61, 1) 0%,
          rgba(18, 26, 11, 1) 100%
        );
        background: linear-gradient(
          to bottom,
          rgba(7, 7, 61, 1) 0%,
          rgba(18, 26, 11, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#07073d', endColorstr='#121a0b', GradientType=0 );

        box-shadow: 0px 2px 20px -1px rgba(0, 0, 0, 0.75);
        transition: 0.5s;
        font-size: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        &:hover {
          top: -20px;

          left: calc(50% - 40px);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #4b894b;
          transition: 0.5s;
          font-size: 30px;
        }
      }
      .content {
        position: relative;
        z-index: 1;
        top: 40px;

        text-align: center;

        font-size: 13px;
        box-sizing: border-box;
      }
    }
  }
}
/*
.logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f00;
      transition: 0.5s;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 60px;
      z-index: 1;
      &:hover {
        top: -20px;

        left: calc(50% - 40px);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: black;

        font-size: 30px;
      }
    }
    .content {
      position: absolute;
      top: 30px;
      height: calc(100% -100px);
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    }*/
</style>