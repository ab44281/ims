import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const authFormSchema = (type: string) => z.object({
  // sign up
  firstName: type === 'signIn' ? z.string().optional() : z.string().min(3),
  lastName: type === 'signIn' ? z.string().optional() : z.string().min(3),
  address1: type === 'signIn' ? z.string().optional() : z.string().max(50),
  city: type === 'signIn' ? z.string().optional() : z.string().max(50),
  state: type === 'signIn' ? z.string().optional() : z.string().min(2).max(2),
  postalCode: type === 'signIn' ? z.string().optional() : z.string().min(3).max(6),
  dateOfBirth: type === 'signIn' ? z.string().optional() : z.string().min(3),
  ssn: type === 'signIn' ? z.string().optional() : z.string().min(3),
  // both
  email: z.string().email(),
  password: z.string().min(3),
})
