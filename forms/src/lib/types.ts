import { z } from "zod";




export  const signUPSchema = z.object({
    name: z
      .string()
      .min(3, "Minimum 3 character required.")
      .max(20, "Maximum 20 character required."),
    email: z
      .string()
      .email("Email is required.")
      .min(2, "Minimum 2 character required."),
    password: z
      .string()
      .min(8, "Minimum 8 character is required.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "must be 1 lowercase, 1 uppercase, 1 digit and 1 special character"
      ),
    confirmPassword: z.string(),
  }).refine((data)=>data.password === data.confirmPassword , {
    message:"Password do not match.",
    path:["confirmPassword"]
  })


export type Inputs = z.infer<typeof signUPSchema>