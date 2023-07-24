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