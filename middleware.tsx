import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/",
  "/halaman_guru",
  "/halaman_guru/data_siswa",
  "/halaman_guru/data_kelas",
  "/halaman_guru/data_hasil_kuis",
  "/halaman_guru/data_ujian_akhir",
  "/dashboardAdmin",
  "/profile",
  "/profile/changeusernamepassword",
  "/profile/changeusernamepassword/GantiNama",
  "/profile/changeusernamepassword/GantiSandi",
  "/signin",
  "/signup",
  "/bab1_1",
  "/bab1_2",
  "/bab2",
  "/bab3",
  "/bab1_kuis",
  "/bab2_kuis",
  "/bab3_kuis",
  "/bab4_kuis",
  "/pagekuis/bab1_kuis",
]);
