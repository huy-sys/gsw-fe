import { createRouter, createWebHistory } from 'vue-router'

import MainContent from '@/components/MainContent.vue'
import MatchList from '@/components/MatchList.vue'


const routes = [
    {
        path: '/',
        component: MainContent
    },
    {
        path: '/matchList',
        component: MatchList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router