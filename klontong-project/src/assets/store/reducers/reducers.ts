interface typeProduct{
    CategoryId: number;
     categoryName: string; 
     sku:string;
     name:string;
     description:string; 
     weight:number;
     width:number;
     length:number;
     height:number;
     image:string; 
     harga:number;
}
interface productState {
    data: typeProduct[];
    loading: boolean;
    error: string | null;
  }
const initialProductState: productState = {
    data: [],
    loading: false,
    error: null
  };
export const counterReducerProduct = (state = initialProductState, action:any)=> {
    switch (action.type) {
      case 'product/fetchSuccess':
        return {data: action.payload}
      default:
        return state
    }
}