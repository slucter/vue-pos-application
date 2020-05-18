<template>
<div>
    <nav>
        <div class="burger-slc">
        <span></span>
        </div>

        <div class="brand-slc">
        <h2>Foods Item</h2>
        </div>

        <div class="search-cart">
            <div class="search-slc">
                <input type="text">
            </div>
            <div class="cart-slc">
                <img @click="$emit('cartClicked')"
                src="../../assets/img/icon/cartslc.png"  id="clickdong" alt="cart">
                <a>{{this.$store.state.selectedMenu.length}}</a>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
nav{
    display: flex;
    width: 100%;
    height: 8%;
    background-color: rgb(255, 255, 255);
    justify-content: space-between;
    position: fixed;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    z-index: 5;
}

nav .burger-slc{
    height: 100%;
    flex: 0.3;
    /* background-color: blueviolet; */
    display: flex;
    position: relative;
    /* border-right: 1px solid red; */
}

nav .burger-slc span{
    position: absolute;
    background-color: rgb(42, 42, 42);
    width:50px;
    height: 5px;
    top: 35px;
    left: 40px;
}
nav .burger-slc span::after{
    content: '';
    width: 50px;
    height: 5px;
    background-color: rgb(42, 42, 42);
    position: absolute;
    top: -10px;
}
nav .burger-slc span::before{
    content: '';
    width: 50px;
    height: 5px;
    background-color: rgb(42, 42, 42);
    position: absolute;
    top: 10px;
}

nav .brand-slc{
    display: flex;
    flex: 3;
    height: 100%;
    /* background-color: burlywood; */
    justify-content: center;
    align-items: center;
}
nav .brand-slc h2{
    color: #000;
    font-size: 30px;
}

nav .search-cart{
    display: flex;
    flex: 1.3;
    background-color: 1;
    align-items: center;
}
nav .search-cart .search-slc{
    display: flex;
    flex:2;
    /* background-color: rgb(61, 51, 38); */
    height: 70%;
}
nav .search-cart .search-slc input{
    width:100%;
    height: 100%;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid black;
    font-size: 20px;
    background-image: url('../../assets/img/icon/search.png');
    background-repeat: no-repeat;
    background-size: 30px;
    background-position-y: center;
    background-position-x: left;
    padding-left: 40px;

}
nav .search-cart .cart-slc{
    display: flex;
    flex: 1;
    /* background-color: chartreuse; */
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
}
nav .search-cart .cart-slc img{
    width: 40px;
    height: 40px;
}
nav .search-cart .cart-slc a{
    text-decoration: none;
    color: rgb(7, 5, 5);
    font-size: 30px;
    background-color: rgb(255, 255, 255);
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
}

@media (max-width: 414px){
  nav{
        display: flex;
        width: 100%;
        height: 9%;
        background-color: rgb(255, 255, 255);
        justify-content: space-between;
        position: fixed;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        z-index: 5;
        top:0;
    }
    nav .burger-slc{
        height: 100%;
        flex: 0.3;
        /* background-color: blueviolet; */
        display: flex;
        position: relative;
        /* border-right: 1px solid red; */
    }
    nav .burger-slc span{
        position: absolute;
        background-color: rgb(42, 42, 42);
        width:50px;
        height: 5px;
        top: 28px;
        left: 20px;
    }
    nav .burger-slc span::after{
        content: '';
        width: 50px;
        height: 5px;
        background-color: rgb(42, 42, 42);
        position: absolute;
        top: -10px;
    }
    nav .burger-slc span::before{
        content: '';
        width: 50px;
        height: 5px;
        background-color: rgb(42, 42, 42);
        position: absolute;
        top: 10px;
    }
    nav .brand-slc{
        display: flex;
        flex: 4;
        height: 100%;
        /* background-color: burlywood; */
        justify-content: center;
        align-items: center;
    }
    nav .brand-slc h2{
        color: #000;
        font-size: 30px;
        margin-left: 50px;
    }
    nav .search-cart{
        display: flex;
        flex: 1.3;
        background-color: 1;
        align-items: center;
    }
    nav .search-cart .search-slc{
        display: none;
    }
    nav .search-cart .cart-slc{
        display: flex;
        flex: 1;
        /* background-color: chartreuse; */
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
    }
    nav .search-cart .cart-slc img{
        width: 30px;
        height: 30px;
    }
    nav .search-cart .cart-slc a{
        text-decoration: none;
        color: rgb(7, 5, 5);
        font-size: 30px;
        background-color: rgb(255, 255, 255);
        padding: 10px 20px 10px 20px;
        border-radius: 40px;
    }
}
</style>
