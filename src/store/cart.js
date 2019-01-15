export default {
    state:{
        cartlist:[
            // {
                // id:nu,
                // type:'iphone',
                // qty:5,
                // price:8999
            // },
        ]
    },
    getters:{
    //    set(state){
    //        if(!state.cartlist.id || !state.cartlist.type){
    //             state.cartlist = JSON.parens(localStorage.getItem('item'))
    //        }
    //        return state.cartlist
    //    }
    },
    mutations:{
        addcart(state,payload){

            // console.log(payload)
            // let arr = state.cartlist.push(payload);
            // localStorage.setItem("item",JSON.stringify(arr))
            // state.cartlist.push(payload);
        }
    }
}