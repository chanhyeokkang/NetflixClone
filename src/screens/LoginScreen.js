import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignupScreen';


function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                    <img
                        className='loginScreen_logo'
                        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                        alt=''
                    />
                
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen_button'
                >
                    로그인
                </button>

                <div className='loginScreen_gradient' />
            </div>

            <div className='loginScreen_body'>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>대작 영화와 인기 시리즈, 그리고 게임까지! <br /> 월 5,500원으로 시작하세요.</h1>
                        <h2>지금 바로 가입하세요. 해지는 언제든 가능합니다.</h2>
                        <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>

                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='이메일 주소' />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen_getStarted'
                                >
                                    시작하기
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen