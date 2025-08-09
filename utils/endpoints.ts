import { create } from "domain";

export const endpoints = {
    posts: {
        create: '/posts',
        getById: (id: number | string) => `/posts/${id}`,
        getByComments: (id: number | string) => `/posts/${id}/comments`,
        update: (id: number | string) => `/posts/${id}`,
        delete: (id: number | string) => `/posts/${id}`
  },
    users: {
        create: '/users',
        getById: (id: number | string) => `/users/${id}`,
        deleteById: (id: number | string) => `/users/${id}`,
        putById: (id: number | string) => `/users/${id}`
    }
}