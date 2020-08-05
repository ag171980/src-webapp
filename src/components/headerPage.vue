<template>
  <div class="about">
    <header class="navbar navbar-expand-lg navbar-dark toggled asd" id="wrapper">
      <!--Dropdown  que contiene el menu que se desliza de costado -->
      <!-- <img
        src="@/assets/logo.png"
        style="background-size: cover;background-repeat: no-repeat;background-position:center;"
        height="80"
        width="80"
        alt
      /> -->

      <div class="dropdown">
        <button class="btn dropbtn menu-toggle boton text-light">
          <font-awesome-icon icon="align-left" />
        </button>
        <div id="sidebar-wrapper" class="abouts">
          <div class="sidebar-header">
            <img
              src="@/assets/logo.png"
              class="logoside"
              style="padding:10px"
              height="100"
              width="100"
              alt
            />
            <button class="button-menu btn  dropbtn menu-toggle boton text-light">
              <font-awesome-icon icon="times" />
            </button>
          </div>
          
          <div class="sidebar-content">
            <router-link class="menu-side text-center" to="/profile" >My Profile</router-link>
            <router-link class="menu-side text-center" to="/teams">Teams</router-link>
            <router-link class="menu-side text-center" to="/about">About</router-link>
            <router-link class="menu-side text-center" to="/contact">Contact</router-link>
          </div>
          <div class="sidebar-social text-light">
            <div class="icon-social">
              <img src="@/assets/social/twitter.png" height="50" alt />
            </div>
            <div class="icon-social">
              <img src="@/assets/social/fb.png" height="50" alt />
            </div>
            <div class="icon-social">
              <img src="@/assets/social/ig.png" height="50" alt />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import $ from "jquery";
import firebase from 'firebase';
export default {
  name: "headerPage",
  data(){
    return{
      user:null
    }
  },
  mounted() {
    $(document).ready(function() {
      $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });
    });
  },created(){
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
}
a{
  text-decoration: none;
  
}
.abouts {
  display: flex;
  position: fixed;
  z-index: 99;
}
.asd{
  top: 0;
  display:flex;
  position: fixed;
  z-index:99;
  width: 100%;
  
}
.color {
  background-color: #0c4600;
  z-index: 3;
}
.user {
  background-color: white;
  border: 2px solid black;
  text-align: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  text-align: center;
  border: 5px solid black;
  border-radius: 70%;
  height: 150px;
  width: 150px;
}
.nav-item {
  font-size: 23px;
  padding: 10px;
}
.nav-item:hover {
  border-bottom: 3px solid #5fde47;
  transition: all 0.2s;
}
.arrow {
  position: absolute;
  left: 1vw;
  top: 1vh;
}
.arrow:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
}
.user:hover,
.menu:hover {
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  color: white;
}
.router-link-active {
  border-bottom: 3px solid #5fde47;
  transition: all 0.2s;
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.dropdown {
  position: absolute;
  top: 2vw;
  left: 2vw;
  z-index: 999;
}
#sidebar-wrapper {
  height: 103vh;
  min-height: 100vh;
  position: absolute;
  left: -3vw;
  top: -2vh;
  width: 80vw;
  transition: margin 0.25s;
  
background: rgba(3,6,41,0.86);
background: -moz-linear-gradient(-45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(3,6,41,0.86)), color-stop(100%, rgba(0,0,0,0.94)));
background: -webkit-linear-gradient(-45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -o-linear-gradient(-45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -ms-linear-gradient(-45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: linear-gradient(135deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#030629', endColorstr='#000000', GradientType=1 );
  
  display: none;
  .sidebar-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    
    background: rgba(3,6,41,0.86);
background: -moz-linear-gradient(45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(3,6,41,0.86)), color-stop(100%, rgba(0,0,0,0.94)));
background: -webkit-linear-gradient(45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -o-linear-gradient(45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -ms-linear-gradient(45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: linear-gradient(45deg, rgba(3,6,41,0.86) 0%, rgba(0,0,0,0.94) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#030629', endColorstr='#000000', GradientType=1 );
    
    border-bottom: 2px solid #5fde47;
    -webkit-box-shadow: 2px 4px 32px -13px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 4px 32px -13px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 4px 32px -13px rgba(0, 0, 0, 0.75);
    height: 25.5vh;
    .button-menu {
      height: auto;
      position: absolute;
      right: 4vw;
      top: 5vh;
    }
  }
}
.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 55vh;
  margin-top: 10vh;
  .menu-side {
    background-color: black;
    width: 75vw;
    color: white;
    margin: 3vh 0;
    font-size: 25px;
    border: 2px solid #a3fb3e;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
.sidebar-social {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .icon-social {
    height: 10vh;
    width: 15vw;
  }
}
.sidebar-content .sidebar-item {
  color: white;
  padding: 10px 10px;
}
@media (min-width: 200px) {
  #sidebar-wrapper {
    margin-left: 0;
    display: inline-block;
  }
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
  #wrapper.toggled #sidebar-wrapper {
    margin-left: -30rem;
  }
}
@media (max-width: 767px) and (orientation: landscape){
  .icon-social{
    img{
     height: 11vh;
     padding-bottom:2vh;
  }
   
  }
   .about {
    .dropdown {
      #sidebar-wrapper {
        top: -4vh;
        width: 40vw;
        .sidebar-content{
          .menu-side{
            width: 30vw;
            
          }
        }
      }
    }
  }
  .sidebar-header{
    img{
      width:80px;
      height: 80px;
    }
  }
}
@media (min-width: 768px) and (orientation: landscape){
  .icon-social{
    img{
    margin:0 0 0 20px;
     height: 11vh;
     padding-bottom:2vh;
  }
   
  }
   .about {
    .dropdown {
      #sidebar-wrapper {
        top: -4vh;
        width: 40vw;
        .sidebar-content{
          .menu-side{
            width: 30vw;
            
          }
        }
      }
    }
  }
  .sidebar-header{
    img{
      width:80px;
      height: 80px;
    }
  }
}
@media (max-width: 1280px) {
  .about {
    .dropdown {
      #sidebar-wrapper {
        top: -4vh;
        width: 47vw;
        .sidebar-content{
          .menu-side{
            width: 30vw;
            
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .about {
    .dropdown {
      #sidebar-wrapper {
        
        width: 60vw;
        .sidebar-content{
          .menu-side{
            width: 50vw;
          }
        }
        
      }
    }
  }
}
.sidebar-content{ 
  .menu-side{
    border-color: #5fde47;
      background: rgba(6,41,3,0.86);
background: -moz-linear-gradient(-45deg, rgba(6,41,3,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(6,41,3,0.86)), color-stop(100%, rgba(0,0,0,0.94)));
background: -webkit-linear-gradient(-45deg, rgba(6,41,3,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -o-linear-gradient(-45deg, rgba(6,41,3,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: -ms-linear-gradient(-45deg, rgba(6,41,3,0.86) 0%, rgba(0,0,0,0.94) 100%);
background: linear-gradient(135deg, rgba(6,41,3,0.86) 0%, rgba(0,0,0,0.94) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#062903', endColorstr='#000000', GradientType=1 );
      
}
}
</style>