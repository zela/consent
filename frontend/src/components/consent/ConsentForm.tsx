import { useEffect } from "react";
import { useConsent } from "./useConsent";

export const ConsentForm = () => {
  const { consentObjects, isLoading, error, fetchConsents } = useConsent();

  console.log(consentObjects);

  useEffect(() => {
    fetchConsents();
  }, [fetchConsents]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Consent Form</h1>
      <ul>
        {consentObjects.map((o: any) => (
          <li key={o.consent_object.id}>{o.consent_object.title}</li>
        ))}
      </ul>
    </div>
  );
};
