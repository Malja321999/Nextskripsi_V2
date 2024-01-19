import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/dashboardAdmin",
  "/profile",
  "/signin",
  "/signup",
  "/bab1_1",
  "/bab1_kuis",
  "/bab2_kuis",
  "/bab3_kuis",
  "/bab4_kuis",
]);
