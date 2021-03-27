import request from './index.js';

export function useLogin() {
    return request({
      url: "/login",
      method: "get",
    });
}
