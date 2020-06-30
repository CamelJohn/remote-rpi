import Home from './components/Home.vue';
import Display from './components/Display.vue';
import Remote from './components/Remote.vue';
import Header from './components/Header.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/Display', component: Display },
    { path: '/Remote', component: Remote },
    { path: '/Header', component: Header }
]