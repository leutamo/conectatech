import React from 'react';

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Presionando el botón de Login");
    }

    return(
        <section>
            <h1 className='bg-black text-white'>Login User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" autoComplete="off" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" autoComplete="off" required />

                <button>Sign In</button>
            </form>
            <p>
                <span><a href="#">I forgot my password?</a></span>
            </p>
            <button>Register</button>
        </section>
    );
}

export default Login;