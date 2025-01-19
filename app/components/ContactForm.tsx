'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { sendEmail } from '../actions/sendEmail'
import { Button } from "@/app/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"
import { CheckCircle, AlertCircle } from 'lucide-react'


const schema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  subject: z.string().min(5, { message: "Konu en az 5 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesaj en az 10 karakter olmalıdır." }),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [statusMessage, setStatusMessage] = useState('')

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setSubmitStatus(null)
    setStatusMessage('')

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => formData.append(key, value))

    const result = await sendEmail(formData)

    if (result.error) {
      setSubmitStatus('error')
      setStatusMessage(typeof result.error === 'string' ? result.error : "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.")
    } else {
      setSubmitStatus('success')
      setStatusMessage("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.")
      form.reset()
    }

    setIsSubmitting(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>İsim</FormLabel>
                <FormControl>
                  <Input placeholder="Adınız Soyadınız" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>E-posta</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="ornek@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Konu</FormLabel>
                <FormControl>
                  <Input placeholder="Mesajınızın konusu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Mesaj</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Mesajınızı buraya yazın..." 
                    className="min-h-[200px] w-full"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {submitStatus && (
            <Alert variant={submitStatus === 'success' ? 'default' : 'destructive'}>
              {submitStatus === 'success' ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {submitStatus === 'success' ? 'Başarılı' : 'Hata'}
              </AlertTitle>
              <AlertDescription>
                {statusMessage}
              </AlertDescription>
            </Alert>
          )}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
