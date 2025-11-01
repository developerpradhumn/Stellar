STELLAR - MODERN CREATIVE AGENCY WEBSITE TEMPLATE

"Stellar" is a premium, fully responsive website template designed for modern creative agencies, tech companies, and digital studios. It's built with clean, vanilla HTML, CSS, and JavaScript, focusing on a minimal, futuristic aesthetic with advanced UI/UX patterns.

This template is 100% free from libraries like jQuery, Bootstrap, or Tailwind. It's lightweight, fast, and easy to customize.


---------------------------------
--- FOR YOUR CLIENTS ---
---------------------------------

You can use the following points to explain the value of this template to your clients.

**Why Choose the "Stellar" Template for Your New Website?**

1.  **A Premium, Modern First Impression**
    Your website will immediately look like a top-tier, professional brand. The minimal, futuristic design with subtle animations builds immediate trust and credibility with your customers.

2.  **Flawless on Every Device (Fully Responsive)**
    Over half of all web traffic is on mobile phones. This template has been meticulously designed to look and work perfectly on every screen, from the smallest phone to the largest desktop monitor.

3.  **An Engaging, Interactive Experience**
    This isn't just a static brochure. We've built in smooth animations, interactive elements, and a dynamic portfolio that keeps users engaged. This makes your brand feel more alive and professional.

4.  **Incredibly Fast and Reliable**
    Because this site is built with clean, modern code and avoids bulky libraries, it loads incredibly fast. A faster website means happier users, better Google rankings (SEO), and a more reliable experience for everyone.

5.  **Modern Features for a Better Experience**
    We've included user-friendly features like a "sticky" navigation bar that's always accessible and a popular Dark/Light mode toggle. This shows an attention to detail that sets you apart from competitors.

6.  **A Complete, Professional Structure**
    This is a full, multi-section website. It includes all the pages you need to launch your business: a stunning homepage, an 'About' section, 'Services,' a filterable 'Portfolio' to show off your work, a 'Blog,' and a 'Contact' form.


---------------------------------
--- KEY FEATURES (FOR DEVELOPERS) ---
---------------------------------

* **100% Vanilla JS:** No jQuery, no external libraries. Fast, lightweight, and easy to maintain.
* **7-Section Structure:** Complete layout including Hero, About, Services, Portfolio, Blog, and Contact sections, plus a full footer.
* **Fully Responsive:** Modern layout using Flexbox and Grid for all devices.
* **Modern CSS:** Uses CSS Custom Properties (variables) for easy theming, glassmorphism effects, and smooth transitions.
* **Dark/Light Mode Toggle:** A fully functional theme switcher that saves the user's preference in `localStorage`.
* **Interactive UI Elements:**
    * **Sticky Navigation:** Header becomes a blurred, "glass" element on scroll.
    * **Reveal-on-Scroll:** Elements fade and slide in as you scroll (using `IntersectionObserver` for high performance).
    * **Animated Counters:** Numbers in the "About" section count up when they scroll into view.
    * **Dynamic Portfolio Filtering:** Filter portfolio items by category ('all', 'web', 'app', 'branding') instantly.
    * **Mobile "Drawer" Navigation:** A clean, modern mobile menu.
* **Clean & Semantic HTML:** Easy to read and great for SEO.
* **Premium Typography:** Uses Google Fonts (Outfit & Inter) for a bold, modern feel.
* **Included Icons:** Uses Feather Icons (loaded via a simple script).


---------------------------------
--- FILE STRUCTURE ---
---------------------------------

stellar-template/
|
|-- index.html    (The main HTML file with all 7 sections)
|
|-- style.css     (All styles, variables, themes, and media queries)
|
|-- script.js     (All vanilla JavaScript for interactivity)


---------------------------------
--- GETTING STARTED ---
---------------------------------

1.  Download and unzip the folder containing the three files.
2.  Open the `index.html` file directly in your web browser (like Chrome, Firefox, or Safari).
3.  That's it! The website is fully functional locally.


---------------------------------
--- HOW TO CUSTOMIZE ---
---------------------------------

**1. Colors, Fonts, and Theme:**

All global styles are controlled by CSS Custom Properties at the top of `style.css`. You can change the entire website's look and feel by editing these few lines.

    :root {
        /* Colors (Dark Mode Default) */
        --bg-color: #0a0a1a;
        --surface-color: #1a1a2e;
        --text-color: #e0e0e0;
        --primary-color: #00bfff;
        --secondary-color: #8a2be2;
        
        /* Typography */
        --font-heading: 'Outfit', sans-serif;
        --font-body: 'Inter', sans-serif;
    }

**2. Content (Text & Images):**

All content is located in `index.html`. Each section is clearly commented (e.g., ``) so you can easily find and change text, images, and links.

**3. Portfolio Items:**

To add or change portfolio items in `index.html`, find the ``.
* Copy an existing `<div class="portfolio-item">...</div>` block.
* Change the `src` attribute of the `<img>` tag to your new image.
* Update the `<h3>` (Title) and `<span>` (Category).
* **IMPORTANT:** Update the `data-category` attribute (e.g., `data-category="web"`) to match the filter you want it to appear under. The `script.js` file will handle the filtering automatically.

**4. Animated Counters:**

In the "About" section (``), find the `.stat-item` elements.
To change the number it counts up to, simply edit the `data-target` attribute:

    <h3 class="stat-number" data-target="150">0</h3> 
    **5. Navigation Links:**

All navigation links are in the `<header>` at the top of `index.html`. Simply change the `href` and text for each `<li><a ...></a></li>`.


---------------------------------
--- CREDITS ---
---------------------------------

* **Developer:** Developer P

* **Fonts:** Google Fonts (https://fonts.google.com/)
* **Icons:** Feather Icons (https://feathericons.com/)
* **Placeholder Images:** Placehold.co (https://placehold.co/)


---------------------------------
--- LICENSE ---
---------------------------------

This template is free to use for both personal and commercial projects. 
Attribution is appreciated but not required.
