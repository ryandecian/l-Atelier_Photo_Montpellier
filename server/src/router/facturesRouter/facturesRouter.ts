import express from "express";

const facturesRouter = express.Router();

//import des Middlewares :
import facturesGetResponse from "./facturesResponse/facturesGetResponse";
import facturesPostResponse from "./facturesResponse/facturesPostResponse";
import facturesDeleteResponse from "./facturesResponse/facturesDeleteResponse";

// URI : /api/factures
facturesRouter.get("/", 
    facturesGetResponse,
);

// URI : /api/factures/upload
facturesRouter.post("/upload", 
    facturesPostResponse,
);

// URI : /api/factures/:id
facturesRouter.delete("/:id", 
    facturesDeleteResponse,
);

export default facturesRouter;
