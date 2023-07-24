const Register: React.FC = () => {
    return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-center">Register</h1>
            <form  action="" className="mt-6">
                <div className="my-5 text-sm">
                    <label className="block text-black">Email</label>
                    <input   type="email" name="email" id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
                </div>
                <div className="my-5 text-sm">
                    <label  className="block text-black">Password</label>
                    <input type="password" name="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                </div>

                <button type='submit' className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Register</button>
            </form>

        </div>
        </div>
    )
}

export default Register