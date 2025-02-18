export function generateToken(expiresInSeconds: number): string {
  // Create JWT header
  const header = {
    alg: "none",
    typ: "JWT",
  };

  // Create JWT payload with mock data
  const payload = {
    sub: "1234567890",
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    exp: Math.floor(Date.now() / 1000) + expiresInSeconds,
  };

  // Encode header and payload
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url",
  );
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );

  return `${encodedHeader}.${encodedPayload}.`;
}
