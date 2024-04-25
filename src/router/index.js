import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import AxiosDemoView from '../views/AxiosDemoView.vue'
import AxiosTriviaQuiz from '../views/AxiosTriviaQuiz.vue'
import AboutVuetify from '../views/AboutVuetify.vue'
import AboutProject from '../views/AboutProject.vue'
import Register from '../views/Register.vue'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/Dashboard.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView,
      meta:{
        requiresAuth: true,
      },
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: true,
      },
      },
      

    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView,
    meta:{
      requiresAuth: true,
    },
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMeView,
      meta:{
        requiresAuth: true,
      },
      },
      {
        path: '/axiosDemo',
        name: 'axiosDemo',
        component: AxiosDemoView,
        meta:{
          requiresAuth: true,
        },
      },      
      {
        path: '/axiosQuiz',
        name: 'axiosQuiz',
        component: AxiosTriviaQuiz,
        meta:{
          requiresAuth: true,
        },
        
      },              
      {
        path: '/aboutVuetify',
        name: 'aboutVuetify',
        component: AboutVuetify,
        meta:{
          requiresAuth: true,
        },
      },              
      {
        path: '/aboutProject',
        name: 'aboutProject',
        component: AboutProject,
        meta:{
          requiresAuth: true,
        },
      },    
    {         
      path: '/register',
      name: 'register',
      component: Register
    },              
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth: true,
      },
    },    
  ]
})
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject  
    );
  });
};
router.beforeEach(async(to,from,next)=>{
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    } else {
      alert("You need to sign in in order for you to access this module!");
      next("/");
    }
  }else{
    next();
  }
});
export default router
