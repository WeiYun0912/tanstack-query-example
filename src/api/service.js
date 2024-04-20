import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getPosts = async (signal) => {
  try {
    const res = await axios.get("/posts", {
      signal,
    });
    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      // 處理其他錯誤
      console.error("Error fetching posts", error);
    }
  }
};

export const addPost = async () => {
  try {
    const res = await axios.post("/posts", {
      title: "foo1",
      body: "bar2",
      userId: crypto.randomUUID(),
    });
    return res.data; // message : "新增成功"
  } catch (error) {
    console.log(error);
  }
};
