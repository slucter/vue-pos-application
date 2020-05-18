<template>
    <div>
        <input type="text" v-model="bind">
        <h1>{{bind}}</h1>
        <br><br>
        <input type="text" placeholder="cari menu" v-model="search">
        <br>
        <br><br>
        <div v-for="datas in dataw" :key="datas.id">
            <h3>{{datas.title}}</h3>
            <p>{{datas.price}}</p>
        </div>
        <br><br><br>
        <div>
            <h1>This is cart</h1>
            <h4>{{dataw.title}}</h4>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Todos',
  data() {
    return {
      bind: '',
      search: '',
      dataw: [
        {
          id: 1,
          title: 'jagung',
          price: 500,
        },
        {
          id: 2,
          title: 'ayam',
          price: 700,
        },
        {
          id: 3,
          title: 'apel',
          price: 10500,
        },
        {
          id: 4,
          title: 'melon',
          price: 17000,
        },
        {
          id: 5,
          title: 'jeruk',
          price: 2000,
        },
        {
          id: 6,
          title: 'alpukat',
          price: 5000,
        },
        {
          id: 7,
          title: 'stroberi',
          price: 800,
        },
      ],
    };
  },

  computed: {
    filterSearch() {
      return this.dataw.title.filter((datas) => datas.title.match(this.search));
    },
  },
};
</script>

<style scoped>
</style>
