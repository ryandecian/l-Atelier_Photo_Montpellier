import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../database/config";
import { ResultSetHeader } from "mysql2";

async function InsertUser(req: Request, res: Response, next: NextFunction) {
    const [results] = await usePoolConnection.query<ResultSetHeader>(
        "INSERT INTO user (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?, ?)",
        [req.body.firstname, req.body.lastname, req.body.address, req.body.email, req.body.password],
    );

    if (results.affectedRows === 0) {};
};

export default InsertUser;