var itemImages=[];
var itemNames=[];
var itemPrices=[];
var price;
var name;
var images;
var TotalPrice;


$(".newItem").click(function(){
    TotalPrice=0;
    price=$(".itemPrice").val();
    name=$(".itemName").val();
    images=$(".itemImage").val();
    
    
    itemPrices.push(price);
    itemNames.push(name);
    itemImages.push(images);
    
    $(".cart").append("<div class='item'><img src="+images+"><p>"+name+"</p><p>$"+price+"</p></div>");
    
    itemPrices.forEach(function(total){
       TotalPrice=TotalPrice+parseInt(total);
       $(".number").text("Items in Cart: "+itemImages.length);
             $(".total").text("Total: $"+TotalPrice);
    });
});
$(".purchase").click(function(){
   alert("Your total is $"+TotalPrice+". Thanks for purchasing "+itemNames[0] +" and all of your other items!");
 
});
