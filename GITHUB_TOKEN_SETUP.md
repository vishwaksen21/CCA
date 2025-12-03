# GitHub Token Setup for Auto Image Upload

## Steps to Create GitHub Token:

1. **Go to GitHub Settings**
   - Visit: https://github.com/settings/tokens
   - Or: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token (Classic)**
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: `CCA Image Upload`
   - Expiration: Choose your preference (90 days, 1 year, or no expiration)

3. **Select Permissions** - Check only:
   - ✅ `repo` (Full control of private repositories)
     - This gives access to commit to your repository

4. **Generate & Copy Token**
   - Click "Generate token"
   - **IMPORTANT**: Copy the token immediately (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

5. **Add to Environment Variables**

   ### For Local Development (.env.local):
   ```env
   GITHUB_TOKEN=ghp_your_token_here
   ```

   ### For Production (Vercel):
   - Go to: https://vercel.com/vishwaksen21/cca/settings/environment-variables
   - Add new variable:
     - Name: `GITHUB_TOKEN`
     - Value: Your token
     - Environment: Production, Preview, Development (select all)
   - Click "Save"
   - Redeploy your site

## How It Works:

- ✅ **Upload image** from admin panel
- ✅ **Automatic commit** to GitHub via API
- ✅ **Vercel auto-deploys** your site
- ✅ **Works in production** on Vercel!

## Without Token:

If you don't set up the token:
- Images will save locally during development
- But won't auto-push to GitHub
- You'll need to manually commit and push

## Security:

- ✅ Token is stored in environment variables (not in code)
- ✅ Never commit `.env.local` to Git
- ✅ Token only has access to your repositories
