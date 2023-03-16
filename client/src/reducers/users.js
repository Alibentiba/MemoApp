export default (state={authData:null},action)=>{
   
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action?.payload}))
            return {...state,authData:action?.data}


            case 'LOGOUT':
                localStorage.removeItem('profile')      
                          return {...state,authData:null}
                          case 'SETDETAILS_POST' :
                            return {...state,PostToDispalay:action?.payload}
            default:
                return state; 
        
    }

}

