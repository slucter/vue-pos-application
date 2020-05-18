<template>
    <section>

        <div class="coffee-menus">

             <div class="card-product" v-for="menu in allMenu" :key="menu.id">
                <div class="thumb-slc">
                    <img :src="menu.image" alt="1">
                    <div class="thumb-layer">
                        <h2 id="apawe"><i class="far fa-check-circle"></i></h2>
                    </div>
                </div>
                <div class="detail-prod">
                    <a>{{menu.title}}</a>
                    <p>Rp. {{menu.price}}</p>
                    <div class="addtocart">
                        <h2 @click="addToCart(menu)">Add to cart</h2>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'MenuList',
  computed: {
    allMenu() {
      return this.$store.getters.allMenu;
    },
  },
  methods: {
    getAllMenu() {
      this.$store.dispatch('getAllMenu');
    },
    addToCart(dataMenu) {
      // eslint-disable-next-line no-console
      this.$store.commit('addToCart', dataMenu);
      document.querySelector('.card-product').classList.toggle('card-product-a');
      document.querySelector('.thumb-layer').classList.toggle('thumb-layer-w');
      document.querySelector('#apawe').classList.toggle('apawelah');
    },
  },
  created() {
    this.getAllMenu();
  },
};
</script>

<style scoped>
@import '../../assets/css/font-style.css';

section .coffee-menus{
    width: 85%;
    /* height: 900px; */
    /* background-color: yellowgreen; */
    display: flex;
    position: relative;
    top: 100px;
    margin: 0 auto;
    z-index: 1;
    flex-wrap: wrap;
    justify-content:space-between;
}
section .coffee-menus .card-product{
    width: 250px;
    height: 305px;
    background-color: #fff;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border: 1px solid #cacaca;
}

section .coffee-menus .card-product .thumb-slc{
    width: 100%;
    height: 200px;
    background-color: rgb(69, 75, 58);
    position: relative;
}
/* section .coffee-menus .card-product .thumb-slc:hover::after{
    content: '';
    width:100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left:0;
    top:0;
} */
section .coffee-menus .card-product .thumb-slc img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .8s;
}
section .coffee-menus .card-product .thumb-slc:hover{
    width:150%;
    transition: .8s;
}
section .coffee-menus .card-product-a .thumb-slc{
    width:150%;
    transition: .8s;
}
section .coffee-menus .card-product .thumb-slc .thumb-layer{
    position: absolute;
    width:100%;
    height: 100%;
    top:0;
    left: 0;
    overflow: hidden;
    transition: .3s;
}

section .coffee-menus .card-product .thumb-slc .thumb-layer:hover{
    background-color: rgba(0, 0, 0, 0.6);
}
section .coffee-menus .card-product .thumb-slc .thumb-layer-w{
    background-color: rgba(0, 0, 0, 0.6);
}
section .coffee-menus .card-product .thumb-slc .thumb-layer:hover  #apawe{
    transition: .3s;
    top: 50px;
}
.apawelah{
     transition: .3s;
    top: 50px;
}

#apawe{
    color: #fff;
    position: absolute;
    top:-90px;
    left:90px;
    font-size: 70px;
    transition: .3s;
}
section .coffee-menus .card-product .detail-prod{
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* background-color: tomato; */
    padding: 5px;
}
section .coffee-menus .card-product .detail-prod a{
    border-left: 3px solid black;
    padding-left: 5px;
}
section .coffee-menus .card-product .detail-prod p{
    border-left: 3px solid black;
    padding-left: 5px;
    font-weight: bold;
}
section .coffee-menus .card-product .detail-prod .addtocart{
    width: 100%;
    height: 35px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: .2s;
}
section .coffee-menus .card-product .detail-prod .addtocart:active{
    box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.25);
    margin-top: 13px;
    transition: .2s;
}
section .coffee-menus .card-product .detail-prod .addtocart h2{
    font-size: 17px;
}

@media (max-width: 414px){
    section .coffee-menus{
        width: 95%;
        /* height: 900px; */
        /* background-color: yellowgreen; */
        display: flex;
        position: relative;
        top: 100px;
        margin: 0 auto;
        z-index: 1;
        flex-direction: column;
        justify-content:space-between;
        align-items: center;
    }
    section .coffee-menus .card-product{
        width: 300px;
        height: 305px;
        background-color: #fff;
        flex-direction: column;
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        border: 1px solid #cacaca;
    }
    section .coffee-menus .card-product .thumb-slc{
        width: 100%;
        height: 200px;
        background-color: rgb(69, 75, 58);
        position: relative;
    }
    /* section .coffee-menus .card-product .thumb-slc:hover::after{
        content: '';
        width:100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left:0;
        top:0;
    } */
    section .coffee-menus .card-product .thumb-slc img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .8s;
    }
    section .coffee-menus .card-product .thumb-slc:hover{
        width:150%;
        transition: .8s;
    }
    section .coffee-menus .card-product .thumb-slc .thumb-layer{
        position: absolute;
        width:100%;
        height: 100%;
        top:0;
        left: 0;
        overflow: hidden;
        transition: .3s;
    }
    section .coffee-menus .card-product .thumb-slc .thumb-layer:hover{
        background-color: rgba(0, 0, 0, 0.6);
    }
    section .coffee-menus .card-product .thumb-slc .thumb-layer:hover  #apawe{
        transition: .3s;
        top: 50px;
    }
    #apawe{
        color: #fff;
        position: absolute;
        top:-90px;
        left:90px;
        font-size: 70px;
        transition: .3s;
    }
    section .coffee-menus .card-product .detail-prod{
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* background-color: tomato; */
        padding: 5px;
    }
    section .coffee-menus .card-product .detail-prod a{
        border-left: 3px solid black;
        padding-left: 5px;
    }
    section .coffee-menus .card-product .detail-prod p{
        border-left: 3px solid black;
        padding-left: 5px;
        font-weight: bold;
    }
    section .coffee-menus .card-product .detail-prod .addtocart{
        width: 100%;
        height: 35px;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: .2s;
    }
    section .coffee-menus .card-product .detail-prod .addtocart:active{
        box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.25);
        margin-top: 13px;
        transition: .2s;
    }
    section .coffee-menus .card-product .detail-prod .addtocart h2{
        font-size: 17px;
    }
}
</style>
