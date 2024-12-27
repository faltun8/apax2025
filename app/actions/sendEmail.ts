'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakter olmalıdır." }),
})


export async function sendEmail(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email, subject, message } = validatedFields.data

  console.log('Email would be sent with the following details:', {
    to: 'frknaltn08@gmail.com',
    from: 'frknaltn08@gmail.com',
    subject,
    name,
    email,
    message
  })
  return { success: true }
}

