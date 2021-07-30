<template>
    <div class="form">
        <input type="text" v-model="value">
        <button v-on:click="addHandler">add</button>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
      return {
          value: ''
      }
    },
    methods: {
        addHandler() {
            this.$store.commit('setTask', this.value)
            this.$store.dispatch('saveData')
            this.value = ''
        }
    }
}
</script>