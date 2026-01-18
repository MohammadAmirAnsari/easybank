# figma file 
https://www.figma.com/design/PCjMfBKdwfLAhNezm88OwK/Easy_Banking?node-id=0-1&p=f

# youtube playlist
https://www.youtube.com/watch?v=8w_kHIAkucA&list=PLUWqFDiirlsuYscECzks6zIZWr_Cfcx9k

# normalize css
https://necolas.github.io/normalize.css/

# smacss book
https://smacss.com/book/categorizing/

# BEM

BEM (Block, Element, Modifier) is a CSS naming convention using
.block__element--modifier to create modular, reusable, and predictable code. It uses lowercase letters, hyphens (-) for multi-word names, double underscores (__) to separate elements from blocks, and double hyphens (--) to indicate modifiers. 
BEM Naming Structure & Usage

    Block: Independent, standalone component (e.g., .card, .nav, .header).
    Element: Part of a block, dependent on it. Separated by double underscores: .block__element (e.g., .card__title, .nav__item).
    Modifier: Variant of a block or element. Separated by double hyphens: .block--modifier or .block__element--modifier (e.g., .card--featured, .button__text--large). 

Example Usage:
html

<!-- Block -->
<div class="card">
  <!-- Element -->
  <img src="..." class="card__image">
  <!-- Element -->
  <h2 class="card__title">Title</h2>
  <!-- Element with Modifier -->
  <button class="card__button card__button--disabled">Submit</button>
</div>

Key Rules:

    No nesting selectors: Avoid .card .card__title. Instead, use only .card__title.
    Semantic Names: Describe what the component is (e.g., menu), not what it looks like (red).
    Double Hyphens/Underscores: These indicate the relationship clearly and allow for multi-word names (e.g., .block__sub-element--modifier).
    Avoid Tags/IDs: Stick to class names for lower specificity