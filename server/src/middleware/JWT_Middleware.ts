import jwt from "jsonwebtoken";

function JWT_Middleware(payload: any) {
    const token = jwt.sign(payload, "test")
    console.log(token);
}

export default JWT_Middleware;