# Education Section - Logo Files Needed

## Overview
The Education section has been successfully added to your portfolio, but it requires university logo images to be complete.

## Required Logo Files

Place the following image files in the `images/` directory:

### 1. ENSAH Logo
- **File name:** `ensah-logo.png`
- **Recommended size:** 200x200px or larger (square format)
- **Description:** Logo of École Nationale des Sciences Appliquées d'Al Hoceima
- **Purpose:** Displayed in the first education card

### 2. Lyon 1 University Logo
- **File name:** `lyon1-logo.png`
- **Recommended size:** 200x200px or larger (square format)
- **Description:** Logo of Claude Bernard University Lyon 1
- **Purpose:** Displayed in the second education card

### 3. Education Section Icon (Optional)
- **File name:** `education-icon.png`
- **Recommended size:** 64x64px or larger
- **Description:** General education/graduation icon
- **Purpose:** Displayed in the education section header (currently commented out in HTML)

## Image Specifications

- **Format:** PNG with transparent background (preferred) or JPG
- **Dimensions:** Square format recommended (1:1 ratio)
- **Quality:** High resolution for retina displays
- **File size:** Keep under 200KB for optimal performance

## Where to Get Logos

1. **Official Sources:** Download from official university websites
2. **Create Custom:** Design simple badge-style logos if official logos aren't available
3. **Placeholder:** Use graduation cap icons temporarily until you get official logos

## Current Implementation

The HTML structure is ready at lines 350-389 in `index.html`:
- Logo containers are styled with hover effects
- Each card has a dedicated `.education-logo` section
- CSS animations are configured for smooth logo display

## Testing After Adding Logos

1. Add the logo files to the `images/` folder
2. Open `index.html` in your browser
3. Navigate to the Education section
4. Verify logos display correctly and animations work smoothly
5. Test hover effects on the education cards

## CSS Styling Applied

- Logo size: 100px x 100px
- Hover effect: Scale to 1.1x with 5° rotation
- Transition: Smooth 0.4s cubic-bezier animation
- Object-fit: Cover to maintain aspect ratio
