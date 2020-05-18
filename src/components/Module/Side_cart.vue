<template>
    <div class="side-cart">
        <EmptyCart />
        <CartItems />
        <BottomCart />
    </div>
</template>

<script>
import EmptyCart from '../Child/EmptyCart.vue';
import CartItems from '../Child/CartItems.vue';
import BottomCart from '../Child/BottomCart.vue';

export default {
  name: 'SideCart',
  components: {
    EmptyCart,
    CartItems,
    BottomCart,
  },
};
</script>

<style scoped>
.side-cart-show{
    right: 0!important;
    transition: .5s;
}
.side-cart{
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 92%;
    border-left: 1px solid #cecece;
    background-color: white;
    position: fixed;
    right: -100%;
    bottom:0;
    z-index: 5;
    transition: .3s;
}

@media (max-width: 414px){
    .side-cart-show{
    right: 0!important;
    transition: .5s;
    }
    .side-cart{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 92%;
        border-left: 1px solid #cecece;
        background-color: white;
        position: fixed;
        right: -500px;
        bottom:0;
        z-index: 7;
    }
}
</style>
