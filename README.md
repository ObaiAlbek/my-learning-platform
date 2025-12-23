# 🚀 DevBase - Interaktive Lernplattform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

DevBase ist eine moderne **Full-Stack Learning Platform**, die Nutzern hilft, Webentwicklung (HTML & CSS) interaktiv zu lernen. Das Projekt umfasst Benutzerauthentifizierung, Quiz-Logik, einen Live-Code-Editor und automatische Zertifikatsgenerierung.

<p align="center">
  <a href="https://obai-devbase.netlify.app/">
    <img src="https://img.shields.io/badge/🔗_Live_Demo_ansehen-000000?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://www.figma.com/design/Cp4lp0YvfTY2wQvRRPf3Ic/Learning-Plattform?node-id=0-1&t=nBMSkMVPG07v6haY-1">
    <img src="https://img.shields.io/badge/🎨_Design_in_Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Design" />
  </a>
</p>

---

## ✨ Features

### 🔐 Authentifizierung & User Management
* **Sign Up / Login:** Vollständiger Auth-Flow mit **Supabase**.
* **E-Mail Verifizierung:** Echte Verifizierungscodes via **EmailJS**.
* **Passwort vergessen:** Funktion zum Zurücksetzen des Passworts.
* **Geschützte Routen:** Zugriff auf Profil und Zertifikate nur für eingeloggte User.

### 📚 Lerninhalte
* Umfassende Kurse für **HTML** und **CSS**.
* Strukturierte Lektionen (Listen, Tabellen, Flexbox, Grid, etc.).
* **Try-It Editor:** Ein eingebauter Code-Editor, um HTML/CSS live im Browser zu testen.

### 🏆 Gamification & Abschluss
* **Interaktive Quizze:** Teste dein Wissen nach jedem Modul.
* **Zertifizierung:** Generierung eines personalisierten Zertifikats (Gold-Design) bei bestandener Prüfung.
* **Print-Ready:** Das Zertifikat ist für den Druck optimiert (CSS `@media print`).

---

## 🛠 Tech Stack

Dieses Projekt wurde mit modernen Web-Technologien entwickelt:

* **Frontend:** React (Vite), JavaScript (ES6+)
* **Routing:** React Router DOM (v7) – *Single Page Application (SPA)*
* **Backend / Datenbank:** Supabase (PostgreSQL, Auth)
* **Styling:** CSS3 (Custom Responsive Design, CSS Variables)
* **Services:** EmailJS (für Transaktions-E-Mails)
* **Design:** Figma (UI/UX Prototyping)

---

## 💻 Installation (Lokal)

Möchtest du das Projekt auf deinem Computer ausführen?

1.  **Repository klonen**
    ```bash
    git clone [https://github.com/ObaiAlbek/devbase-learning-platform.git](https://github.com/ObaiAlbek/devbase-learning-platform.git)
    cd devbase-learning-platform
    ```

2.  **Abhängigkeiten installieren**
    ```bash
    npm install
    ```

3.  **Environment Variablen**
    Erstelle eine `.env` Datei im Hauptverzeichnis für die API-Keys (Supabase & EmailJS).

4.  **Starten**
    ```bash
    npm run dev
    ```

---

## 🎨 Design Prozess

Das gesamte UI/UX Design wurde vor der Entwicklung in **Figma** erstellt.
Dies umfasst:
* High-Fidelity Mockups
* Responsive Design Planung (Mobile & Desktop)
* Style Guide (Farben, Typografie)

👉 **[Hier klicken, um das Design in Figma anzusehen](https://www.figma.com/design/Cp4lp0YvfTY2wQvRRPf3Ic/Learning-Plattform?node-id=0-1&t=nBMSkMVPG07v6haY-1)**

---

## 👨‍💻 Über den Entwickler

Entwickelt von **Obai Albek**.
Dieses Projekt ist Teil meiner Reise zum Full-Stack Entwickler.

* [GitHub Profil](https://github.com/ObaiAlbek)
* [Portfolio / About Me](https://obaialbek.42web.io/?i=1)

---

Lizenziert unter MIT.
