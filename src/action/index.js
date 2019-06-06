export function addVote(product){
return{
    type:"ADD_VOTE",
    product:product
}
}

export function removeVote(product){
    return{
        type:"REMOVE_VOTE",
        product:product
    }
    }

