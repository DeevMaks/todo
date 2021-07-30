<template>
    <section class="list">
      <Item 
        v-on:isDelete="deleteHandler" 
        v-bind:key="index" 
        v-for="item, index of list" 
        v-bind:item="item"></Item>
    </section>
</template>

<script>
import Item from './Item.vue'

export default {
    name: 'List',
    components: {
        Item
    },
    computed: {
        list() {
            return this.$store.getters.getList
        }
    }
}
</script>

<style>
    
</style>