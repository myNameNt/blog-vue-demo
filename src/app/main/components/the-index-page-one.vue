<template>
  <section class="page-one">
    <img class="page-one__picturn" src="../../../assets/img/header-picture.jpg" alt="">
    <h3 class="page-one__name">聂挺</h3>
    <p class="page-one__introduce">一只野蛮生长的程序猿......</p>
  </section>
</template>
<script>
export default {

}
</script>

<style lang='scss'>
.page-one{
  box-sizing: border-box;
  padding-top: 150px;
  &__picturn{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    vertical-align: top;
    box-shadow: 0px 0px 15px rgba(0,0,0,1);
    background-clip: padding-box;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  &__name{
    font-size: 32px;
    color: transparent;
    text-shadow: 0px 0px 1px #FAFFF0;
  }
  &__introduce{
    font-size: 20px;
    line-height: 1.8;
    color: #FAFFF0;
  }
}
</style>
