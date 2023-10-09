export async function GET(_: Request) {
  return new Response(
    JSON.stringify({
      message: "Hello from education route there's nothing to see here",
    })
  );
}
