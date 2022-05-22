import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { setLogged } from "../reducer/LoginSlice"
import { BASE_URL } from "../utillity/Constants"
import { postData } from "../utillity/utils"
import { useNavigate } from "react-router-dom"



const LoginForm = () => {


  const navigate = useNavigate()


    return(
        <div className="lg:w-1/3  mx-auto mt-4 p-4"  >
            <Formik
                initialValues={{
                    "username":'',
                    "password":'',
                    "phone_number":"",
                    "address":""
                }}
                onSubmit={(values)=>{
                    postData(`http://localhost:8000/ecommerce/customer/`, {"user":{"username":values.username, "password":values.password}, "address":values.address, "phone_number":values.phone_number})
                    .then((result)=>{
                      alert("Registered Successfully, Please login now")
                      navigate("/login")
                    })
                    .catch((e)=>{
                        console.log(e)
                    })
                    console.log(values) 
                }}
            >
                <Form className="rounded-xl bg-white flex flex-col items-center ">
                <h1 className="my-2 text-4xl p-2 divide-x">Register</h1>
                <div className="border-2 border-yellow-700 w-full" />
                    <label htmlFor="email" className="font-xl font-bold mt-4">Email</label>
                    <Field
                        className="shadow-xl rounded-xl px-3 py-2 my-4 md:w-3/4"
                        id="username"
                        name="username"
                        type="email" 
                        placeholder="Enter Email Address"
                        />
                    <label htmlFor="password" className="font-xl font-bold mt-2">Password</label>
                    <Field
                        className="shadow-xl rounded-xl px-3 py-2 my-4 md:w-3/4" 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Enter password"
                        />
                    <label htmlFor="phone_number" className="font-xl font-bold mt-2">Phone Number</label>
                    <Field
                        className="shadow-xl rounded-xl px-3 py-2 my-4 md:w-3/4" 
                        id="phone_number"
                        name="phone_number"
                        type="phone_number" 
                        placeholder="Enter Phone Number"
                        />
                    <label htmlFor="Address" className="font-xl font-bold mt-2">Enter Address</label>
                    <Field
                        as="textarea"
                        className="shadow-xl rounded-xl px-3 py-2 my-4 md:w-3/4" 
                        id="address"
                        name="address"
                        type="address" 
                        placeholder="Enter Address to deliver your products"
                        />
                    <button className="mt-5 mb-4 rounded-xl px-4 py-2 shadow-xl bg-blue-700  text-white text-xl" type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}
export default LoginForm