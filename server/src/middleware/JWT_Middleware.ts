import jwt from "jsonwebtoken";

function JWT_Middleware(payload: any) {
    const token = jwt.sign(payload, "test")
    return (token)
}

export default JWT_Middleware;