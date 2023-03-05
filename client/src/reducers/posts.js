export default (posts=null,action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
         case 'CREAT_POST':
                        return [...posts,action.payload]
    
        default:
            return posts
    }
}