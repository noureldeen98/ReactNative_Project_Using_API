


export const reducer = (state={},action)=>{
    console.log(action)
    switch(action.type){
        case 'USERS_LIST':{
            return {...state,list:action.payload}
        }
        case 'USERS_DETAILS':{
            return {...state,details:action.payload}
        }
        case 'CLEAR_DETAILS':{
            return {...state,details:{}}
        }
        default :{
            return state;
        }
    }
}
