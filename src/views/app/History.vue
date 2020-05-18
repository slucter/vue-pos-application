<template>
    <div>
        <NavbarW />
        <AsideW />
        <!-- <History /> -->
    </div>
</template>

<script>
import NavbarW from '../../components/Module/Navbar.vue';
import AsideW from '../../components/Module/Aside.vue';
// import History from '../../components/Module/History.vue';

export default {
  name: 'History',
  components: {
    NavbarW,
    AsideW,
  },
};
</script>

<style scoped>

</style>
