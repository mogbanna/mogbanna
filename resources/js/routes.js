import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ('./pages/Home')
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import ('./layouts/Layout'),
                children: [{
                    path: '',
                    component: () =>
                        import ('./pages/About')
                }]
            }
        ]
        // routes: [{
        //         path: '/',
        //         name: 'base',
        //         component: () =>
        //             import ('./views/App')
        //     },
        //     {
        //         path: '/about',
        //         name: 'about',
        //         component: () =>
        //             import ('./pages/About')
        //     },
        //     {
        //         path: '/projects',
        //         name: 'projects',
        //         component: () =>
        //             import ('./pages/Projects')

    //     },
    //     {
    //         path: '/users',
    //         name: 'users.index',
    //         component: () =>
    //             import ('./pages/UsersIndex')
    //     }
    // ]
});