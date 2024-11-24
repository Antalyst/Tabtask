import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home // Import your Home component
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];