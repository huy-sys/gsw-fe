<template>
  <header class="header" data-header>
    <div id="head-container" class="header-nav_container">
            <!-- Nav left -->
            <div class="header-nav__left">
                <div class="gswlogo">
                    <img src="../assets/logo.png" alt="">
                </div>
                <p class="line"></p>
                <div class="presented">
                    <p>Presented by</p>
                    <img src="../assets/img/keiser_logo.png" alt="">
                </div>
                <!-- Nav -->
                <div class="nav" style="height: 80px;">
                    <ul id="nav">
                        <li><a href="#">TICKET</a></li>
                    <li><a href="#">SCHEDULE</a></li>
                    <li>
                        <a href="#">TEAM</a>

                        <ul class="subnav">
                            <li><a href="#">Roster</a></li>
                            <li><a href="#">Player Stats</a></li>
                            <li><a href="#">Team Stats</a></li>
                            <li><a href="#">Media Guide</a></li>
                            <li><a href="#">Santa Cruz Warriors</a></li>
                        </ul>

                        </li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CHASE CENTER</a></li>
                    <li><a href="#">...</a></li>
                    </ul>
                </div>

            </div>
            <!-- Nav right -->
            <div class="header-nav__right">
                <div class="search-box">
                    <input class="search-box__input" type="text" placeholder="Search...">
                    <div class="btn btn_common">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <h2>my warriors account</h2>
            </div>
        </div>
  </header>
</template>

<script setup>

</script>