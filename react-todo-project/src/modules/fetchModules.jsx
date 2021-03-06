const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchLogin = async (userid, password) => {
  // 이미 선언된 fetchOption에 body 속성을 추가하기
  fetchOption.body = JSON.stringify({ userid, password });

  const response = await fetch(
    "http://localhost:8080/users/login",
    fetchOption
  );

  if (response.ok) {
    const resultUser = await response.json();
    return resultUser;
  } else {
    alert("Login Fail");
    return [];
  }
};

const fetchLogout = async () => {
  const response = await fetch(
    "http://localhost:8080/users/logout",
    fetchOption
  );
};

const fetchUser = async () => {
  console.log("여기가 계속 반복됨");
  const response = await fetch("http://localhost:8080/users", fetchOption);
  if (response.ok) {
    return await response.json();
  } else return [];
};

export { fetchLogin, fetchLogout, fetchUser };
