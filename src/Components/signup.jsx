import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Slices/registerUserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const SignUpComponent = () => {
  const [passwordType,setPasswordType] = useState('password')
  const [displayPassword, setDisplayPassword] = useState(true);
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [email,setEmail] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const showPassword = () => {
    setDisplayPassword(!displayPassword)
    if (displayPassword) {
      setPasswordType('text')
    } else {
      setPasswordType('password')
    }
  }

  const signUpRequest = async(e)=>{
          e.preventDefault()
          if(!username || !password || !email) return
  
          const data = {
              username:username,
              email:email,
              password:password
          }
  
          dispatch(registerUser(data))

          navigate('/email-verification')
        }

  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          Team Hub
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Register</h3>
            <p className="mt-1.5 text-sm font-medium text-white/50">Happy to have you on onboard!</p>
          </div>
          <div className="p-6 pt-0">
            <form>
              <div>
                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Username</label>
                  </div>
                  <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" autoComplete="off" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
                </div>
              </div>

              <div className="mt-4">
              <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email</label>
                  </div>
                  <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" autoComplete="off" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
                </div>
              </div>

              <div className="mt-4">
                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                  </div>
                  <div className="flex items-center">
                    <input type={passwordType} onChange={(e)=>setPassword(e.target.value)} name="password" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <label onClick={showPassword} className="flex items-center gap-2">
                  <input type="checkbox" name="remember" className="outline-none focus:outline focus:outline-sky-300" />
                  <span className="text-xs">Show password</span>
                </label>
                <a className="text-sm font-medium text-foreground underline cursor-not-allowed" href="/forgot-password">Forgot password?</a>
              </div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <a  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200" href='/login'>Login</a>
                <button onClick={(e)=>signUpRequest(e)} className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-black h-10 px-4 py-2" type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
