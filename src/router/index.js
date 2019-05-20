import Vue from 'vue';
import Router from 'vue-router';
import TestParent from '../components/TestParent';

Vue.use(Router);

export default new Router({
    mode: 'history',
    fallback: false,
    routes: [
        {
            path: '/',
            name: 'TestParent',
            component: TestParent,
        },
    ],
});

