import { useAuth } from "@/context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const[loading, setLoading] = useState(false)
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const { loginAuth, error, isAuthenticated } = useAuth();
  const navigate = useNavigate()
  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const password = passwordRef.current?.value;
    const email = emailRef.current?.value;
    const credientials = { email, password }

      loginAuth({ credientials })
  }

  useEffect(() => {
    if(isAuthenticated) navigate('/dashboard')
  }, [isAuthenticated])

  return (
    <section className="bg-light py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="mb-5">
              <h4 className="text-center mb-4">Welcome back you've been missed!</h4>
            </div>
            <div>
              {error}
            </div>
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required ref={emailRef} />
                        <label htmlFor="email" className="form-label">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" required ref={passwordRef} />
                        <label htmlFor="password" className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                        <label className="form-check-label text-secondary" htmlFor="remember_me">
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit" disabled={loading && !error}>
                          {loading && !error ? (<>
                          <div role="space-x-2">
                              <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                              </svg>
                          </div>
                          </>) : "Log in"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
              <a href="register" className="link-secondary text-decoration-none">Create new account</a>
              <a href="#!" className="link-secondary text-decoration-none">Forgot password</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login