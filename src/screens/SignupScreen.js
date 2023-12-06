import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth, createUserWithEmailAndPassword } from '../firebase'; // Firebase 관련 모듈 import
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase의 signInWithEmailAndPassword 함수 import

// 함수형 컴포넌트 선언
function SignupScreen() {
    const emailRef = useRef(null); // email 입력란을 위한 Ref 생성
    const passwordRef = useRef(null); // password 입력란을 위한 Ref 생성

    // 회원 가입 함수
    const register = (e) => {
        e.preventDefault(); // 기본 동작 방지

        // Firebase의 createUserWithEmailAndPassword 함수를 사용하여 회원 가입 수행
        createUserWithEmailAndPassword(
            auth, // 사용할 Firebase auth 객체
            emailRef.current.value, // email 입력란의 값
            passwordRef.current.value // password 입력란의 값
        )
            .then((userAuth) => {
                console.log(userAuth); // 성공 시 userAuth을 로그에 출력
            })
            .catch((error) => {
                alert(error.message); // 실패 시 에러 메시지를 경고창으로 출력
            });
    };

    // 로그인 함수
    const signIn = async (e) => {
        e.preventDefault(); // 기본 동작 방지

        try {
            // Firebase의 signInWithEmailAndPassword 함수를 사용하여 로그인 수행
            const userAuth = await signInWithEmailAndPassword(
                auth, // 사용할 Firebase auth 객체
                emailRef.current.value, // email 입력란의 값
                passwordRef.current.value // password 입력란의 값
            );
            console.log(userAuth); // 성공 시 userAuth을 로그에 출력
        } catch (error) {
            alert(error.message); // 실패 시 에러 메시지를 경고창으로 출력
        }
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>로그인</h1>
                <input ref={emailRef} type="email" placeholder="이메일 주소" />
                <input ref={passwordRef} type="password" placeholder="비밀번호" />
                <button type="submit" onClick={signIn}>
                    로그인
                </button>
                <button className="signupScreen_link" onClick={register}>
                    회원가입
                </button>
                <h4>
                    <span className="signupScreen_gray">Netflix에 처음이세요?</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen; 