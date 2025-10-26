import { createServerApiHandler } from "../../serverApiFactory";

export const POST = createServerApiHandler<void>(
  "POST",
  "/api/members?role=ROLE_STUDENT"
);
