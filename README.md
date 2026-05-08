# keven-web

Meu Portfolio profissional.

## Stack
- HTML5
- JavaScript (jQuery)
- SCSS (Sass)
- Bootstrap 5.3.8 (CDN)
- EmailJS Browser (CDN)
- Vite

## Executar localmente

**Pré-requisitos:** Node.js instalado.

1. Clone o repositório e acesse a pasta:
   ```bash
   git clone <url-do-repo>
   cd keven-web
   ```

2. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   Edite o `.env` com suas chaves do [EmailJS](https://www.emailjs.com/).

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra no navegador a URL exibida pelo Vite (geralmente `http://localhost:5173`).

### Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `VITE_EMAILJS_PUBLIC_KEY` | Public Key da sua conta EmailJS |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço criado no EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template de e-mail no EmailJS |

> **Nunca commite o arquivo `.env`** — ele já está no `.gitignore`.

## Build de produção

Gera os arquivos otimizados em `dist/`:
```bash
npm run build
```

Para validar o build localmente:
```bash
npm run preview
```

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Acesse [vercel.com](https://vercel.com) → **Add New Project** → importe o repositório.
3. A Vercel detecta o Vite automaticamente. As configurações já estão no `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Em **Environment Variables**, adicione as três variáveis do EmailJS:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
5. Clique em **Deploy**.

## Skill Icons

Os ícones de habilidades usam o projeto `tandpfun/skill-icons` via endpoint público:

```html
<img src="https://skillicons.dev/icons?i=react" alt="React" />
```

Exemplo com múltiplos ícones e opções:

```txt
https://skillicons.dev/icons?i=react,ts,nodejs,figma&theme=dark&perline=4
```
