// Compatibility for the legacy header path on the preserved mortgage page.
export const dynamic = "force-dynamic";
export function GET() {
  return Response.redirect("https://www.covarum.com/join-covarum", 307);
}
