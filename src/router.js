import Vue from "vue";
import Router from "vue-router";
import Chat from "@/views/Chat";
import Security from "@/views/Security";
import Login from "@/views/security/Login";
import Register from "@/views/security/Register";
import Channel from "@/views/chat/Channel";
import authGuard from "@/router/guards/auth";

Vue.use(Router);

const router = new Router({
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "chat",
      component: Chat,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "channels/:channel",
          name: "channel",
          component: Channel,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: "/s",
      component: Security,
      redirect: "/s/login",
      children: [
        {
          path: "login",
          name: "login",
          component: Login,
          meta: {
            guest: true
          }
        },
        {
          path: "register",
          name: "register",
          component: Register,
          meta: {
            guest: true
          }
        }
      ]
    }
  ]
});

router.beforeEach(authGuard);

export default router;
