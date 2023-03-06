export default  (p=null,action)=>{
   
    switch (action.type) {
       
         case 'SETUPDATE_POST' :
              return p= action.payload
              default:
                return p=null;
        
    }
    return p;

}