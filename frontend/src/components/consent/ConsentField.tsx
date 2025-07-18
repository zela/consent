import type { ConsentObject } from "./useConsent";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ConsentFieldProps {
  obj: ConsentObject;
  value: string;
  onChange: (id: string, value: string) => void;
}

export const ConsentField = ({ obj, value, onChange }: ConsentFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={obj.id}>
      {obj.title}
      {obj.required && <span className="text-red-500 ml-1">*</span>}
    </Label>

    <p className="text-sm text-gray-400">{obj.description}</p>

    {obj.type === "INPUT" && (
      <Input
        id={obj.id}
        value={value}
        onChange={(e) => onChange(obj.id, e.target.value)}
        required={obj.required}
      />
    )}

    {obj.type === "SELECT" && (
      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(obj.id, v)}
        required={obj.required}
      >
        {obj.options.map((opt) => (
          <div key={opt.id} className="flex items-center space-x-2">
            <RadioGroupItem value={opt.id} id={`${obj.id}-${opt.id}`} />
            <Label htmlFor={`${obj.id}-${opt.id}`} className="font-normal">
              {opt.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
    )}
  </div>
);
