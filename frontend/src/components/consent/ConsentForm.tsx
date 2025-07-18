import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useConsent } from "./useConsent";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { ConsentField } from "./ConsentField"

type ConsentFormData = {
  [key: string]: string;
};

export const ConsentForm = () => {
  const { consentObjects, isLoading, error, fetchConsents } = useConsent();
  const [formData, setFormData] = useState<ConsentFormData>(() => ({}));

  useEffect(() => {
    fetchConsents();
  }, [fetchConsents]);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = consentObjects.map(({ consent_object: obj }) => ({
      consent_object_id: obj.id,
      selection: formData[obj.id] ?? "",
    }));

    console.log(payload);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">

          {consentObjects.map(({ consent_object: obj }) => (
            <ConsentField
              key={obj.id}
              obj={obj}
              value={formData[obj.id] ?? ""}
              onChange={handleChange}
            />
          ))}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
