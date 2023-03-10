export default (state={authData:null},action)=>{
   
    switch (action.type) {
        case 'AUTH':
            console.log('The action Data',action?.payload)
            localStorage.setItem('profile',JSON.stringify({...action?.payload}))
            return {...state,authData:action?.data}
            default:
                return state; 
        
    }

}