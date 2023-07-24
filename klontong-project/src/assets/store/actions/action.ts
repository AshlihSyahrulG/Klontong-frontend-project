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