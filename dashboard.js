
    // Load cart
    function loadCart() {

        arrName=JSON.parse(localStorage.getItem("recordName"))
        arrEmail=JSON.parse(localStorage.getItem("recordEmail"))
        arrPhone=JSON.parse(localStorage.getItem("recordPhone"))
        arrAddress=JSON.parse(localStorage.getItem("recordAddress"))
        
        $.each(newcart, function (i, d) {

            
            alert(d.name);
            alert(d.status);
            alert(d.price);
            
            
    });

     
}
    // if(cart.Status===){
    //   localStorage.setItem('eaddress', $('#email').val());
    // }

        
    
    if (localStorage.getItem("shoppingCart_2") != null) {
        loadCart();
    }

