// userid와 password를 넘겨받아서
// 세션에있는걸 가져와야해서 access-뭐시기랑 credentials 뭐시기가 필요하다
const fetchLogin = async (userid, password) => {
  const response = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    body: JSON.stringify({
      userid,
      password,
    }),
  });

  if (response?.ok) {
    const resultUser = response.json();
    return resultUser;
  } else {
    return [];
  }
};

// 세션을 가져올 필요가없으니 더 간단
const fetchJoin = async (joinData) => {
  const response = await fetch("http://localhost:8080/users/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joinData),
  });

  if (response.ok) {
    const result = await response.json();

    // console.table(JSON.stringify(json));
    return result;
  }
};

// 보내는 데이터는 없고
// 세션에 등록되어 있는 사용자를 보여달라
const fetchUser = async () => {
  // /users 요청하면
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  // 정상적으로 가져와지면 데이터 return
  // 아니면 비어있음
  return response.json();
};

const fetchLogout = async () => {
  const response = await fetch("http://localhost:8080/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return response.json();
};

export { fetchJoin, fetchLogin, fetchUser, fetchLogout };
