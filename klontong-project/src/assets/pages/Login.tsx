import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLogin } from "../store/actions/action";


interface User {
    email: string;
    password: string;
}
const Login: React.FC = () => {
    const dispatch = useDispatch()

    const [ form,setForm] = useState<User>({
        email:"",
        password:""
    })
    const handleChange = (event:any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const postLogin = async (event:any)=> {
        event.preventDefault()
        const response = await dispatch(useLogin(form))
        console.log(response);
        
    }
    return (
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
            <form onSubmit={postLogin} action="" className="mt-6">
                <div className="my-5 text-sm">
                    <label  className="block text-black">Email</label>
                    <input value={form.email} onChange={handleChange} name='email' type="text"  id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
                </div>
                <div className="my-5 text-sm">
                    <label  className="block text-black">Password</label>
                    <input value={form.password} onChange={handleChange}  name='password' type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                </div>

                <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
            </form>
        </div>
    </div>
    )
}

export default Login