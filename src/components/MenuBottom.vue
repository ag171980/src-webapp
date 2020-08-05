<template>
  <div class="none">
    <div class="menu">
      <div class="navbarBottom">
        <template v-if="user">
          <template v-if="user.email == 'admin@gmail.com'">
            <div class="nav-item">
              <router-link to="/dashboard">
                <font-awesome-icon icon="home" class="text-light" />
              </router-link>
            </div>
            <div class="nav-item">
              <router-link to="/matches">
                <font-awesome-icon icon="futbol" class="text-light" />
              </router-link>
            </div>

            <div class="nav-item">
              <router-link to="/messages">
                <font-awesome-icon icon="headset" class="text-light" />
              </router-link>
            </div>
            <div class="nav-item">
              <a @click.prevent="logout">
                <font-awesome-icon icon="sign-out-alt" class="text-light" />
              </a>
            </div>
          </template>
          <template v-else>
            <div class="nav-item">
              <router-link to="/dashboard">
                <font-awesome-icon icon="home" class="text-light" />
              </router-link>
            </div>
            <div class="nav-item">
              <router-link to="/matches">
                <font-awesome-icon icon="futbol" class="text-light" />
              </router-link>
            </div>
            <div class="nav-item">
              <a @click.prevent="logout">
                <font-awesome-icon icon="sign-out-alt" class="text-light" />
              </a>
            </div>
          </template>
        </template>

        <template v-else>
          <div class="nav-item">
            <router-link to="/register">
              <font-awesome-icon icon="user-plus" class="text-light" />
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/">
              <font-awesome-icon icon="user-plus" class="text-light" />
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
export default {
  name: "MenuBottom",
  data() {
    return {
      user: null,
      email: ""
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
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
  }
};
</script>
<style lang="scss" scoped>
.menu {
  height: 12vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  bottom: 0;
  background: rgba(9, 36, 4, 0.82);
  background: -moz-linear-gradient(
    top,
    rgba(9, 36, 4, 0.82) 0%,
    rgba(26, 153, 20, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(9, 36, 4, 0.82)),
    color-stop(100%, rgba(26, 153, 20, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(9, 36, 4, 0.82) 0%,
    rgba(26, 153, 20, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(9, 36, 4, 0.82) 0%,
    rgba(26, 153, 20, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(9, 36, 4, 0.82) 0%,
    rgba(26, 153, 20, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(9, 36, 4, 0.82) 0%,
    rgba(26, 153, 20, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#092404', endColorstr='#1a9914', GradientType=0 );
  display: flex;
  flex-direction: column;
  justify-content: center;
  .navbarBottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .nav-item {
      height: 12vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      a {
        color: white;
        text-decoration: none;
      }
      &:hover {
        background-color: #89d573;
        transition: all 0.2s;
        cursor: pointer;
      }
    }
  }
}
</style>