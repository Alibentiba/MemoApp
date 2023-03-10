export default (posts=null,action)=>{
   
    switch (action.type) {
        case 'FETCH_ALL':
            return posts= action.payload

        case 'CREAT_POST':
            
                        return posts= [...posts,action.payload]
        case 'DELETE_POST':
                return   posts=posts.filter( item =>item._id !== action.payload );

                case 'UPDATE_POST':
                    return posts.map((post) => post._id===action.payload._id ? action.payload :post );

              default:
                return posts;
        
    }

}
