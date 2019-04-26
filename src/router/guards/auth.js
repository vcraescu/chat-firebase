import authService from "@/services/auth";

export default async (to, from, next) => {
  if (to.matched.some(record => !!record.meta.guest)) {
    return handleAuthGuestRoute(next);
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    return handleAuthProtectedRoute(next);
  }

  next();
};

async function handleAuthGuestRoute(next) {
  let authenticated = await authService.isAuthenticated();
  if (authenticated) {
    next({ name: "chat" });
    return;
  }

  next();
}

async function handleAuthProtectedRoute(next) {
  let authenticated = await authService.isAuthenticated();
  if (authenticated) {
    next();
    return;
  }

  next({ name: "login" });
}
