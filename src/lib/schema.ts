import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z
    .string()
    .nonempty('Message is required'),
  message: z
    .string()
    .nonempty('Message is required')
    .min(6, 'Message must be at least 6 characters.')
})