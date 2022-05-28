import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.MAIL_ADDRESS;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim())
      return res.status(403).send('');

    const message = {
      from: email,
      to: email,
      subject: `Nova Mensagem - ${name}`,
      html: `<p><strong>E-mail:</strong> ${senderMail}<br/><strong>Mensagem:</strong> ${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message);

    return res.send('');
  } catch (error) {
    return res.json({
      error: true,
      message: error.message
    });
  }
};
