import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <main class="form-signin w-50 p-5 shadow-lg my-5 m-auto">
                <form>
                    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal">Login</h1>

                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-check text-start my-3">
                        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
                    <span>Don't Have An Account ? <Link to={'/register'}>Sign Up</Link></span>
                    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                </form>
            </main>


        </div>
    )
}

export default Login