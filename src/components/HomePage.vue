<template>
  <section class="home-page">
    <div class="row mb-5">
      <div class="col-md-6 offset-md-3">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img class="d-block w-100 logo" src="../assets/logo.png">
            </div>
            <div class="flip-box-back back-presentation">
              <span class="align-middle">
                <h2>Etienne Salupo-Corvo</h2>
                <p>J'aime et je suis passionné de CRÉATION de jeux-vidéo. <br>
                  L'objectif 2019 est l'auto entreprenariat puis de maîtriser le langage C# en ce qui concerne les jeux-vidéo et ses concepts.</p>
                <p>N'hésitez pas à tester certains des projets plus bas.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row offset-md-1">
      <card-project
        class="col-md-4 offset-md-1 mb-5"
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :description="project.description"
        :image="project.image"
        :labelButton="project.labelButton"
      ></card-project>
    </div>
  </section>
</template>

<script lang="ts">
import CardProject from './CardProject.vue';

export default {
  name: 'home-page',
  props: [],
  data() {
    return {
        projects: [
            {
                name: 'Pizza Coon Quest',
                description: 'Jeu de type Runner ou le joueur doit aller le plus loin possible en récoltant le plus d\'aliments mais attention aux mauvais aliments !. Réalisé avec Unity 3D/ C#',
                image: 'https://i.imgur.com/YHAB93k.jpg',
                labelButton: 'Tester (Bientôt)',
                linkButton: ''
            },
            {
                name: 'Hard Runner Color',
                description: 'Jeu de type Runner ou le joueur doit aller le plus loin possible en sautant pour faire tourner et correspondre avec les bonnes couleurs. Réalisé avec Unity 3D/ C#',
                image: 'https://lh3.googleusercontent.com/6UpaXMHYPlORt7zC3tyrngl6ZN0LKH5qmtXO99Fl5nTKH_rZsIR4fYZ42DhEuwut9sL4=w720-h310',
                labelButton: 'Tester sur le Play Store',
                linkButton: 'https://play.google.com/store/apps/details?id=com.CorvosProject.HardRunnerColor'
            },
            {
                name: 'Do It Yourself : Weapons',
                description: 'Jeu de plateforme ou le joueur à la possibilité d\'éditer les statistiques de son arme en plein combat (seulement en multijoueur). Réalisé avec Unity 3D/ C#',
                image: 'https://img.itch.zone/aW1hZ2UvMTcyMTU0Lzg3MTQxOS5wbmc=/original/SXxkUP.png',
                labelButton: 'Tester sur itch.io',
                linkButton: 'https://corvosporject.itch.io/smash-diy-weapons/purchase'
            },
            {
                name: 'Castle Guard',
                description: 'Jeu de plateforme ou le joueur doit se battre contre l\'ordinateur dans plusieurs niveaux afin de détruire son chateau.',
                image: 'https://img.itch.zone/aW1hZ2UvMjAyODkwLzk0NjgzNS5wbmc=/347x500/6zRpJG.png',
                labelButton: 'Tester sur le Play Store'
            }
        ]
    };
  },
  methods: {},
  computed: {},
  components: {
      CardProject
  }
};
</script>

<style scoped lang="scss">
.home-page {
  img.logo{
    height: 80vh;
  }
  .back-presentation{
    top:25vh;
    border-radius: 10px;
    height: unset !important;
  }
}
</style>
