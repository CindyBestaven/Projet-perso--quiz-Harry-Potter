<script>

export default {

  methods: {
    redirectionButton() {
        this.$router.push('/quiz');
    }
  }
}

</script>

<template>
  <div class="containerHome">
    <button @click="redirectionButton">Faire le quiz</button>
  </div>
</template>

<style scoped>
   
  
</style>
