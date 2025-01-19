'use server'

import { z } from 'zod'
import sgMail from '@sendgrid/mail'

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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  const msg = {
    to: 'gokhansarac@apax.com.tr', // Change this to your recipient
    from: 'gokhansarac@apax.com.tr', // Change this to your verified sender
    subject: `Yeni form basvurusu: ${subject}`,
    text: `Isim: ${name}\nEmail: ${email}\nMesaj: ${message}`,
    html: `<strong>Isim:</strong> ${name}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>Mesaj:</strong> ${message}`,
  }
  
  console.log('msg', msg)

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    console.error(error)
    if (error instanceof Error && 'response' in error) {
      console.error((error as any).response.body)
    }
    return { error: 'An error occurred while sending the email. Please try again.' }
  }
}