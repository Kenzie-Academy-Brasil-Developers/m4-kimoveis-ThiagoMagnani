import { Router } from "express";
import { userRouter } from "./users.router";
import { categoryRouter } from "./categories.router";
import { realEstateRouter } from "./realEstate.router";
import { schedulesRouter } from "./schedules.router";
import { loginRouter } from "./sessions.router";

export const routes: Router = Router()

routes.use("/users", userRouter);
routes.use("/login", loginRouter);
routes.use("/categories", categoryRouter);
routes.use("/realEstate", realEstateRouter);
routes.use("/schedules", schedulesRouter);
