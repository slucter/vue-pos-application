<template>
     <div class="modal-co-slc">

        <div class="box-modal-co">

            <div class="wrap-model-head">
                <div class="head-model-title">
                    <h2>Checkout</h2>
                    <h3>Receipt no: #010410919</h3>
                </div>
                <h1>Cashier : Pevita Pearce</h1>
            </div>

            <div class="wrap-model-content">

                <div class="wrapping-item-co">
                    <div class="item-model-name">
                        <h1>Coffe enaaak 1x</h1>
                    </div>
                    <div class="item-model-price">
                        <h1>Rp. 25.000</h1>
                    </div>
                </div>
                <div class="wrapping-item-co">
                    <div class="item-model-name">
                        <h1>Coffe enaaak 1x</h1>
                    </div>
                    <div class="item-model-price">
                        <h1>Rp. 25.000</h1>
                    </div>
                </div>
                <div class="wrapping-item-co">
                    <div class="item-model-name">
                        <h1>Coffe enaaak 1x</h1>
                    </div>
                    <div class="item-model-price">
                        <h1>Rp. 25.000</h1>
                    </div>
                </div>
            </div>

            <div class="wrap-model-footer">
                <div class="details-co">
                    <h1>Payment : Cash</h1>
                    <h1>Total : Rp. 25.000</h1>
                </div>

                <div class="button-co-grup">
                    <a href="#">Print</a>
                    <h3>OR</h3>
                    <a href="#" class="btn-co-email">Send Email</a>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'ModalCo',
};
</script>

<style scoped>
.modal-co-show{
    left: 0!important;
    transition: .5s;
}
.modal-co-slc{
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left:-100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    z-index: 100;
    justify-content: center;
    align-items: center;
}
.modal-co-slc .box-modal-co{
    width: 746px;
    height: 781px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

.modal-co-slc .box-modal-co .wrap-model-head{
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.modal-co-slc .box-modal-co .wrap-model-head h1{
    font-size: 20px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
}
.modal-co-slc .box-modal-co .wrap-model-head .head-model-title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
}
.modal-co-slc .box-modal-co .wrap-model-head .head-model-title h2{
    font-size: 35px;
}

.modal-co-slc .box-modal-co .wrap-model-content{
    margin-top: 50px;
    width: 100%;
    height: 350px;
    background-color: rgb(255, 255, 255);
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    font-family: 'Airbnb Cereal App Light';
    overflow-x: hidden;
}

.modal-co-slc .box-modal-co .wrap-model-content .wrapping-item-co{
    display: flex;
    width:100%;
}
.modal-co-slc .box-modal-co .wrap-model-content .wrapping-item-co .item-model-name{
    width: 70%;
    height: 60px;
    display: flex;
    background-color: rgb(255, 255, 255);
}
.modal-co-slc .box-modal-co .wrap-model-content .wrapping-item-co .item-model-name h1{
    font-size: 25px;
    font-family: 'Airbnb Cereal App Light';
}
.modal-co-slc .box-modal-co .wrap-model-content .wrapping-item-co .item-model-price{
    width: 30%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    background-color: rgb(255, 255, 255);
}
.modal-co-slc .box-modal-co .wrap-model-content .wrapping-item-co .item-model-price h1{
    font-size: 25px;
    font-family: 'Airbnb Cereal App Light';
}

.modal-co-slc .box-modal-co .wrap-model-footer{
    width: 100%;
    height: 265px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}
.modal-co-slc .box-modal-co .wrap-model-footer .details-co{
    width: 100%;
    height: 70px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
}
.modal-co-slc .box-modal-co .wrap-model-footer .details-co h1{
    font-size: 25px;
    padding-left: 20px;
    padding-right: 20px;
}
.modal-co-slc .box-modal-co .wrap-model-footer .button-co-grup{
    width: 100%;
    height: 200px;
    display: flex;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
}
.modal-co-slc .box-modal-co .wrap-model-footer .button-co-grup a{
    font-size: 30px;
    height: 70px;
    background-color: #F24F8A;
    text-decoration: none;
    text-align: center;
    color: #fff;
    line-height: 70px;
    border-radius: 10px;
    font-weight: bold;

}
.btn-co-email{
    background-color: #57CAD5!important;
}
.modal-co-slc .box-modal-co .wrap-model-footer .button-co-grup h3{
    font-size: 25px;
    text-align: center;
    font-weight: bold;
}
</style>
