# 🚀 Step-by-Step Guide: Deploying the New 3HD Media Website to cPanel (3hdmedia.com)

This guide provides exact step-by-step instructions to upload and deploy your newly designed React + Vite application to your cPanel hosting (`3hdmedia.com`), based on your actual `public_html` file manager structure.

---

## 📌 Prerequisites & Build Step

Before logging into cPanel, ensure you have built the latest production files on your computer.

1. Open your terminal in VS Code / IDE.
2. Run the build command:
   ```bash
   npm run build
   ```
3. This creates a production-ready folder named **`dist`** in your project folder (`/Volumes/UNTITLED/3hd media/dist`).

---

## 📂 Step 1: Zip the `dist` Folder Output

1. Open Finder on your Mac and navigate to your project folder:
   `/Volumes/UNTITLED/3hd media/`
2. Open the **`dist`** folder. Inside `dist`, you will see:
   - `index.html`
   - `assets/` (folder containing compiled JavaScript, CSS, and images)
3. Select **all items inside the `dist` folder** (`index.html` and `assets/`).
4. Right-click and choose **Compress 2 items** (or **Compress "dist"**).
5. Rename the created `.zip` file to **`new_build.zip`**.

> [!IMPORTANT]
> Make sure you zip the **contents inside `dist`**, NOT the parent project folder!

---

## 🛡️ Step 2: Backup Existing Old Files in cPanel

1. Log into your **cPanel** and click **File Manager**.
2. Double-click to enter the **`public_html`** folder.
3. Click **+ Folder** at the top menu and create a new folder named `old_website_backup`.
4. Select all old static files (`index.html`, `career.html`, `services.html`, `style.css`, old `.jpg`/`.png` images, etc.) **EXCEPT**:
   - Do NOT delete `.well-known` (SSL certificate folder)
   - Do NOT delete `.htpasswds` or `cgi-bin`
5. Drag and drop or **Move** all old `.html`, `.js`, `.css`, and image files into `old_website_backup/`.

---

## 📤 Step 3: Upload & Extract `new_build.zip`

1. Inside `public_html`, click the **Upload** button in the top menu bar.
2. Drag and drop your **`new_build.zip`** file into the upload window.
3. Wait for the green progress bar to reach **100%**.
4. Close the upload tab and return to **File Manager** in `public_html`.
5. Click **Reload** in cPanel.
6. Click on **`new_build.zip`**, then click **Extract** in the top menu bar.
7. Confirm extraction location as `/public_html`.
8. Once extracted, you will see `index.html` and `assets/` directly inside `public_html`.
9. You can now safely **Delete** `new_build.zip` from cPanel to save space.

---

## ⚙️ Step 4: Configure `.htaccess` for React Router (CRITICAL)

Because your new website is a Single Page Application (SPA) using React Router (`/about`, `/management`, `/services`, `/careers`, `/contact`), Apache needs to redirect page refreshes to `index.html`. Without this step, refreshing a page like `3hdmedia.com/management` will throw a **404 Not Found** error.

1. In cPanel File Manager, ensure **Show Hidden Files (dotfiles)** is enabled (Click ⚙️ **Settings** in top-right corner -> check **Show Hidden Files** -> Save).
2. Check if a `.htaccess` file exists in `public_html`.
   - If it exists, right-click `.htaccess` -> **Edit**.
   - If it doesn't exist, click **+ File** -> name it `.htaccess`.
3. Paste the following configuration code into `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

4. Click **Save Changes**.

---

## 🧹 Step 5: Test & Clear Cache

1. Open your browser in an **Incognito / Private window**.
2. Visit [https://3hdmedia.com](https://3hdmedia.com).
3. Test all page links:
   - `https://3hdmedia.com/`
   - `https://3hdmedia.com/about`
   - `https://3hdmedia.com/management` *(Interactive Hierarchy Tree & CLO Spotlight)*
   - `https://3hdmedia.com/services`
   - `https://3hdmedia.com/work`
   - `https://3hdmedia.com/careers`
   - `https://3hdmedia.com/learning`
   - `https://3hdmedia.com/contact`
4. Refresh the page on `https://3hdmedia.com/management` to verify that `.htaccess` routing works smoothly without 404 errors!

---

## ✅ Deployment Summary Checklist

- [x] Run `npm run build` locally
- [x] Zip `dist/` contents (`index.html` & `assets/`)
- [x] Move old files in `public_html` to `old_website_backup/`
- [x] Upload & extract `new_build.zip` into `public_html`
- [x] Add React Router SPA rewrite rules to `.htaccess`
- [x] Test site in browser
