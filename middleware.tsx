import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/dashboardAdmin",
  "/profile",
  "/profile/changeusernamepassword",
  "/signin",
  "/signup",
  "/bab1",
  "/bab2",
  "/bab3",
  "/bab1_kuis",
  "/bab2_kuis",
  "/bab3_kuis",
  "/bab4_kuis",
  "/pagekuis/bab1_kuis",
]);
