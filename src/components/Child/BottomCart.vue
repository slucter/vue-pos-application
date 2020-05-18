<template>
    <div class="button-cart">
        <div class="price-count">
            <h2>Total :</h2>
            <h2>Rp. {{this.$store.getters.totalPrice}}</h2>
        </div>
        <div class="section-bottom-cart">
            <span>*Belum termasuk ppn</span>
            <a  href="#" @click="$emit('btnCoClicked')" class="checkout-btn">Checkout</a>
            <a href="#">Cancel</a>
        </div>

    </div>
</template>

<script>
export default {
  name: 'BottomCart',
//   methods: {
//     clicked(e) {
//       e.preventDefault();
//       // eslint-disable-next-line no-console
//       console.log('iya');
//     },
//   },
};
</script>

<style scoped>
.side-cart .button-cart{
    width: 100%;
    height: 25%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    justify-content: space-between;
}

.side-cart .price-count{
    display: flex;
    width: 91%;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
}

.side-cart .section-bottom-cart{
    display: flex;
    flex-direction: column;
    width: 100%;
    /* background-color: tomato; */
}
.side-cart .section-bottom-cart a{
    font-size: 25px;
    height: 61px;
    text-decoration: none;
    text-align: center;
    color: #fff;
    font-family: 'Airbnb Cereal App Medium';
    line-height: 61px;
}

.checkout-btn{
    background-color: #57CAD5!important;
}
.side-cart .section-bottom-cart a{
    background-color: #F24F8A;
    margin-bottom: 10px;
}

@media (max-width: 414){
}
</style>
