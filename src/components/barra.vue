<template>
  <div id="barra">
     <div class="header">
      <nav class="nav">
        <a href="#" class="text" >ACTIVIDAD 3 <i class="fas fa-pager"></i></a>
        <ul class="nav-barra">
          <li class="text">{{nombre}}</li>
          <i class="fas fa-user-circle fa-3x" style="line-height: 80px; color: white;"></i>
          
        </ul>
      </nav>
    </div> 
    
  </div>
</template>

<script>

export default{
    name: "barra",
    data() {
        return{
            nombre: "Jesús Alfonso Rodríguez Maldonado"
        }
    }
}
</script>

<style>
.text {
  font-size: 20px;
  font-weight: bold;
  padding: 0 40px;
  color: white;
  text-decoration: none;
  line-height: 80px;
}

.header {
  background: #1f618d;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-barra {
  display: flex;
  margin-right: 40px;
  list-style: none;
}

</style>
