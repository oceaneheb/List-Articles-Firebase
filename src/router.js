// importer 2 fonctions 
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path: '/', 
        alias: '/articles', //plusieurs chemins pour aller au même endroit
        name: 'articles', // renforcer la partie SEO
        component: () => import("./components/ArticlesList.vue") // système qui importe un composant 
    },
    {
        // ajouter des articles dans la base de données
        path: '/add', // path : vers quel chemin on appelle le composant
        name: 'add',
        component: () => import("./components/AddArticles.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
