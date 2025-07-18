interface Credentials {
  username: string;
  password: string;
}

export async function authenticate(credentials: Credentials) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Server error (${res.status}): ${text || res.statusText}`);
  }

  return res.json();
}
