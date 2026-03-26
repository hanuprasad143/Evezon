<?php
session_start();

include 'conn.php';

 


if(isset($_POST['loginsubmit']))

{
    $usermobile=$_POST['usermobile'];
    $username=$_POST['username'];
    $language=$_POST['language'];
     $companyunitname=$_POST['companyunitname'];
    $typeoftest=$_POST['typeoftest'];
     
        $_SESSION["usermobile"]=$usermobile;
          $_SESSION["username"]=$username;
          $_SESSION["language"]=$language;
            $_SESSION["companyunitname"]=$companyunitname;
          $_SESSION["typeoftest"]=$typeoftest;

           header('Location: posh.php');

       
}

?>

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


<style type="text/css">
	.main-content{
    width: 50%;
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(0,0,0,.4);
    margin: 5em auto;
    display: flex;
    background-color: rgb(19, 19, 136, 0.5) ;
    color: white;
     background-color:rgb(19, 19, 136, 0.5) !important;
}
.company__info{
    background-color: rgb(19, 19, 136, 0.5);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
}
.fa-android{
    font-size:3em;
}
@media screen and (max-width: 640px) {
    .main-content{width: 90%;}
    .company__info{
        display: none;
    }
    .login_form{
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
    }
}
@media screen and (min-width: 642px) and (max-width:800px){
    .main-content{width: 70%;}
}
.row > h2{
    color:#008080;
}
.login_form{
    background-color: #fff;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
    border-top:1px solid #ccc;
    border-right:1px solid #ccc;
}
form{
    padding: 0 2em;
}
.form__input{
    width: 100%;
    border:0px solid transparent;
    border-radius: 0;
    border-bottom: 1px solid #aaa;
    padding: 1em .5em .5em;
    padding-left: 2em;
    outline:none;
    margin:1.5em auto;
    transition: all .5s ease;
     border-bottom-color: #008080;
    box-shadow: 0 0 5px rgba(0,80,80,.4); 
    border-radius: 4px;
}
.form__input:focus{
    border-bottom-color: #008080;
    box-shadow: 0 0 5px rgba(0,80,80,.4); 
    border-radius: 4px;
}
.btn{
    transition: all .5s ease;
    width: 70%;
    border-radius: 30px;
    color:#008080;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid #008080;
    margin-top: 1.5em;
    margin-bottom: 1em;
}
.btn:hover, .btn:focus{
    background-color: #008080;
    color:#fff;
}
</style>



</head>
<body>

 
    <!-- Main Content -->
    <div class="container-fluid">

          <div class="row main-content bg-success text-center">
              <div style="text-align: center;"> <h3>Welcome to Pearlss 4 Development - Celebrating opportunities & Diversities at workplace.</h3> </div>

    
            <div class="col-md-4 text-center company__info">
                <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
                <h4 class="company_title">Pearlss 4 Development</h4>
            </div>
            <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
                <div class="container-fluid">
                      <br>
                    <div class="row" >
                      
                    <h3 style="color: rgb(19, 19, 136 );">Log In</h3>  
                     
                    </div>
                    <br>
                    <div class="row">
                        <form   class="form-group" action="poshlogin.php" method="post">
                            <label for="cars" style="margin: 10px;color: black;font-weight: 600;">Select Language :</label > <br>
                             <div class="row" style="justify-content: space-around;">
                              

                                <select name="language" id="cars">
                                  <option value="English">English</option>
                                   <option value="Telugu">Telugu</option>
                                   <!-- <option value="Chinese">Chinese</option> -->
                                  
                            
                                </select>
                            </div>
                            <br> 
                            <hr>
                             <label for="cars" style="margin: 10px;color: black;font-weight: 600;">Choose Company/Unit Name :</label > <br>
                            <div class="row"  style="justify-content: space-around;">
                             

                                <select name="companyunitname" id="cars" required>
                                  <option value="Camphor">Camphor</option>
                                  <option value="Apex">Apex</option>
                                  <option value="APC">APC</option>
                                  <option value="MaxKing">MaxKing</option>
                                  
                            
                                </select>
                            </div>

                              <br>   <hr>
                                      <label for="cars" style="margin: 10px;color: black;font-weight: 600;">Choose Type of Test :</label > <br>
                            <div class="row"  style="justify-content: space-around;">
                      

                                <select name="typeoftest" id="cars" required>
                                  <option value="Pre-Test">Pre-Test</option>
                                  <option value="Post-Test">Post-Test</option>
                           
                                  
                            
                                </select>
                            </div>

                              <br>   <hr>
                            <div class="row" style="justify-content: space-around;">
                                <input type="text" name="username" id="username" class="form__input" placeholder="Enter Name" required>
                            </div>
                            <div class="row" style="justify-content: space-around;">
                                <!-- <span class="fa fa-lock"></span> -->
                                <input type="number" name="usermobile" id="usermobile" class="form__input" placeholder="Enter Mobile" required>
                            </div>
                            
                            <div class="row" style="justify-content: space-around;">
                                <input type="submit" value="Submit" name="loginsubmit" class="btn">

                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>


 

</body>

</html>


