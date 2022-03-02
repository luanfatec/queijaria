import { NextFunction, Request, Response } from "express";

export function MDErrors(err: Error, request: Request, response: Response, next: NextFunction) {
    if (err instanceof Error) {
        return response.json({
            status: "error",
            message: err.message
        });
    }

    return response.status(500).json({
        status: "errorInternal",
        message: "Internal Server Error"
    });
}