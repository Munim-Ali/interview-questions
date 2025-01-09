function fetchUserData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej({
        name: "Munim",
        url: "https://munim-ali.web.app",
      });
    }, 3000);
  });
}

// fetchUserData.then().catch();

async function getUserData() {
  try {
    console.log("Fetching User data...");
    const userData = await fetchUserData();
    console.log("User Data Feched Successfully.");

    console.log("User Data:", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

// getUserData();

//Promise All

function fetchPostData() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Post data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Comment data Fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data..");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);
    console.log("Fetching completed");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
