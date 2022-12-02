// Components
const Home = { template: '<div>home</div>'    }
const Foo  = { template: '<div>foo</div>' };
const Bar  = { template: '<div>bar</div>' };

// Router
const routes = [
    { path: '/',    component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');
