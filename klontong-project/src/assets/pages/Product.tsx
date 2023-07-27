import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { fecthProduct } from "../store/actions/action";
import { Link } from "react-router-dom";
  
const Product:React.FC = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState<number>(0)
    useEffect( () => {
        dispatch(fecthProduct(page))
    },[page])
    const products = useSelector((state: any) =>{
        return state.data
    })
    const next = () => {
      if (page >= 0) {
        setPage(page + 1) 
      }
    }
    const prev = () => {
      if (page > 0) {
        setPage(page - 1) 
      }
    }
    
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product: any) => ( 
              <Link to={`/product/${product.id}`}>
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      alt="image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.harga}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <h1 className="font-semibold text-lg">Current page {page + 1}</h1>
          </div>
            <div className="flex justify-between mt-10">
              <button onClick={prev} type="button" className="font-semibold border rounded-full px-4 border-black">Prev</button>
              <button onClick={next} type="button" className="font-semibold border rounded-full px-4 border-black">Next</button>
            </div>
        </div>
      </div>
    )
  }
  

  export default Product