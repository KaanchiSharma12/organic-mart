import { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({children}){


const [cart,setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
);


const [wishlist,setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
);



// ADD TO CART

const addToCart = (product) => {

let updatedCart = [...cart];

let existing = updatedCart.find(
item => item.id === product.id
);


if(existing){

updatedCart = updatedCart.map(item =>
item.id === product.id
?
{
...item,
quantity:item.quantity + 1
}
:
item
);

alert(`${product.name} quantity increased in cart`);

}

else{

updatedCart.push({
...product,
quantity:1
});

alert(`${product.name} added to cart`);

}


setCart(updatedCart);

localStorage.setItem(
"cart",
JSON.stringify(updatedCart)
);

};




// REMOVE CART

const removeFromCart=(id)=>{

const updatedCart=cart.filter(
item=>item.id!==id
);


setCart(updatedCart);

localStorage.setItem(
"cart",
JSON.stringify(updatedCart)
);

};




// INCREASE

const increaseQty=(id)=>{

const updatedCart=cart.map(item=>

item.id===id
?
{
...item,
quantity:item.quantity+1
}
:
item

);


setCart(updatedCart);

localStorage.setItem(
"cart",
JSON.stringify(updatedCart)
);

};




// DECREASE

const decreaseQty=(id)=>{


const updatedCart=cart.map(item=>

item.id===id && item.quantity>1
?
{
...item,
quantity:item.quantity-1
}
:
item

);


setCart(updatedCart);

localStorage.setItem(
"cart",
JSON.stringify(updatedCart)
);


};

const removeWishlist = (id)=>{

    const updatedWishlist = wishlist.filter(
        item => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
    );

};


// WISHLIST

const addWishlist=(product)=>{


let updated=[...wishlist];


let exist=updated.find(
item=>item.id===product.id
);


if(!exist){

updated.push(product);

}


setWishlist(updated);


localStorage.setItem(
"wishlist",
JSON.stringify(updated)
);


};



return(

<CartContext.Provider
value={{
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    addWishlist,
    removeWishlist,
    increaseQty,
    decreaseQty
}}
>
{children}

</CartContext.Provider>


)


}


export default CartProvider;