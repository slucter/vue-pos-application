<template>
     <aside>
        <div class="wrap-menus">
            <div class="menu-slc">
                <a href="#"><img src="../../assets/img/icon/fork.png" alt="menu"></a>
            </div>
            <div class="history-slc">
                <a href="#"><img src="../../assets/img/icon/board.png" alt="history"></a>
            </div>
            <div class="add-slc">
                <a href="#" @click="$emit('modalAddClicked')">
                <img src="../../assets/img/icon/add.png" alt="add"></a>
            </div>
        </div>
        <div class="search-slc">
            <input type="text" placeholder="search menu">
        </div>
    </aside>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      muncul: '',
    };
  },
};

</script>

<style scoped>
aside{
    display: flex;
    flex-direction: column;
    height: 92%;
    width: 125px;
    box-shadow: 10px 0 5px -5px rgba(0, 0, 0, 0.1);
    position: fixed;
    background-color: white;
    bottom: 0;
    left: 0px;
    z-index: 5;
}

aside .menu-slc{
    display: flex;
    width: 100%;
    height: 120px;
    /* background-color: violet; */
    justify-content: center;
    align-items: center;
}
aside .menu-slc img{
    width: 50px;
    height: 50px;
}
aside .history-slc{
    display: flex;
    width: 100%;
    height: 120px;
    /* background-color: rgb(110, 82, 110); */
    justify-content: center;
    align-items: center;
}
aside .history-slc img{
    width: 50px;
    height: 50px;
}
aside .add-slc{
    display: flex;
    width: 100%;
    height: 120px;
    /* background-color: rgb(29, 21, 29); */
    justify-content: center;
    align-items: center;
}
aside .add-slc img{
    width: 50px;
    height: 50px;
}
.search-slc{
    display: none;
}

@media (max-width: 414px){
     aside{
        display: flex;
        /* flex-direction: column; */
        height: auto;
        width: 100%;
        box-shadow: 10px 0 5px -5px rgba(0, 0, 0, 0.1);
        position: fixed;
        background-color: rgb(255, 255, 255);
        top: -500px;
        left: 0px;
        bottom: unset;
        z-index: 3;
    }
    .wrap-menus{
        display: flex;
    }


    aside .menu-slc{
        display: flex;
        width: 100%;
        height: 120px;
        /* background-color: violet; */
        justify-content: center;
        align-items: center;
    }
    aside .menu-slc img{
        width: 50px;
        height: 50px;
    }
    aside .history-slc{
        display: flex;
        width: 100%;
        height: 120px;
        /* background-color: rgb(110, 82, 110); */
        justify-content: center;
        align-items: center;
    }
    aside .history-slc img{
        width: 50px;
        height: 50px;
    }
    aside .add-slc{
        display: flex;
        width: 100%;
        height: 120px;
        /* background-color: rgb(29, 21, 29); */
        justify-content: center;
        align-items: center;
    }
    aside .add-slc img{
        width: 50px;
        height: 50px;
    }

    aside .search-slc{
        display: flex;
        margin-bottom: 10px;
    }
    .search-slc input{
        width: 100%;
        margin: 0 15px;
        padding: 15px 15px 15px 50px ;
        background-image: url('../../assets/img/icon/search.png');
        background-size: 30px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: 6px;
        border: none ;
        border-bottom: 2px solid black;
        outline: none;
        font-size: 30px;
    }
}
</style>
