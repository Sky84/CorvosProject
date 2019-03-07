<template>
  <section class="card-project">
    <div class="card">
      <img class="card-img-top" :src="image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text text-justify">{{description}}</p>
        <a href="#" class="btn btn-primary">{{labelButton}}</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  export default  {
    name: 'card-project',
    props: ['name', 'description', 'image', 'labelButton'],
    data() {
      return {

      };
    },
    methods: {

    },
    computed: {

    }
};
</script>

<style scoped lang="scss">
  .card-project {
    .card img.card-img-top{
      height: 200px;
    }
  }
</style>
