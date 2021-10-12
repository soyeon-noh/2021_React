import { useEffect, useRef } from "react";
import "../../css/GoogleButton.css";
import { useUSerContext } from "../../context";

const GoogleButton = () => {
  const buttonRef = useRef();
  const { setUser } = useUSerContext();

  const googleResponse = (result) => {
    const profile = result.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getID();
    const name = profile.getName();
    const image = profile.getImageUrl();

    const Token = result.getAuthResponse().id_token;

    setUser({
      userid: email,
      login_source: "GOOGLE",
    });
    alert(email + " 님 반갑습니다");
  };

  /**
   * public/index.html 파일에 아래 script를 import 한다
   * src="https://apis.google.com/js/api:client.js"
   */
  const googleSDK_init = () => {
    if (!window.gapi) {
      alert("Google API NOT Found");
      return;
    }

    // google API 가 활cd성화되고
    // 활성화된 API 중에서 auth2가 loading(사용할 준비가 되면)
    // 다음 코드를 자동으로 실행해라.
    window.gapi.load("auth2", async () => {
      // init를 초기화 시켜준다
      const auth2 = await window.gapi.auth2.init({
        client_id:
          "819100873334-r3gjkehge2tsd5ka36ps16d20dflgfkc.apps.googleusercontent.com",
        scope: "profile email",
      });

      if (auth2?.isSignedIn.get()) {
        console.log("로그인이 이미 된 상태");
        // 원하는 곳으로 redirect
      }

      // 정상적으로 로그인이되면 뒤의 함수를 실행한다.
      await auth2.attachClickHandler(buttonRef.current, {}, googleResponse);
    });
  };

  // 버튼이 만들어지면서 이 함수가 실행된다.
  useEffect(googleSDK_init, []);

  // 로그아웃 임시코드
  // getAuthInstance()는 단독으로쓰면 오류가 발생하는데
  // 이미 로그인이 성공한 (init) 경우에만 실행되므로 단독작성
  const logout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2?.disconnect();
    alert("Logout OK!");
  };

  // id는
  // react 코드를 작성할 때는 사용할 수 없음
  // css를 작성할 때는 사용할 수 있음
  return (
    <div id="buttonWrapper">
      <div id="myGoogleBtn" ref={buttonRef}>
        <span className="icon"></span>
        <span className="buttonText">Google 로그인</span>
        <span className="buttonText" onClick={logout}>
          Google 로그아웃
        </span>
      </div>
    </div>
  );
};
// 현재 로그아웃을 누르면 자동으로 myGoogleBtn 도 눌러지는 버블링이 발생
// 핸들링이 안 된다.

export default GoogleButton;
