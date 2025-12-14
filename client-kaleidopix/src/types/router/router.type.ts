import type { ReactNode } from "react";

type Router_Type = {
    path: string;
    element?: ReactNode;
    children?: Router_Type;
}[];

export type { Router_Type };
