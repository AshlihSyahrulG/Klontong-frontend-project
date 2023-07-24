export const counterReducerItem = (state = {item:[] }, action:any)=> {
    switch (action.type) {
      case 'item/fetchSuccess':
        return {item: action.payload}
      default:
        return state
    }
}