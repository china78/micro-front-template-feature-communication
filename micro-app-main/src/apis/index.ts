import axios from "axios";

const instance = axios.create({
  baseURL: "http://dev-api.jt-gmall.com",
});

instance.interceptors.response.use(reply => reply.data);

const data = {
  data: {
    loginQuickly: {
      token: 'token&&113131414&&dsfsf&&3113&&fsffffdfdf'
    }
  }
}

/**
 * 快速登录
 */
export const ApiLoginQuickly = () => {
  // return instance.post("/member", {
  //   query: "{ loginQuickly { token } }",
  // });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
};
