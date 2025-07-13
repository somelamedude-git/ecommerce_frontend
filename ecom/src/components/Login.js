import '../styles/Login.css';

export default function LoginPage(){
    return(
        <div className='Page'>
        <div className='image-holder'>
            <img src='/fash.png' className='fashion'/>
        </div>
        <div className='login-form-container'>
            <div className='main-form'>
                <form className='login-form'>
                    <div className='header'>
                        <h1>LOGIN</h1>
                    </div>
                    <div className='inputs'>
                        <input className='info-input' placeholder='Username'/>
                        <input className='info-input' placeholder='Name'/>
                    </div>
                    <div className='forgot'>
                        <a href='#' className='forgot-password'>Forgot Password?</a>
                    </div>
                    <div className='line'></div>
                    <div>
                        <button type='submit' className='submit-login'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}