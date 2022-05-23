import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { setLogged } from "../reducer/LoginSlice"
import { BASE_URL } from "../utillity/Constants"
import { postData } from "../utillity/utils"




const LoginForm = () => {

    const dispatch = useDispatch()

    return(
        <div className="md:w-2/3 mx-auto mt-4 p-4"  >
            <Formik
                initialValues={{
                    "username":'',
                    "password":''
                }}
                onSubmit={(values)=>{
                    postData(`http://localhost:8000/api/token/`, values)
                    .then((result)=>{
                        localStorage.setItem("access_token",result.data["access"])
                        localStorage.setItem("refresh_token", result.data["refresh"])  
                        dispatch(setLogged(true))
                    })
                    .catch((e)=>{
                        console.log(e)
                    })
                    console.log(values)
                }}
            >
                <Form className="rounded-xl bg-white  flex flex-col items-center ">
                <h1 className="my-2 text-4xl p-2 divide-x">Login</h1>
                <div className="border-2 border-blue-700 w-full" />
                    <label htmlFor="email" className="font-xl font-bold mt-4">Email</label>
                    <Field
                        className="shadow-xl rounded-xl px-3 py-2 my-4"
                        id="username"
                        name="username"
                        type="email" 
                        placeholder="Enter Email Address"
                        />
                    <label htmlFor="password" className="font-xl font-bold mt-2">Password</label>
                    <Field
                        className="shadow-xl rounded-xl px-3 py-2 my-4" 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Enter password"
                        />
                    <button className="mt-5 mb-4 rounded-xl px-4 py-2 shadow-xl bg-blue-700  text-white text-xl" type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}
export default LoginForm