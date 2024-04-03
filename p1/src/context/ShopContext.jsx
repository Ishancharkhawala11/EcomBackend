
import React,{createContext, useEffect, useState} from 'react'

// import all_product from "../components/assets/all_product"

export const ShopContext=createContext(null)
const getDefaultCart=()=>
     {
        let cart={}   
        for (let index = 0; index < 300+1; index++) {
           
            cart[index]=0;
        }     
        return cart;
     }
const  shopContextprovider=(props)=>{
    const [all_product,setAll_product]=useState([])
    const [cart,setCart] =useState(getDefaultCart())
    useEffect(()=>
    {
         fetch("http://localhost:8000/displayall").then((res)=>res.json()).then((data)=>setAll_product(data))
         if(localStorage.getItem('auth-token'))
         {
            fetch("http://localhost:8000/getCart",
            {
                 method:"post",
                 headers:{
                    Accept:"application/form-data",
                    "Content-Type": "application/json",
                    "auth-token":`${localStorage.getItem('auth-token')}`
                 },
                 body:"",
            }).then((res)=>res.json()).then((data)=>setCart(data))
         }
        },[])
 
    const addToCart = (itemId) => {
        setCart((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
        if (localStorage.getItem("auth-token")) {
            fetch("http://localhost:8000/cart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "Content-Type": "application/json",
                    "auth-token":`${localStorage.getItem('auth-token')}`
                },
                body: JSON.stringify({ "itemId": itemId })
            })
            .then(response => {
                // Log the response here
                console.log('Response:', response);
                return response.json();
            })
            .then(data => console.log(data))
          
        }
    };
    
    
   const removeFromCart=(itemId)=>
   {
        setCart((prev)=>
        ({
            ...prev,[itemId]:prev[itemId]-1
        }))
        if (localStorage.getItem("auth-token"))
        {
            {
                fetch("http://localhost:8000/removeCart", {
                    method: "POST",
                    headers: {
                        Accept: "application/form-data",
                        "Content-Type": "application/json",
                        "auth-token":`${localStorage.getItem('auth-token')}`
                    },
                    body: JSON.stringify({ "itemId": itemId })
                })
                .then(response => {
                    // Log the response here
                    console.log('Response:', response);
                    return response.json();
                })
                .then(data => console.log(data))
              
            }
        }
   }
   const getTotalCardAmount=()=>
   {
    let totalam=0;
    for(const item in cart)
    {
        if(cart[item]>0)
        {
            let info=all_product.find((product)=>product.id===Number(item))
            console.log(info.new_price);
            totalam+=info.new_price*cart[item]
           
        }
    }
    return totalam;
   }
   const count=()=>
   {
    let cnt=0
    for (let key in cart){
        if(cart[key]>0)
        {
            cnt+=cart[key];
            console.log(cart[key])
        }
    }
    return cnt;
   }
   const contextValue={all_product,cart,addToCart,removeFromCart, getTotalCardAmount,count}
     return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
     )
}
export default shopContextprovider;