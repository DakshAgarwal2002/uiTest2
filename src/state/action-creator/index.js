export const addEvent=(eventType)=>{
    return(dispatch)=>{
        dispatch({
            type: 'deposit',
            name:eventType
        })
    }
    }