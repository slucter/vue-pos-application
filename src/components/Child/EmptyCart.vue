<template>
    <div class="empty-cart">
        <img src="../../assets/img/icon/cart-coffe.png" alt="cart">
        <h2>Your cart is empty</h2>
        <p>Please add some items from the menu</p>
    </div>
</template>

<script>
export default {
  name: 'EmptyCart',
};
</script>

<style scoped>
.side-cart .empty-cart{
    height: 500px;
    width: 100%;
    /* background-color: rgb(38, 112, 106); */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: none;
}
.side-cart .empty-cart img{
    width: 300px;
    height: 300px;
}
.side-cart .empty-cart h2{
    font-size: 30px;
}
.side-cart .empty-cart p{
    font-size: 20px;
    color: #CECECE;
}

@media (max-width: 414px){
    .side-cart .empty-cart{
        height: 500px;
        width: 100%;
        /* background-color: rgb(38, 112, 106); */
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
    }
    .side-cart .empty-cart img{
        width: 300px;
        height: 300px;
    }
    .side-cart .empty-cart h2{
        font-size: 30px;
    }
    .side-cart .empty-cart p{
        font-size: 20px;
        color: #CECECE;
    }
}
</style>
