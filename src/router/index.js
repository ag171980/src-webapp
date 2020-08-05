import Vue from "vue";
import VueRouter from "vue-router";
import slider from '@/views/slider.vue'
import Matches from "../views/Matches.vue";
import Chat from "../views/Chat.vue";
import Teams from "../views/Teams.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Register from "../views/register.vue";
import Login from "../views/login.vue";
import Dashboard from "../views/Dashboard.vue";
import Match from "../views/Match.vue";
import Profile from '../views/Profile.vue';
import News from "../views/News.vue";
import Team from "../views/Team.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/matches",
    name: "matches",
    component: Matches
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat
  },
  {
    path: "/teams",
    name: "teams",
    component: Teams
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/match/:id",
    name: "Match",
    component: Match
  },
  {
    path:'/messages',
    name:'messages',
    component: slider
  },
  {
    path:'/profile',
    name:'profile',
    component: Profile
  },
  {
    path: "/news/:id",
    name: "News",
    component: News
  },
  {
    path: "/team/:id",
    name: "Team",
    component: Team
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requiresAuth)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name: "login"
      });
    }
  } else {
    next();
  }
});

export default router;
