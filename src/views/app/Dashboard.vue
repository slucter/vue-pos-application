<template>
    <div>
        <NavbarW @cartClicked="showSideCart" />
        <AsideW @modalAddClicked="showModalAdd" />
        <SideCart />
        <MenuList />
        <ModalCo @btnCoClicked="showModalCo" />
        <ModalAdd @closeModalAdd="closeAddModal"/>
    </div>
</template>

<script>
import NavbarW from '../../components/Module/Navbar.vue';
import AsideW from '../../components/Module/Aside.vue';
import SideCart from '../../components/Module/Side_cart.vue';
import MenuList from '../../components/Module/SectionMenuList.vue';
import ModalCo from '../../components/Module/Modal_Co.vue';
import ModalAdd from '../../components/Module/Modal_Add.vue';

export default {
  name: 'Dashboard',
  components: {
    NavbarW,
    AsideW,
    SideCart,
    MenuList,
    ModalCo,
    ModalAdd,
  },

  methods: {
    showSideCart() {
      document.querySelector('.side-cart').classList.toggle('side-cart-show');
      // eslint-disable-next-line no-console
      console.log('cartclicked');
    },

    showModalAdd() {
      document.querySelector('.modal-add-slc').classList.toggle('modal-add-show');
    },
    closeAddModal() {
      document.querySelector('.modal-add-slc').classList.remove('modal-add-show');
      this.$router.go();
    },
    showModalCo() {
      document.querySelector('.modal-co-slc').classList.toggle('modal-co-show');
      // eslint-disable-next-line no-console
      console.log(5);
    },
  },
};
</script>

<style scoped>
@import '../../assets/css/font-style.css';

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Airbnb Cereal App Book';
}

body{
    background-color: rgba(255, 255, 255, 0.25);
}
</style>
