# Configuration de l'envoi d'emails - Formulaire de contact

Le formulaire de contact envoie maintenant les emails à **responsable-lva@phoenixaccueil.org** via Resend.

## Configuration requise

### 1. Créer un compte Resend (gratuit)

1. Allez sur [https://resend.com/signup](https://resend.com/signup)
2. Créez un compte gratuit (3000 emails/mois inclus)
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à [https://resend.com/api-keys](https://resend.com/api-keys)
2. Cliquez sur "Create API Key"
3. Donnez un nom (ex: "Phoenix Accueil Contact Form")
4. Copiez la clé générée (elle commence par `re_`)

### 3. Configurer votre projet

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez `re_your_api_key_here` par votre vraie clé API :
   ```
   RESEND_API_KEY=re_VotreCléAPIIci
   ```
3. Sauvegardez le fichier

### 4. Redémarrer le serveur de développement

```bash
npm run dev
```

## Configuration avancée (optionnel)

### Utiliser votre propre domaine

Par défaut, les emails sont envoyés depuis `onboarding@resend.dev`. Pour utiliser votre propre domaine (ex: `contact@phoenixaccueil.org`) :

1. Allez dans [Resend > Domains](https://resend.com/domains)
2. Ajoutez votre domaine `phoenixaccueil.org`
3. Configurez les enregistrements DNS (SPF, DKIM, DMARC) comme indiqué
4. Une fois vérifié, modifiez `app/api/contact/route.ts` ligne 20 :
   ```typescript
   from: 'Phoenix Accueil <contact@phoenixaccueil.org>',
   ```

## Test du formulaire

1. Allez sur votre site en local : http://localhost:3000
2. Scrollez jusqu'à la section "Contactez-nous"
3. Remplissez le formulaire et envoyez
4. Vérifiez que l'email arrive à **responsable-lva@phoenixaccueil.org**

## Dépannage

### Erreur "Erreur lors de l'envoi de l'email"
- Vérifiez que votre clé API est correcte dans `.env.local`
- Vérifiez que vous avez bien redémarré le serveur après avoir modifié `.env.local`

### L'email n'arrive pas
- Vérifiez les spams de lva@phoenixaccueil.org
- Consultez les logs Resend : [https://resend.com/emails](https://resend.com/emails)

## Sécurité

⚠️ **Important** : Ne commitez JAMAIS votre fichier `.env.local` sur Git. Il est déjà dans `.gitignore`.

## Support

- Documentation Resend : [https://resend.com/docs](https://resend.com/docs)
- Support Resend : [https://resend.com/support](https://resend.com/support)
