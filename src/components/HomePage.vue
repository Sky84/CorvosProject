<template>
  <section class="home-page">
    <transition name="slide-fade">
      <div class="row">
        <card-project
          class="col-md-3 offset-md-2 mb-5"
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :image="project.image"
          :labelButton="project.labelButton"
        ></card-project>
      </div>
    </transition>
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
                name: 'Hard Runner Color',
                description: 'Jeu de plateforme ou le joueur doit aller le plus loin possible en sautant pour faire tourner et correspondre avec les bonnes couleurs. Réalisé avec Unity 3D/ C#',
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
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
}
</style>
