import {
  SignupFormSchema,
  SigninFormSchema,
  FormState,
} from "@/lib/definitions";

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
    const response = await fetch("http://localhost:3100/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Sign-up failed");
    }

    const data = await response.json();
    return { success: true, message: "Sign-up successful" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }

  // const data = await db
  //   .insert(users)
  //   .values({
  //     name,
  //     email,
  //     password: hashedPassword,
  //   })
  //   .returning({ id: users.id });

  // const user = data[0];

  // if (!user) {
  //   return {
  //     message: "An error occurred while creating your account.",
  //   };
  // }

  // TODO:
  // 4. Create user session
  // 5. Redirect user
  // Call the provider or db to create a user...
}

export async function signin(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await fetch("http://localhost:3100/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Sign-in failed");
    }

    const data = await response.json();

    // Store the token in localStorage or a secure cookie
    localStorage.setItem("token", data.data);

    return { success: true, message: "Sign-in successful" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
