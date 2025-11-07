import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Phoenix Accueil <onboarding@resend.dev>', // Adresse par défaut Resend (à remplacer par votre domaine)
      to: ['lva@phoenixaccueil.org'],
      replyTo: email,
      subject: `[Contact Site] ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
