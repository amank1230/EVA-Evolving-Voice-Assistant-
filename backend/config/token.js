import jwt from "jsonwebtoken";

const genToken = (userId) => {
  try {
    const jwtsecret = "JHGDSJHKJSD";
    return jwt.sign({ userId }, jwtsecret, { expiresIn: "10d" });
  } catch (error) {
    console.log("❌ Error in token.js", error);
  }
};

export default genToken;
