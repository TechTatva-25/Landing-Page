# Design System Documentation
## Royal Modern Gothic Theme with Golden Accents

This document provides a comprehensive guide to the design system used in the Landing Page project. It covers typography, color schemes, animations, component styling, and implementation guidelines to ensure consistency across all pages and components.

---

## 🎨 **Color Palette**

### **Primary Color Scheme**
The project uses a sophisticated royal golden theme with dark accents, creating an elegant and professional appearance.

#### **Golden Accents (Primary Brand Colors)**
```css
--gold-primary: 45 100% 55%;      /* #FFD700 - Bright Gold */
--gold-secondary: 43 85% 60%;     /* #F4D03F - Muted Gold */
--gold-accent: 38 100% 45%;      /* #DAA520 - Darker Gold */
```

**Hex Values:**
- **Primary Gold**: `#FFD700` (Bright Gold)
- **Secondary Gold**: `#F4D03F` (Muted Gold)  
- **Accent Gold**: `#DAA520` (Dark Gold)

#### **Dark Theme Colors**
```css
--dark-primary: 0 0% 0%;         /* #000000 - Pure Black */
--dark-secondary: 0 0% 8%;       /* #141414 - Dark Gray */
--dark-accent: 0 0% 12%;        /* #1F1F1F - Medium Dark Gray */
```

#### **Text Colors**
```css
--text-primary: 0 0% 96%;        /* #F5F5F5 - Off White */
--text-secondary: 0 0% 80%;      /* #CCCCCC - Light Gray */
```

#### **Background Gradients**
The project uses sophisticated gradient backgrounds for depth and visual interest:

**Main Background:**
```css
background: linear-gradient(135deg, 
    #E8E6D8 0%,    /* Light Cream */
    #D8D4C8 25%,   /* Medium Cream */
    #C8C4B8 50%,   /* Warm Beige */
    #B8B4A8 75%,   /* Darker Beige */
    #A8A498 100%   /* Deep Beige */
);
```

**Card Backgrounds:**
```css
.dark-bg {
    background: linear-gradient(135deg, #c8c4b8 0%, #c0bca8 100%);
}

.dark-secondary-bg {
    background: linear-gradient(135deg, #c0bca8 0%, #b8b498 100%);
}

.dark-accent-bg {
    background: linear-gradient(135deg, #b8b498 0%, #b0ac88 100%);
}
```

---

## 🔤 **Typography System**

### **Font Families**

#### **Primary Heading Font: Cinzel Decorative**
- **Usage**: All main headings, section titles, and prominent text
- **Weight**: 400 (Regular)
- **Style**: Decorative serif with royal elegance
- **Implementation**:
```tsx
const cinzelDecorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-cinzel-decorative",
    display: "swap",
})
```

#### **Body Text Font: Cormorant Garamond**
- **Usage**: Body text, paragraphs, descriptions, and secondary content
- **Weights**: 300, 400, 500, 600, 700
- **Style**: Classic serif with excellent readability
- **Implementation**:
```tsx
const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant-garamond",
    display: "swap",
})
```

#### **Additional Fonts Available**
- **Playfair Display**: Alternative heading font
- **Montserrat**: Modern sans-serif for UI elements
- **Inter**: Clean sans-serif for technical content
- **Lora**: Serif alternative for body text
- **Source Sans 3**: Modern sans-serif for captions

### **Typography Classes**

#### **Heading Classes**
```css
.heading-font {
    font-family: var(--font-cinzel-decorative), serif;
    font-weight: 400;
}

.section-heading {
    font-size: 3rem;
    font-weight: 400;
}
```

#### **Body Text Classes**
```css
.body-font {
    font-family: var(--font-cormorant-garamond), serif;
}
```

#### **Font Size Scale**
- **Section Headings**: `3rem` (48px)
- **Card Titles**: `2xl` (24px)
- **Body Text**: `base` (16px)
- **Small Text**: `sm` (14px)

---

## ✨ **Animation System**

### **Core Animation Principles**
- **Duration**: Most animations use 0.3s - 0.6s for smooth, professional feel
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for natural movement
- **Performance**: Hardware acceleration with `transform: translateZ(0)`

### **Key Animation Types**

#### **1. Hover Animations**
```css
/* Standard hover transition */
transition: all 0.3s ease;

/* Hover effects include: */
- transform: translateY(-2px) to translateY(-6px)
- scale: 1.02 to 1.05
- opacity changes
- color transitions
- box-shadow enhancements
```

#### **2. Logo Animation (Signature Feature)**
```css
/* Initial pop animation */
@keyframes breathingGlow {
    0%, 100% {
        opacity: 0.7;
        transform: scale(1);
    }
    50% {
        opacity: 0.9;
        transform: scale(1.02);
    }
}

.hero-breathing-glow {
    animation: breathingGlow 8s ease-in-out infinite;
}
```

**Logo Animation Sequence:**
1. **Initial Pop**: Scale from 0.8 to 1.05, then settle to 0.98
2. **3D Floating**: Subtle rotation and movement for 12 seconds
3. **Breathing Effect**: Continuous gentle scaling and opacity changes

#### **3. Scroll-Triggered Animations**
```tsx
// Framer Motion implementation
<motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
    }}
    viewport={{ once: true, amount: 0.3 }}
/>
```

#### **4. Button Animations**
```css
/* Glassmorphic button effects */
.glassmorphic-button {
    transition: all 0.3s ease-out;
}

.glassmorphic-button:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(218, 165, 32, 0.3);
}

.glassmorphic-button:active {
    transform: scale(0.97);
    transition: transform 0.1s ease;
}
```

### **Animation Performance Optimizations**
```css
/* Hardware acceleration */
will-change: transform;
transform: translateZ(0);
-webkit-transform: translateZ(0);

/* Smooth scrolling */
scroll-behavior: smooth;
-webkit-overflow-scrolling: touch;

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🎭 **Component Styling**

### **Card Components**

#### **Standard Cards**
```css
.gothic-card {
    background: linear-gradient(135deg, 
        hsl(var(--dark-secondary)) 0%, 
        hsl(var(--dark-primary)) 100%);
    border: 1px solid hsl(var(--gold-primary) / 0.4);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

#### **Premium Contact Cards**
```css
.premium-contact-card {
    background: linear-gradient(135deg, 
        rgba(218, 165, 32, 0.08) 0%, 
        transparent 50%, 
        rgba(218, 165, 32, 0.05) 100%),
        linear-gradient(to-br, #c8c4b8, #c0bca8, #b8b498);
    border: 1px solid rgba(218, 165, 32, 0.4);
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2),
                0 0 20px rgba(218, 165, 32, 0.15);
}
```

#### **Pass Cards**
```css
.elegant-pass-card {
    background: linear-gradient(to-br, #c8c4b8, #c0bca8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(218, 165, 32, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

### **Button Components**

#### **Primary Buttons**
```css
.royal-submit-button {
    background: linear-gradient(135deg,
        #b8b498 0%,
        #b0ac88 50%,
        #b8b498 100%);
    color: #000000;
    border: 1px solid rgba(218, 165, 32, 0.4);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
```

#### **Glassmorphic Buttons**
```css
.glassmorphic-button {
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(218, 165, 32, 0.3),
                0 8px 32px rgba(0, 0, 0, 0.6);
}
```

### **Form Components**

#### **Input Fields**
```css
input.royal-input,
textarea.royal-input {
    background: linear-gradient(to-br, 
        rgba(0, 0, 0, 0.98), 
        rgba(5, 5, 5, 0.95));
    border: 1px solid rgba(218, 165, 32, 0.2);
    color: #f5f5f5;
    backdrop-filter: blur(5px);
}
```

#### **Contact Form Container**
```css
.elegant-contact-form {
    background: linear-gradient(to-br, 
        rgba(0, 0, 0, 0.9), 
        rgba(15, 15, 15, 0.8));
    border-radius: 1rem;
    border: 1px solid rgba(218, 165, 32, 0.3);
    backdrop-filter: blur(10px);
}
```

---

## 🌟 **Special Effects**

### **Vignette Effects**
```css
/* Global vignette for entire background */
body::before {
    background: radial-gradient(
        ellipse at center,
        transparent 0%,
        transparent 50%,
        rgba(0, 0, 0, 0.08) 70%,
        rgba(0, 0, 0, 0.15) 85%,
        rgba(0, 0, 0, 0.25) 100%
    );
}

/* Content vignette overlay */
.vignette-overlay::before {
    background: radial-gradient(
        ellipse at center,
        transparent 0%,
        transparent 40%,
        rgba(0, 0, 0, 0.06) 60%,
        rgba(0, 0, 0, 0.12) 80%,
        rgba(0, 0, 0, 0.18) 100%
    );
}
```

### **Gradient Text Effects**
```css
.royal-gradient-heading {
    color: transparent;
    background: linear-gradient(135deg, 
        rgba(160, 120, 20, 0.9) 0%, 
        rgba(218, 165, 32, 1) 50%, 
        rgba(160, 120, 20, 0.9) 100%);
    -webkit-background-clip: text;
    background-clip: text;
}
```

### **Glow Effects**
```css
/* Golden glow */
filter: drop-shadow(0 0 10px rgba(218, 165, 32, 0.4));

/* Box shadow glow */
box-shadow: 0 0 20px rgba(218, 165, 32, 0.3),
            0 0 40px rgba(218, 165, 32, 0.15);
```

---

## 📱 **Responsive Design**

### **Breakpoint System**
- **Mobile**: `< 640px`
- **Tablet**: `640px - 768px`
- **Desktop**: `768px - 1024px`
- **Large Desktop**: `> 1024px`

### **Mobile-Specific Styles**
```css
@media (min-width: 640px) {
    .mobile-content-center {
        padding: 0;
    }
}

@media (min-width: 768px) {
    .mobile-footer-left {
        text-align: inherit;
    }
}
```

---

## 🎯 **Implementation Guidelines**

### **1. Font Usage**
- **Always use** `heading-font` class for titles and headings
- **Always use** `body-font` class for body text and descriptions
- **Never mix** different font families without proper hierarchy

### **2. Color Application**
- **Primary actions**: Use `--gold-primary` (#FFD700)
- **Secondary elements**: Use `--gold-secondary` (#F4D03F)
- **Accents**: Use `--gold-accent` (#DAA520)
- **Text on dark**: Use `--text-primary` (#F5F5F5)
- **Backgrounds**: Use the defined gradient classes

### **3. Animation Implementation**
- **Hover effects**: Always include `transition: all 0.3s ease`
- **Scroll animations**: Use Framer Motion with `whileInView`
- **Performance**: Include `will-change: transform` for complex animations

### **4. Component Structure**
```tsx
// Standard component structure
<motion.div
    className="gothic-card heading-font"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
>
    <h3 className="royal-gradient-heading">Title</h3>
    <p className="body-font">Content</p>
</motion.div>
```

---

## 🔧 **CSS Custom Properties (Variables)**

### **Available CSS Variables**
```css
:root {
    /* Golden Theme */
    --gold-primary: 45 100% 55%;
    --gold-secondary: 43 85% 60%;
    --gold-accent: 38 100% 45%;
    
    /* Dark Theme */
    --dark-primary: 0 0% 0%;
    --dark-secondary: 0 0% 8%;
    --dark-accent: 0 0% 12%;
    
    /* Text Colors */
    --text-primary: 0 0% 96%;
    --text-secondary: 0 0% 80%;
    
    /* Border Radius */
    --radius: 0.5rem;
}
```

### **Usage in Components**
```css
.my-component {
    color: hsl(var(--gold-primary));
    background: hsl(var(--dark-secondary));
    border-radius: var(--radius);
}
```

---

## 📚 **Component Library**

### **Available Component Classes**

#### **Typography**
- `.heading-font` - Cinzel Decorative for headings
- `.body-font` - Cormorant Garamond for body text
- `.section-heading` - Large section titles
- `.royal-gradient-heading` - Gradient text with animations

#### **Layout & Cards**
- `.gothic-card` - Standard card component
- `.premium-contact-card` - Enhanced contact card
- `.elegant-pass-card` - Pass/event card
- `.team-card` - Team member card

#### **Buttons**
- `.glassmorphic-button` - Glass effect button
- `.royal-submit-button` - Form submit button
- `.gothic-instagram-button` - Social media button
- `.gothic-home-button` - Navigation button

#### **Forms**
- `.elegant-contact-form` - Contact form container
- `.royal-input` - Input field styling
- `.premium-contact-item` - Contact information item

#### **Effects**
- `.vignette-overlay` - Vignette effect
- `.hero-breathing-glow` - Breathing animation
- `.drop-shadow-gothic-subtle` - Subtle shadow effects

---

## 🚀 **Performance Considerations**

### **Animation Performance**
- Use `transform` and `opacity` for animations
- Include `will-change` for elements with frequent animations
- Implement `prefers-reduced-motion` support

### **Image Optimization**
- Use Next.js `Image` component with proper sizing
- Implement lazy loading for non-critical images
- Use WebP format when possible

### **CSS Optimization**
- Use CSS custom properties for consistent values
- Implement proper vendor prefixes
- Minimize repaints and reflows

---

## 📖 **Examples & Templates**

### **Standard Section Template**
```tsx
import { motion } from "framer-motion"
import styles from "@/styles/globals.css"

const MySection = () => {
    return (
        <section className="py-16">
            <motion.div
                className="container mx-auto px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="royal-gradient-heading section-heading text-center mb-12">
                    Section Title
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Content cards */}
                </div>
            </motion.div>
        </section>
    )
}
```

### **Card Component Template**
```tsx
const MyCard = ({ title, description, image }) => {
    return (
        <motion.div
            className="gothic-card p-6 cursor-pointer"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            
            <h3 className="heading-font text-2xl mb-3 royal-gradient-heading">
                {title}
            </h3>
            
            <p className="body-font text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}
```

---

## 🎨 **Design Principles**

### **1. Royal Elegance**
- Sophisticated color palette with golden accents
- Decorative typography for headings
- Smooth, professional animations

### **2. Modern Gothic**
- Dark, rich backgrounds with subtle gradients
- Professional card designs with depth
- Consistent border radius and shadows

### **3. User Experience**
- Smooth hover interactions
- Progressive disclosure of information
- Accessible color contrasts
- Reduced motion support

### **4. Performance**
- Hardware-accelerated animations
- Optimized image loading
- Efficient CSS transitions

---

## 🔍 **Troubleshooting**

### **Common Issues**

#### **Fonts Not Loading**
- Ensure Google Fonts are properly imported
- Check font variable names in CSS
- Verify font weights are available

#### **Animations Not Smooth**
- Add `will-change: transform` to animated elements
- Use `transform: translateZ(0)` for hardware acceleration
- Check for conflicting CSS properties

#### **Colors Not Matching**
- Verify CSS custom properties are defined
- Check HSL vs RGB color formats
- Ensure proper CSS variable syntax

#### **Performance Issues**
- Reduce animation complexity on mobile
- Implement `prefers-reduced-motion`
- Use `contain: layout style paint` for isolated components

---

## 📝 **Maintenance Notes**

### **Regular Updates**
- Monitor Google Fonts for updates
- Review animation performance metrics
- Update color palette if brand guidelines change
- Test accessibility with new components

### **Version Control**
- Document any design system changes
- Maintain changelog for component updates
- Tag releases with design system versions

---

This documentation should provide comprehensive guidance for maintaining and extending the design system. For questions or clarifications, refer to the existing codebase examples or consult with the design team.


