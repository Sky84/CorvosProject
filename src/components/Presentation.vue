<template>
  <section class="presentation">
    <div class="row text-left">
      <img class="col-md-3 offset-md-1 photo bg-primary">
      <span class="col-md-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur facere adipisci cum iste unde repellat expedita quasi illo iure error, asperiores repudiandae laboriosam. Consequuntur perferendis omnis iusto tempore nihil cumque.</span>
    </div>
  </section>
</template>

<script lang="ts">
export default {
    name: 'presentation',
    props: [],
    data() {
        return {};
    },
    methods: {},
    computed: {}
};
</script>

<style scoped lang="scss">

.presentation {
    img.photo{
        height: 200px;
    }
}
</style>
