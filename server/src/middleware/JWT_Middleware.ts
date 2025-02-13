import jwt from "jsonwebtoken";

function JWT_Middleware(payload: any) {
    const token = jwt.sign(payload, "test", {expiresIn: 60 * 60}) //60s * 60 = 1h
    return (token)
}

export default JWT_Middleware;