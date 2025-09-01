import express, { Request, Response } from "express";

const logout_controller = async (req: Request, res: Response) => {
    try {
        res.clearCookie("jwtTokenServerLAPM", {
            httpOnly: true,
            // secure: true, seulement en production
            sameSite: "lax",
            path: "/",
        });
        res.status(200).json({ message: "Déconnexion avec succès" });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Échec de la déconnexion" });
        return;
    }
};

export default logout_controller;
