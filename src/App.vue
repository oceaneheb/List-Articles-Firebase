<template>
    <div id="app">
        <div class="app">
            <nav>
                <router-link to="/"><a href="#">Home</a></router-link>
                <router-link to="/articles">Articles</router-link>
                <router-link to="/add">Ajouter</router-link>    
            </nav>
            <router-view />
        </div>
    </div>
</template>



