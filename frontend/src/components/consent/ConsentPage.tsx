import React, { useContext } from "react";
import { AuthContext } from "@/components/auth/AuthContext";
import { Button } from "@/components/ui/button";
import { ConsentForm } from "@/components/consent/ConsentForm";

const ConsentPage: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { logout } = authContext;

  return (
    <div className="flex flex-col items-center p-4 gap-8">
      <div className="w-full max-w-sm">
        <Button variant="neutral" onClick={logout}>
          Logout
        </Button>
      </div>
      <ConsentForm />
    </div>
  );
};

export default ConsentPage;
