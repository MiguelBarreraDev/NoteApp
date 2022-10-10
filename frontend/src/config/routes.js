import { lazy } from 'react'

export const PublicRoutes = {
  HOME: {
    name: 'Home',
    key: 'home',
    route: '/',
    Component: lazy(() => import('@/pages/Home/Home'))
  },
  LOGIN: {
    name: 'Log in',
    key: 'login',
    route: '/login',
    Component: lazy(() => import('@/pages/Login/Login'))
  },
  SIGNUP: {
    name: 'Sign up',
    key: 'signup',
    route: '/sign-up',
    Component: lazy(() => import('@/pages/SignUp/SignUp'))
  }
}

export const PrivateRoutes = {
  PRIVATE: {
    name: 'Auth',
    key: 'auth',
    route: '/auth',
    Component: lazy(() => import('@/pages/Private/Private'))
  },
  PROFILE: {
    name: 'Profile',
    key: 'profile',
    route: 'profile',
    Component: lazy(() => import('@/pages/Private/Profile/Profile'))
  },
  DASHBOARD: {
    name: 'Dashboard',
    key: 'dashboard',
    route: 'dashboard',
    Component: lazy(() => import('@/pages/Private/Dashboard/Dashboard'))
  }
}
