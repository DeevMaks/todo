<template>
    <div class="item" :class="{'item--done': item.done}">
        <input type="checkbox" v-on:click="checkboxHandler">
        <p>{{ item.title }}</p>
        <button v-on:click="deleteHandler">x</button>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['item'],
    methods: {
        checkboxHandler() {
            this.$store.commit('checkTask', this.item.id)
        },
        deleteHandler() {
           this.$store.commit('deleteTask', this.item.id) 
           this.$store.dispatch('saveData')
        }
    }
}
</script>

<style>
    .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100;
        padding: 15px;
    }

    .item--done{
        color: #ccc;
        text-decoration: line-through;
    }

    button{
        width: 30px;
        height: 30px;
    }
</style>