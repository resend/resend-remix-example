import { json } from '@remix-run/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const loader = async () => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      html: '<strong>It works!</strong>',
    });

    return json(data, 200);
  }
  catch (error) {
    return json({ error }, 400);
  }
};
