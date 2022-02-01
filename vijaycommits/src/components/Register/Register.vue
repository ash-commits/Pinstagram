<template>
    <div class="body">
       <center>
           <div class="card" style="width: 22rem">
               <img class="card-img-top" src="@/assets/logoInsta.jpeg" alt="Card image cap" height="160px" width="50px">
                    <div class="card-body">
                            <p class="card-text">You can see images, posts and people by creating an account</p>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-secondary btn-block mb-2 mt-2">LogIn with PageBook</button>
                    </div>
                <p class="mt-2 mb-2">------------------- REGISTER ------------------</p>
                <form class="insideForm">
                    <div class="form-group">
                        <input type="text" class="form-control mb-2" id="inputNumber" aria-describedby="emailHelp" placeholder="Enter mobile Number" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control mb-2" id="fullName" aria-describedby="emailHelp" placeholder="Enter name (considered As UserName)" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
                    </div>
                    <button type="submit" class="btn btn-info mt-2">Submit</button>
                </form>
                <div class="card-body">
                    <p class="card-text">By signing up, you <b>agree to our Terms, Data Policy</b> and <b>Cookie Policy</b>.</p>
                </div>
            </div> 
            <div>
                <div class="card" style="width: 22rem">
                        <div class="card-body">
                            <p>Have an account?<a href="#signIn" class="card-link"><b>SignIn</b></a></p>
                        </div>
                </div>
            </div>
            <div class="down">
                <div class="data">
                    <p><a href="/#" class="link-secondary">META</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">About</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">Blog</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">Help</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">API</a></p>
                </div>
                <div class="data">
                    <p><a href="/#" class="link-secondary">GitSource</a></p>
                </div>
            </div>
            <div class="copyRight">
                <p>&copy 2022 Pnstagram from TeamRaj</p> 
            </div>
        </center>
    </div>
</template>

<style scoped>
.insideForm
{
    margin-left: 20px;
    margin-right: 20px;
}
.card{
    margin-bottom: 10px;
}
.card-link{
    text-decoration: none;
}
.body{
    background-color: whitesmoke;
}
.down
{
    display: flex;
}
.data
{
    margin-top: 70px;
    width: 10000px;
    font-size: 10px;
}
.copyRight
{
    color: grey;
    font-size: 10px;
}
.link-secondary{
    text-decoration: none;
}
</style>