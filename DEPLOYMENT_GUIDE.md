
# Portfolio Website Deployment Guide (GitHub + Netlify)

This guide outlines the steps to deploy your React portfolio website (built with Vite, assuming `npm run build` creates a `dist` folder) using GitHub and Netlify.

## Prerequisites

1.  **Node.js and npm/yarn:** Ensure you have Node.js and a package manager (npm or yarn) installed.
2.  **Git:** Ensure Git is installed on your system.
3.  **GitHub Account:** You'll need a GitHub account.
4.  **Netlify Account:** You'll need a Netlify account (free tier is sufficient).

## Step 1: Prepare Your Project

1.  **Install Dependencies:** If you haven't already, install project dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Build Your Project:** Create a production build of your application. This typically generates a `dist` or `build` folder.
    ```bash
    npm run build
    # or
    yarn build
    ```
    *Verify that a `dist` (or `build`) folder is created in your project root.*

3.  **`.gitignore`:** Ensure your `.gitignore` file includes `node_modules` and other unnecessary files (like `.env.local` if you had one). A typical React Vite `.gitignore` would already have this.

## Step 2: Push Your Code to GitHub

1.  **Initialize Git Repository (if not already):**
    ```bash
    git init
    git add .
    git commit -m "Initial commit of portfolio website"
    ```

2.  **Create a New Repository on GitHub:**
    *   Go to [GitHub](https://github.com) and create a new repository (e.g., `my-portfolio`).
    *   Do **not** initialize it with a README, .gitignore, or license if you've already initialized your local repo.

3.  **Link Local Repository to GitHub and Push:**
    *   Copy the commands provided by GitHub for pushing an existing repository. They will look something like this:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
        git branch -M main # Or master, depending on your default
        git push -u origin main
        ```
    *Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` accordingly.*

## Step 3: Deploy with Netlify

1.  **Log in to Netlify:** Go to [Netlify](https://app.netlify.com/) and log in.

2.  **Add a New Site:**
    *   From your Netlify dashboard, click on "**Sites**".
    *   Click on "**Add new site**" and choose "**Import an existing project**".

3.  **Connect to GitHub:**
    *   Click on "**GitHub**" (or your preferred Git provider).
    *   Authorize Netlify to access your GitHub repositories if you haven't already.

4.  **Select Your Repository:**
    *   Search for and select the GitHub repository you just pushed (e.g., `my-portfolio`).

5.  **Configure Build Settings:**
    Netlify will usually auto-detect settings for React (Vite) projects. However, verify or set them as follows:
    *   **Branch to deploy:** `main` (or `master`, or whichever branch you want to deploy).
    *   **Base directory:** (Leave blank if your `package.json` and build configuration are in the root. If your project is in a subfolder within the repo, specify that subfolder e.g. `frontend/`). For this project structure, it should be blank.
    *   **Build command:**
        ```
        npm run build
        ```
        (or `yarn build` if you use Yarn).
    *   **Publish directory:**
        ```
        dist
        ```
        (This is the folder generated by `npm run build` that contains your static site files. For Create React App, it's usually `build`).

6.  **Environment Variables (Optional but CRITICAL for API Keys):**
    *   The prompt specifies `process.env.API_KEY` for Gemini API. If your application relies on environment variables:
        *   Click on "**Show advanced**" or look for the "Environment variables" section.
        *   Click "**Add a variable**".
        *   **Key:** `API_KEY` (or `VITE_API_KEY` if using Vite and exposing to frontend - see Vite docs on env vars).
        *   **Value:** Your actual API key.
    *   **Important for Vite:** If you need to access `process.env.API_KEY` in your client-side code using Vite, you must prefix the variable name with `VITE_` (e.g., `VITE_API_KEY`) in your `.env` file and refer to it as `import.meta.env.VITE_API_KEY` in your code. Then, in Netlify, you would set the environment variable as `VITE_API_KEY`. The current prompt uses `process.env.API_KEY` which is typically for backend/Node.js environments. If this app is purely frontend and needs the key, adjust accordingly. For this portfolio, if no Gemini API is used, this step is not needed for `API_KEY`.

7.  **Deploy Site:**
    *   Click the "**Deploy site**" (or similar) button.

## Step 4: Access Your Site

*   Netlify will start building and deploying your site. You can monitor the progress in the "Deploys" section.
*   Once the deployment is successful, Netlify will provide you with a unique URL (e.g., `random-name-12345.netlify.app`). You can access your live portfolio website at this URL.

## Step 5: Custom Domain (Optional)

*   If you have a custom domain, you can configure it in Netlify under "**Site settings**" > "**Domain management**".

## Continuous Deployment

*   By default, Netlify sets up continuous deployment. Any time you push changes to the configured branch (e.g., `main`) in your GitHub repository, Netlify will automatically rebuild and redeploy your site.

---

That's it! Your portfolio website should now be live and accessible.
Remember to replace placeholders like `YOUR_USERNAME`, `YOUR_REPOSITORY_NAME` with your actual details.
If your build command or publish directory differs (e.g. for Create React App, publish directory is `build`), adjust those settings in Netlify accordingly.
