export default (state={postToupdate:null},action)=>{
   
    switch (action.type) {
       
         case 'SETUPDATE_POST' :
              return {...state,postToupdate:action?.payload}
              default:
                return state;
        
    }
 

}