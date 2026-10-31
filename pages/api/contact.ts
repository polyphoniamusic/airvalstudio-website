
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { z } from "zod";

type Data = {
    message?: string;
    error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    subject: z.string().trim().min(2).max(150),
    message: z.string().trim().min(10).max(5000),
});

const contactHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    // 1. Check request method
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            error: "Method not allowed",
        });
    }

    // 2. Validate form data
    const validation = ContactSchema.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json({
            error: "Please check the information entered.",
        });
    }

    const { name, email, subject, message } = validation.data;

    // 3. Check environment variables
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !CONTACT_EMAIL) {
        console.error("Missing Resend configuration");

        return res.status(500).json({
            error: "Email service is not configured.",
        });
    }

    // 4. Send email
    try {
        const { data, error } = await resend.emails.send({
            from: "Airval Studio <contact@airvalstudio.com>",
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: `[Contact Airval Studio] ${subject}`,
            text: `
Nouveau message depuis le site Airval Studio.

Nom : ${name}
Email : ${email}
Sujet : ${subject}

Message :
${message}
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(500).json({
                error: "Unable to send your message.",
            });
        }

        return res.status(200).json({
            message: "Your message has been successfully sent!",
        });

    } catch (error) {
        console.error("Contact error:", error);

        return res.status(500).json({
            error: "An error occurred while sending your message.",
        });
    }
};

export default contactHandler;
