<script>

</script>

<template>

  <div class="container_header">
    <div class="container_element">
      <div class="wq">
        <p>WQ</p>
      </div>  
      <div class="menu">
        <img src="../assets/icon_menu.png" alt="icon_menu" class="icon_menu">
      </div>
    </div>  
  </div>
    
</template>

<style scoped>
  
  .container_header {
    background-color: rgb(28, 26, 26, 0);
    width: 100%;
    height: 6%;
    position: absolute;
    box-shadow: inset 0.5px 0.5px 20px rgb(175, 170, 170);
    display: flex;
  }

  .container_element {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 92%;
  }

  .logo_wizard {
    width: 7%;
    height:90%;
  }

  p {
    font-family: 'Reem Kufi Fun', sans-serif;
    color:white;
    font-size: 1.4em;
    border-top: 2px solid white;
    text-align: center;
  }

  .wq {
    width: 3%;
    height: 60%;
    padding-top: 1px;
    border-bottom: 2px solid white;
    margin-left: 1%;
  }

  .menu {
     border: 3px solid white;
     width: 2.5%;
     height: 50%;
     display: flex;
     justify-content: center;  
     border-radius: 0.8em;
     align-items: center;
   }

  .icon_menu {
    width: 60%;
    height: 60%;
  }
</style>
