
export default(state,action)=>{
    console.log(action);
    switch(action.type){
    case "ADD_VOTE":
     state.map((data)=>{
         if(data.name==action.product.name){
          data.votes=data.votes+1;
         }
     })
     return state;

    break;
    case "REMOVE_VOTE":
    state.map((data)=>{
        if(data.name==action.product.name && data.votes>0){
         data.votes=data.votes-1;
        }
    })
    return state;
    
    default:
    return state;
    }
}