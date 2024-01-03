export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("delete ", action);
            console.log(state.transactions.filter(transaction => transaction.id !== action.payload));
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }

}