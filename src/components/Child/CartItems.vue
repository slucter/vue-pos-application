<template>
    <div class="cart-items">
        <div class="cart-box" v-for="menu in selectMenu" :key="menu.id">
            <div class="img-product-cart">
                <img :src="menu.image" alt="product cart">
            </div>
            <div class="info-items-cart">
                <div class="items-cart-name">
                    <h2>{{menu.title}}</h2>
                </div>
                <div class="pricing-items">
                    <div class="wrap-button">
                        <span>-</span>
                        <input type="text" v-model="countItem">
                        <span @click="addItemCart">+</span>
                    </div>
                    <h3>Rp. {{menu.price}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CartItems',
  data() {
    return {
      countItem: 0,
    };
  },
  computed: {
    selectMenu() {
      return this.$store.state.selectedMenu;
    },
  },
  methods: {
    addItemCart() {
      this.countItem += 1;
      // eslint-disable-next-line no-console
      console.log(1);
    },
  },
};
</script>

<style scoped>
.side-cart .cart-items{
    width: 100%;
    height: 75%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;
}

.side-cart .cart-items::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  .side-cart .cart-items::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  .side-cart .cart-items::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  .side-cart .cart-items::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .side-cart .cart-items .cart-box{
    display: flex;
    width: 95%;
    height: 130px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
}

.side-cart .cart-items .cart-box .img-product-cart{
    width: 30%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    /* border-radius: 60%; */
    overflow: hidden;
}
.side-cart .cart-items .cart-box .img-product-cart img{
    width: 100%;
    object-fit: cover;
}

.side-cart .cart-items .cart-box .info-items-cart{
    width: 65%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
    box-sizing: border-box;
}

.side-cart .cart-items .cart-box .info-items-cart .items-cart-name{
    width: 100%;
    height: 50%;
    background-color: rgb(255, 255, 255);
    display: flex;
    margin-top: 10px;
    box-sizing: border-box;
}
.side-cart .cart-items .cart-box .info-items-cart .pricing-items{
    width: 100%;
    height: 50%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
}

.side-cart .cart-items .cart-box .info-items-cart .pricing-items .wrap-button{
    width: 40%;
    background-color: rgb(255, 255, 255);
    display: flex;
    height: 35px;
}
.side-cart .cart-items .cart-box .info-items-cart .pricing-items .wrap-button input{
    background-color: rgba(130, 222, 58, .2);
    display: flex;
    height: 35px;
    width: 50px;
    outline: none;
    border: none;
    border: 2px solid rgb(130, 222, 58);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.side-cart .cart-items .cart-box .info-items-cart .pricing-items .wrap-button span{
    background-color: rgba(130, 222, 58, .2);
    display: flex;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    border: 2px solid rgb(130, 222, 58);
    cursor: pointer;
}
</style>
