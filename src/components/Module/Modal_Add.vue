<template>
    <div class="modal-add-slc">
        <div class="box-modal-add">

            <div class="wrap-add-head">
                <h2>Add Item</h2>
            </div>

            <div class="wrap-add-body">
                <h1>{{statusMsg}}</h1>
                <div class="input-grup-add">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Product Name" id="name" v-model="dataAdd.title">
                </div>
                <div class="input-grup-add">
                    <label for="image">Image</label>
                    <input type="text" placeholder="Image url" id="image" v-model="dataAdd.image">
                </div>
                <div class="input-grup-add">
                    <label for="price">Price</label>
                    <input type="text" placeholder="Price" id="price" v-model="dataAdd.price">
                </div>
                <div class="input-grup-add">
                    <label for="category">Category</label>
                    <select name="category" id="category" v-model="dataAdd.id_category">
                        <option value="1">Coffee Ice</option>
                        <option value="2">Coffe Hot</option>
                        <option value="3">Fruit Coffee</option>
                        <option value="4">Vegetarian Coffee</option>
                    </select>
                </div>
            </div>

            <div class="wrap-add-footer">
                <button type="reset" @click="$emit('closeModalAdd')">Cancel</button>
                <button type="submit" @click="clickAdd">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'ModalAdd',
  data() {
    return {
      nama: '',
      dataAdd: {
        title: '',
        image: '',
        price: '',
        id_category: '',
        available: 1,
      },
      statusMsg: '',
    };
  },
  computed: {
    addMenu() {
      return this.$store.getters.addMenu;
    },
  },
  methods: {
    clickAdd() {
      this.$store.dispatch('addDataMenu', this.dataAdd)
        .then((result) => {
          this.statusMsg = result.data.msg;
          // eslint-disable-next-line no-console
        //   console.log(result);
        });
    },
  },
  created() {
    this.clickAdd();
  },

};
</script>

<style scoped>
.modal-add-show{
    left: 0!important;
}
.modal-add-slc{
    display: flex;
    position: fixed;
    top:0;
    left:-100%;
    width:100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    justify-content: center;
    align-items: center;
}

.modal-add-slc .box-modal-add{
    width: 849px;
    height: 600px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}
.modal-add-slc .box-modal-add .wrap-add-head{
    width: 100%;
    height: 60px;
    /* background-color: rgb(87, 91, 100); */
    padding: 20px;
}
.modal-add-slc .box-modal-add .wrap-add-head h2{
    font-size: 30px;
}
.modal-add-slc .box-modal-add .wrap-add-body{
    width: 100%;
    height: 400px;
    background-color: rgb(255, 255, 255);
    display: flex;
    margin-top: 30px;
    align-items: center;
    flex-direction: column;
}
.modal-add-slc .box-modal-add .wrap-add-body .input-grup-add{
    width: 90%;
    background-color: rgb(255, 255, 255);
    flex-direction: row;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}
.modal-add-slc .box-modal-add .wrap-add-body .input-grup-add label{
    font-size: 25px;
    font-weight: bold;
}
.modal-add-slc .box-modal-add .wrap-add-body .input-grup-add input[type="file"]{
    background-color: #fff;
    text-align: center;
    align-items: center;
}
.modal-add-slc .box-modal-add .wrap-add-body .input-grup-add input{
    width: 80%;
    height: 100%;
    font-size: 20px;
    color: #000;
    outline: none;
    border: none;
    padding-left: 20px;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.modal-add-slc .box-modal-add .wrap-add-body .input-grup-add select{
    width: 80%;
    height: 100%;
    font-size: 20px;
    color: #000;
    outline: none;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.modal-add-slc .box-modal-add .wrap-add-footer{
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    display: flex;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: flex-end;
}

.modal-add-slc .box-modal-add .wrap-add-footer button{
    width: 150px;
    height: 100%;
    background-color: #F24F8A;
    border: none;
    outline: none;
    margin-right: 20px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
}
.modal-add-slc .box-modal-add .wrap-add-footer button[type="submit"]{
    background-color: #57CAD5;
}
</style>
