import * as z from 'zod';

export const ContactFormFieldSchema = z.object({
  name: z.string().min(1, {
    message: "名前を入力してください"
  }),
  mailaddress: z.string().email({
    message: "メールアドレスを入力してください"
  }),
  message: z.string( {
    message: ""
  })
})