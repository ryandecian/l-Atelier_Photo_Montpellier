import { Request, Response, NextFunction } from "express"

/* Cette fonction a pour objectif de vérifier la validité d'un mot de passe */
function verifyPasswordValidator_middleware(req: Request, res: Response, next: NextFunction) {
    const password: string = req.body.password

    /* Vérification de la longueur minimum du mot de passe */
    const steep1 = password.length >= 14 /* Au minimum 14 caractères */
    if (!steep1) {
        return res.status(400).json({ error: "Le mot de passe doit contenir au moins 14 caractères." })
    }

    /* Vérification de la présence d'un chiffre */
    const steep2 = /\d/.test(password) /* Au moins un chiffre */
    if (!steep2) {
        return res.status(400).json({ error: "Le mot de passe doit contenir au moins un chiffre." })
    }

    /* Vérification de la présence d'un caractère spécial */
    const steep3 = /[^a-zA-Z0-9]/.test(password)
    if (!steep3) {
        return res.status(400).json({ error: "Le mot de passe doit contenir au moins un caractère spécial." })
    }

    next()
}

export default verifyPasswordValidator_middleware
