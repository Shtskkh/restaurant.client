/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSuppliesRouteImport } from './routes/_auth/supplies/route'
import { Route as AuthStaffRouteImport } from './routes/_auth/staff/route'
import { Route as AuthOrdersRouteImport } from './routes/_auth/orders/route'
import { Route as AuthDishesRouteImport } from './routes/_auth/dishes/route'
import { Route as AuthDashboardRouteImport } from './routes/_auth/dashboard/route'
import { Route as AuthSuppliesIndexImport } from './routes/_auth/supplies/index'
import { Route as AuthStaffIndexImport } from './routes/_auth/staff/index'
import { Route as AuthOrdersIndexImport } from './routes/_auth/orders/index'
import { Route as AuthDishesIndexImport } from './routes/_auth/dishes/index'
import { Route as AuthDashboardIndexImport } from './routes/_auth/dashboard/index'
import { Route as AuthStaffIdRouteImport } from './routes/_auth/staff_/$id/route'
import { Route as AuthOrdersIdRouteImport } from './routes/_auth/orders_/$id/route'
import { Route as AuthDishesIdRouteImport } from './routes/_auth/dishes_/$id/route'
import { Route as AuthStaffIdIndexImport } from './routes/_auth/staff_/$id/index'
import { Route as AuthOrdersIdIndexImport } from './routes/_auth/orders_/$id/index'
import { Route as AuthDishesIdIndexImport } from './routes/_auth/dishes_/$id/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSuppliesRouteRoute = AuthSuppliesRouteImport.update({
  id: '/supplies',
  path: '/supplies',
  getParentRoute: () => AuthRoute,
} as any)

const AuthStaffRouteRoute = AuthStaffRouteImport.update({
  id: '/staff',
  path: '/staff',
  getParentRoute: () => AuthRoute,
} as any)

const AuthOrdersRouteRoute = AuthOrdersRouteImport.update({
  id: '/orders',
  path: '/orders',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDishesRouteRoute = AuthDishesRouteImport.update({
  id: '/dishes',
  path: '/dishes',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDashboardRouteRoute = AuthDashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSuppliesIndexRoute = AuthSuppliesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthSuppliesRouteRoute,
} as any)

const AuthStaffIndexRoute = AuthStaffIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthStaffRouteRoute,
} as any)

const AuthOrdersIndexRoute = AuthOrdersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthOrdersRouteRoute,
} as any)

const AuthDishesIndexRoute = AuthDishesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthDishesRouteRoute,
} as any)

const AuthDashboardIndexRoute = AuthDashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthDashboardRouteRoute,
} as any)

const AuthStaffIdRouteRoute = AuthStaffIdRouteImport.update({
  id: '/staff_/$id',
  path: '/staff/$id',
  getParentRoute: () => AuthRoute,
} as any)

const AuthOrdersIdRouteRoute = AuthOrdersIdRouteImport.update({
  id: '/orders_/$id',
  path: '/orders/$id',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDishesIdRouteRoute = AuthDishesIdRouteImport.update({
  id: '/dishes_/$id',
  path: '/dishes/$id',
  getParentRoute: () => AuthRoute,
} as any)

const AuthStaffIdIndexRoute = AuthStaffIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthStaffIdRouteRoute,
} as any)

const AuthOrdersIdIndexRoute = AuthOrdersIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthOrdersIdRouteRoute,
} as any)

const AuthDishesIdIndexRoute = AuthDishesIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthDishesIdRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/dashboard': {
      id: '/_auth/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthDashboardRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dishes': {
      id: '/_auth/dishes'
      path: '/dishes'
      fullPath: '/dishes'
      preLoaderRoute: typeof AuthDishesRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/orders': {
      id: '/_auth/orders'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof AuthOrdersRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/staff': {
      id: '/_auth/staff'
      path: '/staff'
      fullPath: '/staff'
      preLoaderRoute: typeof AuthStaffRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/supplies': {
      id: '/_auth/supplies'
      path: '/supplies'
      fullPath: '/supplies'
      preLoaderRoute: typeof AuthSuppliesRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dishes_/$id': {
      id: '/_auth/dishes_/$id'
      path: '/dishes/$id'
      fullPath: '/dishes/$id'
      preLoaderRoute: typeof AuthDishesIdRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/orders_/$id': {
      id: '/_auth/orders_/$id'
      path: '/orders/$id'
      fullPath: '/orders/$id'
      preLoaderRoute: typeof AuthOrdersIdRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/staff_/$id': {
      id: '/_auth/staff_/$id'
      path: '/staff/$id'
      fullPath: '/staff/$id'
      preLoaderRoute: typeof AuthStaffIdRouteImport
      parentRoute: typeof AuthImport
    }
    '/_auth/dashboard/': {
      id: '/_auth/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof AuthDashboardIndexImport
      parentRoute: typeof AuthDashboardRouteImport
    }
    '/_auth/dishes/': {
      id: '/_auth/dishes/'
      path: '/'
      fullPath: '/dishes/'
      preLoaderRoute: typeof AuthDishesIndexImport
      parentRoute: typeof AuthDishesRouteImport
    }
    '/_auth/orders/': {
      id: '/_auth/orders/'
      path: '/'
      fullPath: '/orders/'
      preLoaderRoute: typeof AuthOrdersIndexImport
      parentRoute: typeof AuthOrdersRouteImport
    }
    '/_auth/staff/': {
      id: '/_auth/staff/'
      path: '/'
      fullPath: '/staff/'
      preLoaderRoute: typeof AuthStaffIndexImport
      parentRoute: typeof AuthStaffRouteImport
    }
    '/_auth/supplies/': {
      id: '/_auth/supplies/'
      path: '/'
      fullPath: '/supplies/'
      preLoaderRoute: typeof AuthSuppliesIndexImport
      parentRoute: typeof AuthSuppliesRouteImport
    }
    '/_auth/dishes_/$id/': {
      id: '/_auth/dishes_/$id/'
      path: '/'
      fullPath: '/dishes/$id/'
      preLoaderRoute: typeof AuthDishesIdIndexImport
      parentRoute: typeof AuthDishesIdRouteImport
    }
    '/_auth/orders_/$id/': {
      id: '/_auth/orders_/$id/'
      path: '/'
      fullPath: '/orders/$id/'
      preLoaderRoute: typeof AuthOrdersIdIndexImport
      parentRoute: typeof AuthOrdersIdRouteImport
    }
    '/_auth/staff_/$id/': {
      id: '/_auth/staff_/$id/'
      path: '/'
      fullPath: '/staff/$id/'
      preLoaderRoute: typeof AuthStaffIdIndexImport
      parentRoute: typeof AuthStaffIdRouteImport
    }
  }
}

// Create and export the route tree

interface AuthDashboardRouteRouteChildren {
  AuthDashboardIndexRoute: typeof AuthDashboardIndexRoute
}

const AuthDashboardRouteRouteChildren: AuthDashboardRouteRouteChildren = {
  AuthDashboardIndexRoute: AuthDashboardIndexRoute,
}

const AuthDashboardRouteRouteWithChildren =
  AuthDashboardRouteRoute._addFileChildren(AuthDashboardRouteRouteChildren)

interface AuthDishesRouteRouteChildren {
  AuthDishesIndexRoute: typeof AuthDishesIndexRoute
}

const AuthDishesRouteRouteChildren: AuthDishesRouteRouteChildren = {
  AuthDishesIndexRoute: AuthDishesIndexRoute,
}

const AuthDishesRouteRouteWithChildren = AuthDishesRouteRoute._addFileChildren(
  AuthDishesRouteRouteChildren,
)

interface AuthOrdersRouteRouteChildren {
  AuthOrdersIndexRoute: typeof AuthOrdersIndexRoute
}

const AuthOrdersRouteRouteChildren: AuthOrdersRouteRouteChildren = {
  AuthOrdersIndexRoute: AuthOrdersIndexRoute,
}

const AuthOrdersRouteRouteWithChildren = AuthOrdersRouteRoute._addFileChildren(
  AuthOrdersRouteRouteChildren,
)

interface AuthStaffRouteRouteChildren {
  AuthStaffIndexRoute: typeof AuthStaffIndexRoute
}

const AuthStaffRouteRouteChildren: AuthStaffRouteRouteChildren = {
  AuthStaffIndexRoute: AuthStaffIndexRoute,
}

const AuthStaffRouteRouteWithChildren = AuthStaffRouteRoute._addFileChildren(
  AuthStaffRouteRouteChildren,
)

interface AuthSuppliesRouteRouteChildren {
  AuthSuppliesIndexRoute: typeof AuthSuppliesIndexRoute
}

const AuthSuppliesRouteRouteChildren: AuthSuppliesRouteRouteChildren = {
  AuthSuppliesIndexRoute: AuthSuppliesIndexRoute,
}

const AuthSuppliesRouteRouteWithChildren =
  AuthSuppliesRouteRoute._addFileChildren(AuthSuppliesRouteRouteChildren)

interface AuthDishesIdRouteRouteChildren {
  AuthDishesIdIndexRoute: typeof AuthDishesIdIndexRoute
}

const AuthDishesIdRouteRouteChildren: AuthDishesIdRouteRouteChildren = {
  AuthDishesIdIndexRoute: AuthDishesIdIndexRoute,
}

const AuthDishesIdRouteRouteWithChildren =
  AuthDishesIdRouteRoute._addFileChildren(AuthDishesIdRouteRouteChildren)

interface AuthOrdersIdRouteRouteChildren {
  AuthOrdersIdIndexRoute: typeof AuthOrdersIdIndexRoute
}

const AuthOrdersIdRouteRouteChildren: AuthOrdersIdRouteRouteChildren = {
  AuthOrdersIdIndexRoute: AuthOrdersIdIndexRoute,
}

const AuthOrdersIdRouteRouteWithChildren =
  AuthOrdersIdRouteRoute._addFileChildren(AuthOrdersIdRouteRouteChildren)

interface AuthStaffIdRouteRouteChildren {
  AuthStaffIdIndexRoute: typeof AuthStaffIdIndexRoute
}

const AuthStaffIdRouteRouteChildren: AuthStaffIdRouteRouteChildren = {
  AuthStaffIdIndexRoute: AuthStaffIdIndexRoute,
}

const AuthStaffIdRouteRouteWithChildren =
  AuthStaffIdRouteRoute._addFileChildren(AuthStaffIdRouteRouteChildren)

interface AuthRouteChildren {
  AuthDashboardRouteRoute: typeof AuthDashboardRouteRouteWithChildren
  AuthDishesRouteRoute: typeof AuthDishesRouteRouteWithChildren
  AuthOrdersRouteRoute: typeof AuthOrdersRouteRouteWithChildren
  AuthStaffRouteRoute: typeof AuthStaffRouteRouteWithChildren
  AuthSuppliesRouteRoute: typeof AuthSuppliesRouteRouteWithChildren
  AuthDishesIdRouteRoute: typeof AuthDishesIdRouteRouteWithChildren
  AuthOrdersIdRouteRoute: typeof AuthOrdersIdRouteRouteWithChildren
  AuthStaffIdRouteRoute: typeof AuthStaffIdRouteRouteWithChildren
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthDashboardRouteRoute: AuthDashboardRouteRouteWithChildren,
  AuthDishesRouteRoute: AuthDishesRouteRouteWithChildren,
  AuthOrdersRouteRoute: AuthOrdersRouteRouteWithChildren,
  AuthStaffRouteRoute: AuthStaffRouteRouteWithChildren,
  AuthSuppliesRouteRoute: AuthSuppliesRouteRouteWithChildren,
  AuthDishesIdRouteRoute: AuthDishesIdRouteRouteWithChildren,
  AuthOrdersIdRouteRoute: AuthOrdersIdRouteRouteWithChildren,
  AuthStaffIdRouteRoute: AuthStaffIdRouteRouteWithChildren,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard': typeof AuthDashboardRouteRouteWithChildren
  '/dishes': typeof AuthDishesRouteRouteWithChildren
  '/orders': typeof AuthOrdersRouteRouteWithChildren
  '/staff': typeof AuthStaffRouteRouteWithChildren
  '/supplies': typeof AuthSuppliesRouteRouteWithChildren
  '/dishes/$id': typeof AuthDishesIdRouteRouteWithChildren
  '/orders/$id': typeof AuthOrdersIdRouteRouteWithChildren
  '/staff/$id': typeof AuthStaffIdRouteRouteWithChildren
  '/dashboard/': typeof AuthDashboardIndexRoute
  '/dishes/': typeof AuthDishesIndexRoute
  '/orders/': typeof AuthOrdersIndexRoute
  '/staff/': typeof AuthStaffIndexRoute
  '/supplies/': typeof AuthSuppliesIndexRoute
  '/dishes/$id/': typeof AuthDishesIdIndexRoute
  '/orders/$id/': typeof AuthOrdersIdIndexRoute
  '/staff/$id/': typeof AuthStaffIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/dashboard': typeof AuthDashboardIndexRoute
  '/dishes': typeof AuthDishesIndexRoute
  '/orders': typeof AuthOrdersIndexRoute
  '/staff': typeof AuthStaffIndexRoute
  '/supplies': typeof AuthSuppliesIndexRoute
  '/dishes/$id': typeof AuthDishesIdIndexRoute
  '/orders/$id': typeof AuthOrdersIdIndexRoute
  '/staff/$id': typeof AuthStaffIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/_auth/dashboard': typeof AuthDashboardRouteRouteWithChildren
  '/_auth/dishes': typeof AuthDishesRouteRouteWithChildren
  '/_auth/orders': typeof AuthOrdersRouteRouteWithChildren
  '/_auth/staff': typeof AuthStaffRouteRouteWithChildren
  '/_auth/supplies': typeof AuthSuppliesRouteRouteWithChildren
  '/_auth/dishes_/$id': typeof AuthDishesIdRouteRouteWithChildren
  '/_auth/orders_/$id': typeof AuthOrdersIdRouteRouteWithChildren
  '/_auth/staff_/$id': typeof AuthStaffIdRouteRouteWithChildren
  '/_auth/dashboard/': typeof AuthDashboardIndexRoute
  '/_auth/dishes/': typeof AuthDishesIndexRoute
  '/_auth/orders/': typeof AuthOrdersIndexRoute
  '/_auth/staff/': typeof AuthStaffIndexRoute
  '/_auth/supplies/': typeof AuthSuppliesIndexRoute
  '/_auth/dishes_/$id/': typeof AuthDishesIdIndexRoute
  '/_auth/orders_/$id/': typeof AuthOrdersIdIndexRoute
  '/_auth/staff_/$id/': typeof AuthStaffIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/dashboard'
    | '/dishes'
    | '/orders'
    | '/staff'
    | '/supplies'
    | '/dishes/$id'
    | '/orders/$id'
    | '/staff/$id'
    | '/dashboard/'
    | '/dishes/'
    | '/orders/'
    | '/staff/'
    | '/supplies/'
    | '/dishes/$id/'
    | '/orders/$id/'
    | '/staff/$id/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/dashboard'
    | '/dishes'
    | '/orders'
    | '/staff'
    | '/supplies'
    | '/dishes/$id'
    | '/orders/$id'
    | '/staff/$id'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/login'
    | '/_auth/dashboard'
    | '/_auth/dishes'
    | '/_auth/orders'
    | '/_auth/staff'
    | '/_auth/supplies'
    | '/_auth/dishes_/$id'
    | '/_auth/orders_/$id'
    | '/_auth/staff_/$id'
    | '/_auth/dashboard/'
    | '/_auth/dishes/'
    | '/_auth/orders/'
    | '/_auth/staff/'
    | '/_auth/supplies/'
    | '/_auth/dishes_/$id/'
    | '/_auth/orders_/$id/'
    | '/_auth/staff_/$id/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/dashboard",
        "/_auth/dishes",
        "/_auth/orders",
        "/_auth/staff",
        "/_auth/supplies",
        "/_auth/dishes_/$id",
        "/_auth/orders_/$id",
        "/_auth/staff_/$id"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_auth/dashboard": {
      "filePath": "_auth/dashboard/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/dashboard/"
      ]
    },
    "/_auth/dishes": {
      "filePath": "_auth/dishes/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/dishes/"
      ]
    },
    "/_auth/orders": {
      "filePath": "_auth/orders/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/orders/"
      ]
    },
    "/_auth/staff": {
      "filePath": "_auth/staff/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/staff/"
      ]
    },
    "/_auth/supplies": {
      "filePath": "_auth/supplies/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/supplies/"
      ]
    },
    "/_auth/dishes_/$id": {
      "filePath": "_auth/dishes_/$id/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/dishes_/$id/"
      ]
    },
    "/_auth/orders_/$id": {
      "filePath": "_auth/orders_/$id/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/orders_/$id/"
      ]
    },
    "/_auth/staff_/$id": {
      "filePath": "_auth/staff_/$id/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/staff_/$id/"
      ]
    },
    "/_auth/dashboard/": {
      "filePath": "_auth/dashboard/index.tsx",
      "parent": "/_auth/dashboard"
    },
    "/_auth/dishes/": {
      "filePath": "_auth/dishes/index.tsx",
      "parent": "/_auth/dishes"
    },
    "/_auth/orders/": {
      "filePath": "_auth/orders/index.tsx",
      "parent": "/_auth/orders"
    },
    "/_auth/staff/": {
      "filePath": "_auth/staff/index.tsx",
      "parent": "/_auth/staff"
    },
    "/_auth/supplies/": {
      "filePath": "_auth/supplies/index.tsx",
      "parent": "/_auth/supplies"
    },
    "/_auth/dishes_/$id/": {
      "filePath": "_auth/dishes_/$id/index.tsx",
      "parent": "/_auth/dishes_/$id"
    },
    "/_auth/orders_/$id/": {
      "filePath": "_auth/orders_/$id/index.tsx",
      "parent": "/_auth/orders_/$id"
    },
    "/_auth/staff_/$id/": {
      "filePath": "_auth/staff_/$id/index.tsx",
      "parent": "/_auth/staff_/$id"
    }
  }
}
ROUTE_MANIFEST_END */
