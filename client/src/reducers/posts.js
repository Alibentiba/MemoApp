export default (state={posts:null,postToupdate:null,PostToDispalay:null},action)=>{
   
    switch (action.type) {
        case 'FETCH_ALL':
                return  {...state,posts:action.payload}

        case 'DELETE_POST':
                return state={...state,posts:action.payload}

        case 'CREAT_POST':
                const NewpostList=[...state.posts,action.payload]
                return state={...state,posts:NewpostList}

        

        case 'UPDATE_POST':
                 const  NewpostsList=state.posts.map((post) => post._id===action.payload._id ? action.payload :post )
                return state={...state,posts:NewpostsList}

        case 'SETUPDATE_POST' :
                return state={...state,postToupdate:action?.payload}


        case 'SETDETAILS_POST' :
                return state={...state,PostToDispalay:action?.payload}
       
            default:
                return state
        
    }

}
