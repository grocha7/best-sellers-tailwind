# Best Sellers Product Banner

This project aims to demonstrate skills with TailwindCSS, HTML, VanillaJS, and mobile-first design principles. The project showcases a product banner that includes the following features:

- A design with at least 10 Product Cards.
- On mobile, only the first 4 products are shown initially, with a “Show More” button that triggers a smooth dropdown revealing the other 6 products.
- Hovering over the image swaps it with a secondary image.
- Fully responsive design for both desktop and mobile.
- Custom scrollbar that increases the thumb height to 6px when hovering/touching it, requiring the default browser scrollbar to be hidden.

### Instructions

Read the below instructions carefully to understand the implementation details:

1. **Product Card Design:**
   - Each product card includes a primary image, a secondary image for hover effect, product title, reviews, and price.

2. **Mobile View:**
   - Initially, only the first 4 products are shown.
   - The “Show More” button triggers a smooth dropdown revealing the other 6 products.
   - Use plain JS (VanillaJS) for this functionality.

3. **Hover Effect:**
   - Hovering over the image swaps it with a secondary image.

4. **Responsive Design:**
   - The design needs is fully responsive, working seamlessly on both desktop and mobile devices.

5. **Custom Scrollbar:**
   - The scrollbar thumb increases to 6px height when hovering/touching it.
   - This requires hiding the default browser scrollbar.

6. **Accessibility and SEO:**
   - Use semantic HTML elements (```<header>```, ```<main>```, ```<section>```, ```<nav>```, ```<article>```) for better structure and readability.
   - Has ARIA attributes (aria-labelledby, aria-describedby, aria-live, aria-atomic, aria-expanded, aria-controls) to enhance accessibility.
   - Include descriptive alt text for images and proper labels for interactive elements

### Tech Stack

- **HTML**
- **JavaScript**
- **TailwindCSS**

### Objective

The main objective of this tech challenge is to demonstrate the ability to create designs using `TailwindCSS` and well-structured semantic `HTML`. The design needs to be fully responsive, with plain JavaScript (VanillaJS) used for any functionality.

### Note on Fonts

The `font-['Poppins']` class did not work as expected in TailwindCSS. Therefore, custom CSS was used to apply the font:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.font-poppins {
    font-family: 'Poppins', sans-serif;
}
```

### Viewing the Project

To view the project, follow these steps:

1. Download or clone the repository.
2. Open the index.html file in your browser.

This project does not require any build process or additional setup.

---

Feel free to explore the code and see how these features have been implemented. If you have any questions or suggestions, please open an issue or submit a pull request.
