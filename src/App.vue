<template>
  <div class="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <List />
    <Form />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    List,
    Form
  },
  mounted() {
    this.$store.dispatch('loadData')
  }
}
</script>

<style>
  .container{
    width: 1000px;
    border: 1px solid #ccc;
    border-radius: 9px;
    margin-top: 50px;
    margin-left: calc(50% - 500px);

  }

  header {
    padding: 15px;
    background-color: #ccc;
    border-radius: 9px;
  }
</style>
