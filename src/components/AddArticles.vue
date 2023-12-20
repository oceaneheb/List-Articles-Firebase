<template>
    <h1>Ajouter un artcle</h1>
    <form class="form" @submit.prevent="saveArticle()"> <!--Eviter que le navigateur actualise la page et n'affiche pas 'Article créé'-->
        <label for="title">Titre</label>
        <input type="text" name="title" v-model="article.title">
        <label for="description">Description</label>
        <input type="text" name="description" v-model="article.description">
        <button>Ajouter</button>
    </form>
</template>


<script>
    import ArticleDataService from '../services/ArticleDataService'

    export default {
        props : {
            name: 'add-article'
        },

        data() {
            return {
                submitted: false,
                article: {
                    title: '',
                    description: '',
                    published: false
                }
            } 
        },

        methods: {
            saveArticle() {
                let data = {
                    title: this.article.title,
                    description: this.article.description,
                    published: false
                };
                ArticleDataService.create(data).then(() => {
                                                        this.submitted = true;
                                                        console.log("Article créé")
                                                    }).catch((error) => {console.log(error)});
            },

            newArticle() {
                this.submitted = false;
                this.article.title = '';
                this.article.description = '';
                this.article.published = false;
            }
    }
    }

</script>