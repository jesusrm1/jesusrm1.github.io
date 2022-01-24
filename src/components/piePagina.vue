<template>
    <footer>
        <div class="footer-content">
            <h3>Gracias por su atención</h3>
            <p>Esta página fue creada por Jesús Rodriguez, para tener mas información del diseño contacte a:</p>
            <ul class="socials">
                <li><a href="https://www.facebook.com/profile.php?id=100004843367071"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/jebus_rodriguez/?hl=es-la"><i class="fab fa-twitter"></i></a></li>
                <li><a href="jesusmald.23@gmail.com"><i class="fab fa-google"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCAslB-zt7nLeru-NWc0uE1w"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
    
    </footer>
</template>

<script>

</script>

<style>

footer{
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1f618d73;
    height: auto;
    width: 100vw;
    padding-top: 40px;
    color: #fff;
    margin: 4% 0 0;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 2.1rem;
    font-weight: 500;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
}
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #fff;
    border: 1.1px solid white;
    padding: 5px;
    border-radius: 50%;
}
.socials a i{
    font-size: 1.1rem;
    width: 20px;
    transition: color .4s ease;
}
.socials a:hover i{
    color: aqua;
}

</style>