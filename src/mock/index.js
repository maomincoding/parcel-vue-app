import Mock from "mockjs";

const data = {
  id: "1",
  userName: "maomincoding",
};

Mock.mock("/login", "get", data);

export default Mock;
