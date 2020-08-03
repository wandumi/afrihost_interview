<template>
    <div class="header">

        <a href="" class="logoLink">
          <span id="logoText">Iploy</span>
        </a>

        
        <ul class="nav__links">
          <li>
            <router-link to="Modal">
             <i class="fa fa-home"></i>
            </router-link> 
          </li>
          <li class="nav__clipboard">
            <a href="">
            <i class="fa fa-clipboard"></i>
            </a>
          </li>
        </ul>

        <div class="searchInput">
          
          <input type="search" name="search" id="search" placeholder="Build project build by person name">
        </div>

        <ul class="nav__links">
          <li>
            <a href="">
                <i class="fa fa-bell"></i>
            </a>
            <span class="nav__links_notifications">2</span>
          </li>
          <li>
            <a href="" class="nav__bolt">
              <i class="fa fa-bolt"></i>
            </a>
            <span class="nav__links_notifications">X</span>
          </li>
        </ul>


        <div class="login-area">
           
            <div class="profile-text">
      
              <h4>wandumi sichali</h4>
              <h6>Frontend Developer</h6>
            </div>
            
            
            <img src="@/assets/dammy.png" alt="login" id="login-image" >
              

        </div>


       
      </div>

</template>

<script>
  export default {
     name: "Topheader"
  }
</script>
<style scoped>
     .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(23, 27, 38);
      height: 10vh;
      margin-bottom: 50px;
      
    }

    

    .login-area {
      /* justify-content: flex-end; */
      width: 300px;
    }

    .profile-text {
      display: inline-block;
      align-items: stretch;
      width: 200px;
      color: #cdddff;
      font-size: 9px;
      text-align: right;
      padding-right: 10px;
    }

    #login-image {
      width: 50px;
      height: 40px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 10px;
    }


    .logoLink {
      color: #fff;
      font-style: italic;
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      line-height: 1.2;
      width: 100px;
    }

    .nav__links {
       list-style: none;
       position: relative;

    }

    .nav__links li {
      display: inline-block;
      padding: 0 10px;
      border-radius: 5px;
    }

    .nav__links a {
      color: #cdddff;
    }

    .nav__links li:first-child {
      background-color: rgb(33, 39, 53);
      padding: 10px;
      margin-right: 10px;
    }

    .nav__links li:last-child {
      border-radius: 5px;
      padding: 10px;
      background-color: rgb(16, 20, 29);
    }

    .nav__clipboard {
      border: 1px solid #ff795b;
      padding: 5px;
      
    }

    .nav__clipboard a {
      color:#ff795b
    }

    .searchInput {
       width: 300px;

    }

    .searchInput input[type=search] {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 10px;
      background-color: rgb(16, 20, 29);
      text-align: center;
    }

    .login-name {
      width: 300px;
      float: left;
    }

    .nav__links_notifications {
      font-size: .7rem;
      background-color: seashell;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      text-align: center;
      /* right: 1rem; */
    }
</style>
