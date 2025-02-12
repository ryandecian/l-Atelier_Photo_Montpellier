import * as argon2 from "argon2";
import usePoolConnection from "../database/config";
import { Request, Response, NextFunction } from "express";
import { RowDataPacket } from "mysql2";

async function VerifyPassword( req: Request, res: Response, next: NextFunction ) {
    try {
        // Envois une requête pour récupérer 
        const [results] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT * FROM user WHERE email= ?"
        )
    }
    catch {}
}

export default VerifyPassword;