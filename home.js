$(document).ready(function(){
    console.log('home.js loaded');

 if (localStorage.getItem('registered') ==='true'){
        console.log('user is alredy registered');
        const $registrationbutton=$('#registration-button');
        if($registrationbutton.length){
            $registrationbutton.hide();
    }
}
else{
    console.log("Not registered");
}

});