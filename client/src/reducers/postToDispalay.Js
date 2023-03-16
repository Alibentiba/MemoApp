export default (state={PostToDispalay:null},action)=>{
   
    switch (action.type) {
         case 'SETDETAILS_POST' :
            return {...state,PostToDispalay:action?.payload}
              default:
                   return state

        
    }
   

}