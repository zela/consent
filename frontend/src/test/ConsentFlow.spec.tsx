import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { StrictMode } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { LoginFormPage } from "../components/auth/LoginFormPage";
import ConsentPage from "../components/consent/ConsentPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { AuthProvider } from "../components/auth/AuthProvider";
import { ConsentProvider } from "../components/consent/ConsentProvider";

test("fills and submits the consent form", async () => {
  // Render the app with MemoryRouter for testing, starting at login page
  const { getByLabelText, getByRole, getByText } = render(
    <StrictMode>
      <AuthProvider>
        <ConsentProvider>
          <MemoryRouter initialEntries={["/login"]}>
            <Routes>
              <Route path="/login" element={<LoginFormPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<ConsentPage />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </ConsentProvider>
      </AuthProvider>
    </StrictMode>,
  );

  // Fill in login credentials
  const usernameInput = getByLabelText(/username/i);
  const passwordInput = getByLabelText(/password/i);
  const loginButton = getByRole("button", { name: /login/i });

  await usernameInput.fill("testUser");
  await passwordInput.fill("testPassword");
  await loginButton.click();

  // Wait for consent form to load
  await expect
    .element(getByText(/how would you like to be contacted/i))
    .toBeInTheDocument();

  // Fill the dynamic form fields
  // Fill phone number input
  const phoneInput = getByLabelText(/phone number/i);
  await phoneInput.fill("+1234567890");

  // Select email option from radio group
  const emailRadio = getByRole("radio", { name: /please write me an email/i });
  await emailRadio.click();

  // Set up console log capture before submitting
  const logs: string[] = [];
  const originalConsoleLog = console.log;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.log = (...args: any[]) => {
    logs.push(JSON.stringify(args[0]));
    originalConsoleLog(...args);
  };

  // Submit the form
  const submitButton = getByRole("button", { name: /submit/i });
  await submitButton.click();

  // Restore console.log and verify payload
  console.log = originalConsoleLog;

  await expect.poll(() => logs.length).toBeGreaterThan(0);

  const payload = JSON.parse(logs[0]);
  expect(payload).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        consent_object_id: "ContactOption",
        selection: "email",
      }),
      expect.objectContaining({
        consent_object_id: "PhoneNumber",
        selection: "+1234567890",
      }),
    ]),
  );
});
