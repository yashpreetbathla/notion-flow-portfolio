# 📱 Modern Portfolio Template

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- 🎨 Clean and modern design
- 📱 Fully responsive layout
- 🔍 SEO-friendly structure
- 📊 Optional view counter (using Firebase)
- 🎨 Customizable color scheme
- 📸 Easy image customization
- 📝 Easy content customization

## 🛠️ Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Components**: shadcn-ui
- **Database**: Firebase (optional)

## 📦 Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🔧 Customization

### 🖼️ Images

1. **Profile Image**:
   - Place your profile image in the `src/assets` directory
   - Update the `profileImageUrl` in `src/data/portfolioData.ts`
   - The image should be a square (1:1 ratio) for best results

2. **Project Images**:
   - Add your project images to `src/assets/projects`
   - Update the image paths in your project data in `src/data/projects.ts`
   - Images should be optimized for web (recommended size: 800x600px)

### 📝 Content

1. **Personal Information**:
   - Edit `src/data/portfolioData.ts` to update:
     - Your name
     - Profile image URL
     - Social media links
     - Contact information

2. **Work Experience**:
   - Edit `src/data/experience.ts` to add or modify:
     - Company names
     - Job titles
     - Dates
     - Achievements
     - Technologies used

3. **Projects**:
   - Edit `src/data/projects.ts` to add or modify:
     - Project names
     - Descriptions
     - Technologies used
     - GitHub links
     - Live demo links
     - Featured images

4. **Skills**:
   - Edit `src/data/skills.ts` to add or modify:
     - Programming languages
     - Frameworks
     - Tools
     - Proficiency levels

5. **Education**:
   - Edit `src/data/education.ts` to add or modify:
     - School names
     - Degrees
     - Dates
     - Achievements

### 🎨 Styling

1. **Colors**:
   - Update the color scheme in `src/tailwind.config.js`
   - Modify the theme colors in `src/theme.ts`

2. **Layout**:
   - Adjust spacing and sizing in `src/styles/globals.css`
   - Modify animations in `src/styles/animation.css`

## 🔐 View Counter Setup (Optional)

To enable the view counter feature:

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Realtime Database
3. Add these security rules to your Realtime Database:
```json
{
  "rules": {
    "portfolio": {
      "views": {
        ".read": true,
        ".write": "newData.val() === (data.exists() ? data.val() : 0) + 1",
        ".validate": "newData.val() > 0 && newData.val() <= 1000000"
      }
    }
  }
}
```

4. Create a `.env` file with your Firebase credentials:
```env
VITE_FIREBASE_API_KEY="your-api-key"
VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
VITE_FIREBASE_DATABASE_URL="your-database-url"
VITE_FIREBASE_PROJECT_ID="your-project-id"
VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VITE_FIREBASE_APP_ID="your-app-id"
VITE_FIREBASE_ENABLE_VIEW_COUNTER="true"  # Set to "false" to disable the view counter
```

5. If deploying to GitHub Pages:
   - Go to GitHub repository settings -> Secrets and variables -> Actions
   - Add these secrets with the same values as your `.env` file:
   - VITE_FIREBASE_API_KEY
   - VITE_FIREBASE_AUTH_DOMAIN
   - VITE_FIREBASE_DATABASE_URL
   - VITE_FIREBASE_PROJECT_ID
   - VITE_FIREBASE_STORAGE_BUCKET
   - VITE_FIREBASE_MESSAGING_SENDER_ID
   - VITE_FIREBASE_APP_ID
   - VITE_FIREBASE_ENABLE_VIEW_COUNTER (set to "true" or "false")

## 🚀 Deployment

This project uses **two branches**:
- `main` — source code (edit here)
- `gh-pages` — deployed built files (never edit manually)

### How deployment works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on every push to `gh-pages`. It builds the project using Firebase secrets stored in GitHub, then overwrites `gh-pages` with the compiled `dist/` output via `peaceiris/actions-gh-pages`.

### Option A — Manual deploy (recommended, always works)

Use this when the CI is broken or you want to deploy immediately:

```bash
# 1. Make your changes on main, then build locally
npm run build

# 2. Deploy dist/ directly to gh-pages
npx gh-pages -d dist --message "Deploy built portfolio"
```

Done. GitHub Pages will update within ~1–2 minutes.

### Option B — CI/CD deploy (via GitHub Actions)

> **Warning:** This requires Firebase secrets to be configured in GitHub repo settings → Secrets and variables → Actions.

The workflow does NOT trigger on `main`. To trigger it, you must push source code to `gh-pages`:

```bash
# Push main branch code to gh-pages (force required due to unrelated histories)
git push origin main:gh-pages --force
```

The CI will then build and redeploy automatically. Track progress at:
`https://github.com/yashpreetbathla/notion-flow-portfolio/actions`

### What broke before and why

Pushing `main` to `gh-pages` with `--force` replaces the built files with raw source code. If the CI then fails (e.g. secrets missing, workflow error), GitHub Pages ends up serving unbuilt source — the page loads but React never runs, showing only the HTML title.

**Fix:** Always fall back to Option A (manual build + `npx gh-pages -d dist`) if the CI doesn't deploy successfully.

## 📝 License

MIT License - feel free to use this template for your portfolio!

> "Code is read more often than it is written — so make it beautiful." ✨

## How can I edit this code?

There are several ways of editing your application.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## 🖼️ Customizing Images

1. **Profile Image**:
   - Place your profile image in the `src/assets` directory
   - Update the `profileImageUrl` in `src/data/portfolioData.ts`
   - The image should be a square (1:1 ratio) for best results

2. **Project Images**:
   - Add your project images to `src/assets/projects`
   - Update the image paths in your project data in `src/data/projects.ts`
   - Images should be optimized for web (recommended size: 800x600px)

## 📝 Customizing Portfolio Data

1. **Personal Information**:
   - Edit `src/data/portfolioData.ts` to update:
     - Your name
     - Profile image URL
     - Social media links
     - Contact information

2. **Work Experience**:
   - Edit `src/data/experience.ts` to add or modify:
     - Company names
     - Job titles
     - Dates
     - Achievements
     - Technologies used

3. **Projects**:
   - Edit `src/data/projects.ts` to add or modify:
     - Project names
     - Descriptions
     - Technologies used
     - GitHub links
     - Live demo links
     - Featured images

4. **Skills**:
   - Edit `src/data/skills.ts` to add or modify:
     - Programming languages
     - Frameworks
     - Tools
     - Proficiency levels

5. **Education**:
   - Edit `src/data/education.ts` to add or modify:
     - School names
     - Degrees
     - Dates
     - Achievements

## 🎨 Styling Customization

1. **Colors**:
   - Update the color scheme in `src/tailwind.config.js`
   - Modify the theme colors in `src/theme.ts`

2. **Layout**:
   - Adjust spacing and sizing in `src/styles/globals.css`
   - Modify animations in `src/styles/animation.css`

## 🤝 Let's Connect

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Optional: Set up view counter (skip if not needed)
# 1. Create a Firebase project at https://console.firebase.google.com/
# 2. Enable Realtime Database
# 3. Add these security rules to your Realtime Database:
{
  "rules": {
    "portfolio": {
      "views": {
        ".read": true,
        ".write": "newData.val() === (data.exists() ? data.val() : 0) + 1",
        ".validate": "newData.val() > 0 && newData.val() <= 1000000"
      }
    }
  }
}

# 4. Create a .env file with your Firebase credentials:
VITE_FIREBASE_API_KEY="your-api-key"
VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
VITE_FIREBASE_DATABASE_URL="your-database-url"
VITE_FIREBASE_PROJECT_ID="your-project-id"
VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VITE_FIREBASE_APP_ID="your-app-id"

# 5. In your Hero component, set showViews={true} to enable the view counter
# 6. If you're deploying to GitHub Pages:
#    - Go to GitHub repository settings -> Secrets and variables -> Actions
#    - Add these secrets with the same values as your .env file:
#      VITE_FIREBASE_API_KEY
#      VITE_FIREBASE_AUTH_DOMAIN
#      VITE_FIREBASE_DATABASE_URL
#      VITE_FIREBASE_PROJECT_ID
#      VITE_FIREBASE_STORAGE_BUCKET
#      VITE_FIREBASE_MESSAGING_SENDER_ID
#      VITE_FIREBASE_APP_ID
#      VITE_FIREBASE_ENABLE_VIEW_COUNTER (set to "true" or "false")
```

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
