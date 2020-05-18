<template>
    <section>
        <div class="coffee-menuss">

            <div class="history-card-slc">

                <div class="card-info">
                    <h3>Todays Income</h3>
                    <h1>Rp. 100.000</h1>
                    <h3>+2% Yesterday</h3>
                </div>

                <div class="card-info">
                    <h3>Todays Income</h3>
                    <h1>Rp. 100.000</h1>
                    <h3>+2% Yesterday</h3>
                </div>

                <div class="card-info">
                    <h3>Todays Income</h3>
                    <h1>Rp. 100.000</h1>
                    <h3>+2% Yesterday</h3>
                </div>

            </div>

            <div class="revenue-slc">

            </div>

            <div class="recent-slc">

            </div>

        </div>
    </section>
</template>

<script>
export default {
  name: 'History',
};
</script>

<style scoped>
section .coffee-menuss{
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

section .coffee-menuss .history-card-slc{
    width: 100%;
    /* height: 300px; */
    display: flex;
    background-color: rgb(231, 231, 231);
    justify-content: space-evenly;
}
section .coffee-menuss .history-card-slc .card-info{
    width: 450px;
    height: 250px;
    background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    display: flex;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    box-shadow: 10px 15px 10px rgba(255, 143, 178, 0.25);
}

section .coffee-menuss .history-card-slc .card-info h3{
    font-size: 15px;
    font-family: 'Airbnb Cereal App Book';
    margin-top: 10px;
    margin-bottom: 10px;
}
section .coffee-menuss .history-card-slc .card-info h1{
    font-size: 35px;
    font-family: 'Airbnb Cereal App Book';
}

section .coffee-menuss .history-card-slc .card-info::before{
    content: '';
    position: absolute;
    top: 40px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.25);
    width: 40%;
    height: 50%;
    /* border-radius: 50%; */
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
section .coffee-menuss .history-card-slc .card-info::after{
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.25);
    width: 40%;
    height: 50%;
    /* border-radius: 50%; */
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

section .coffee-menuss .revenue-slc{
    width: 100%;
    height: 450px;
    background-color: rgba(255, 143, 178, 0.25);
    display: flex;
    margin-top: 50px;
}

section .coffee-menuss .recent-slc{
    width: 100%;
    height: 450px;
    background-color: rgba(255, 143, 178, 0.25);
    display: flex;
    margin-top: 50px;
}
</style>
