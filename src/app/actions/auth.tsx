"use server";
import {
  SignupFormSchema,
  SigninFormSchema,
  FormState,
} from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/sessions";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // const bcrypt = require("bcrypt");
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // 2. Prepare data for insertion into database
  const { firstName, lastName, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  // const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Auth Library's API
  try {
    const response = await fetch(
      "https://digital-footprint-backend.onrender.com/auth/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Sign-up failed");
    }

    const data = await response.json();
    console.log("Server action received data:", data);
    await createSession(data.data.token);

    return {
      success: true,
      message: data.message,
      user: data.data,
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }

  // TODO:
  // 4. Create user session
  // 5. Redirect user
  // Call the provider or db to create a user...
}

export async function signin(state: FormState, formData: FormData) {
  const field = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(field);
  const { email, password } = field;

  try {
    const response = await fetch(
      "https://digital-footprint-backend.onrender.com/auth/sign-in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Sign-in failed");
    }

    const data = await response.json();
    console.log("Server action received data:", data);
    await createSession(data.data);

    return {
      success: true,
      message: data.message,
      user: data.data, // or whatever the backend sends
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function logout() {
  await deleteSession();
  return "logged out";
}
