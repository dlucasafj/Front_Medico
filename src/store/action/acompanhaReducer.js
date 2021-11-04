const initialState = {
    arr:[]
}

export const acompanhaR =(state = initialState,action)=>{
    switch(action.type){
        case 'ADD_ACOMPANHA':
            console.log("Adiciona",action.value)
            return {...state,arr:[...state.arr,action.value]} 
        case 'REMOVE_ACOMPANHA':
            return{...state,arr:action.remove_value }
        default:
            return state;
    } 
}