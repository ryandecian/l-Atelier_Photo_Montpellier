import { Request, Response } from "express";

const getOneTestController = async (req: Request, res: Response) => {
    res.status(200).json({ message: "test ok" });
};

export default getOneTestController;
