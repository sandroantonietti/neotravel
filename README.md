# Neotravel LP

Landing page Next.js avec chatbot IA intégré. Les messages transitent par une API Route Next.js qui proxifie vers un webhook n8n protégé par Cloudflare Access.

## Stack

- **Next.js 14** — App Router, Server Actions, API Routes
- **n8n** — moteur de workflow IA, exposé via webhook
- **Cloudflare Access** — protection Zero Trust devant l'instance n8n
- **Vercel** — hébergement et variables d'environnement de production

## Démarrage local

```bash
cp .env.local.example .env.local
# renseigner les variables (voir ci-dessous)
npm install
npm run dev
```

## Variables d'environnement

| Variable | Description |
|---|---|
| `N8N_WEBHOOK_URL` | URL du webhook n8n — utilisée côté serveur uniquement (jamais exposée au navigateur) |
| `CF_ACCESS_CLIENT_ID` | Client ID du Service Token Cloudflare Access (voir ci-dessous) |
| `CF_ACCESS_CLIENT_SECRET` | Client Secret du Service Token Cloudflare Access (voir ci-dessous) |

Copier `.env.local.example` en `.env.local` et renseigner les valeurs. Ne jamais committer `.env.local`.

Sur Vercel, ajouter ces variables dans **Settings > Environment Variables**.

## Cloudflare Access — Service Token

L'instance n8n est protégée par Cloudflare Zero Trust. Sans authentification, les appels webhook retournent un **302** vers la page de login Cloudflare.

Pour autoriser les appels serveur-à-serveur :

1. Aller dans **Cloudflare Zero Trust > Access > Service Auth > Service Tokens**
2. Créer un nouveau Service Token — noter le Client ID et le Client Secret (affichés une seule fois)
3. Dans **Access > Applications**, ouvrir la policy de l'application n8n et ajouter une règle **Service Token** qui autorise ce token
4. Renseigner `CF_ACCESS_CLIENT_ID` et `CF_ACCESS_CLIENT_SECRET` dans les variables d'environnement

Les headers `CF-Access-Client-Id` et `CF-Access-Client-Secret` sont injectés automatiquement par `app/api/chat/route.ts` sur chaque requête vers n8n.

## Architecture du chatbot

```
Navigateur → POST /api/chat (API Route Next.js)
                 ↓ ajoute les headers CF-Access
             Webhook n8n (Cloudflare Access)
                 ↓
             Réponse IA → Navigateur
```

L'URL du webhook n'est jamais exposée au client : seule `/api/chat` est appelée par le frontend.
