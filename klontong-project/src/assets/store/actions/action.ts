export function  useRegister(data: any) {
    return (async() => {
        const response = await fetch('http://localhost:3000/register', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        const res = await response.json()
        // console.log(res);
        return res
      })
}

export function useLogin(data:any) {
    return async function () {
      try {
        const temp = await fetch("http://localhost:3000/login", {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const data2 = await temp.json()
       
        localStorage.setItem('access_token', data2.access_token)

        return data2

      } catch (error) {
        console.log(error);
        
      }
    }
  }

  export function fecthProduct(page: number = 0){
    return async (dispatch:any) => {
      const data = await fetch('http://localhost:3000/?page=' + page)
      const toJson = await data.json()
      const res = toJson.product
      dispatch({
        type: 'product/fetchSuccess',
        payload : res
      })
    }
    
  }

export const addProductToServer = (data: any) => {
    return async () => {
      try {
        const temp = await fetch("http://localhost:3000/", {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const data2 = await temp.json()
        if (data2.id) {
          return "SUCCESS"
        }
      } catch (error) {
        console.log(error);
        
      }
    }
  }