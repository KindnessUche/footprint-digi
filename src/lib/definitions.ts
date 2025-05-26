import { z } from "zod";

export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});
export const SigninFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        lastName?: string[];
        firstName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type Recommendation = {
  id: number;
  finding_id: number;
  recommendation: string;
  action_url: string;
  priority: "low" | "medium" | "high"; // adjust if needed
  created_at: string;
  updated_at: string;
};

export type Finding = {
  id: number;
  scan_id: string;
  source: string;
  data_type: string;
  data_value: string;
  sensitivity_level: "low" | "medium" | "high"; // adjust if needed
  // breach_date: string | null;
  context: string | null;
  created_at: string;
  updated_at: string;
  recommendations: Recommendation[];
};

export type FindingsGroup = {
  breaches: Finding[];
  profiles: Finding[];
  exposed_data: Finding[];
  insights: Finding[];
  other: Finding[];
};

export type ScanResult = {
  scan_id: number;
  scan_type: string;
  scan_value: string;
  risk_score: number;
  created_at: string;
  findings: FindingsGroup;
  // findings: Finding[];
};

export interface ScanParams {
  params: {
    scanId: string;
  };
}
