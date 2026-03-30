# Premium Portfolio Website - Setup Guide

Welcome to your new premium portfolio website! This guide will help you customize and deploy your portfolio.

## Project Structure

```
├── app/
│   ├── page.tsx              # Main home page
│   ├── layout.tsx            # Root layout with theme provider
│   ├── globals.css           # Global styles and design tokens
│   └── providers.tsx         # Theme provider setup
├── components/
│   ├── navbar.tsx            # Navigation with theme toggle
│   ├── hero.tsx              # Hero section with typing effect
│   ├── about.tsx             # About section
│   ├── skills.tsx            # Skills with progress bars
│   ├── projects.tsx          # Projects showcase grid
│   ├── experience.tsx        # Work experience timeline
│   ├── contact.tsx           # Contact form
│   ├── footer.tsx            # Footer
│   └── scroll-progress.tsx   # Scroll progress indicator
├── hooks/
│   └── use-typing.ts         # Custom typing animation hook
```

## Key Features

- **Dark/Light Theme Toggle**: Smooth theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Typing Animation**: Animated text effect in the hero section
- **Scroll Animations**: Intersection observer for scroll-triggered animations
- **Glassmorphism Design**: Modern glass effect with blur and transparency
- **Sticky Navigation**: Navbar with active section highlighting
- **Contact Form**: Fully functional contact form with validation
- **Smooth Scrolling**: Navigation links with smooth scroll behavior

## Customization Guide

### 1. Update Personal Information

**In `components/hero.tsx`:**
- Change the name and title
- Update social media links (GitHub, LinkedIn, Email)
- Modify the hero description

**In `components/about.tsx`:**
- Update the about me section
- Change the stats (years of experience, projects, etc.)

**In `components/contact.tsx`:**
- Update email and contact information
- Add your actual WhatsApp number
- Update social media links

### 2. Update Projects

Edit `components/projects.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tags: ['Tech1', 'Tech2'],
    image: 'bg-gradient-to-br from-primary/20 to-accent/20',
    github: 'https://github.com/yourprofile/project',
    live: 'https://your-project-url.com',
  },
  // Add more projects...
];
```

### 3. Update Experience

Edit `components/experience.tsx`:
```typescript
const experiences: Experience[] = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Your Company Name',
    period: '2023 - Present',
    description: [
      'Your responsibility 1',
      'Your responsibility 2',
      'Your responsibility 3',
    ],
    highlights: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more experiences...
];
```

### 4. Update Skills

Edit `components/skills.tsx`:
```typescript
const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    color: 'from-primary to-accent',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      // Update with your actual skill levels (0-100)
    ],
  },
  // Add more categories...
];
```

### 5. Customize Colors

Edit `app/globals.css` in the `:root` section:
```css
:root {
  --primary: oklch(0.55 0.24 290);      /* Main brand color */
  --secondary: oklch(0.65 0.2 280);     /* Secondary color */
  --accent: oklch(0.75 0.22 300);       /* Accent color */
  --background: oklch(0.98 0 0);        /* Background color */
  --foreground: oklch(0.15 0 0);        /* Text color */
  /* ... other tokens ... */
}
```

For dark mode, update the `.dark` section accordingly.

### 6. Update Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Your professional description',
  // ... other metadata
};
```

## Form Submission Setup

The contact form currently simulates submission. To make it functional:

### Option 1: Using Vercel Forms
Install the Vercel Forms integration and update `components/contact.tsx`:
```typescript
// Add your form submission logic
```

### Option 2: Using an Email Service
Use services like:
- **SendGrid**: Email delivery API
- **Resend**: Email for developers
- **Nodemailer**: Node.js email solution

Example with Resend:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your API route or server action
const result = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: formData.email,
  subject: 'New message from your portfolio',
  html: `<p>${formData.message}</p>`,
});
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your repository
4. Click "Deploy"
5. Your site will be live!

### Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Performance Tips

1. **Image Optimization**: Replace placeholder project images with actual ones
2. **Code Splitting**: Components are already optimized for code splitting
3. **SEO**: Update metadata and add structured data
4. **Lighthouse**: Run Lighthouse audit and improve scores
5. **Analytics**: Add Vercel Analytics (already included)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Theme not switching?
- Ensure `next-themes` is installed
- Check that `Providers` wrapper is in `layout.tsx`

### Smooth scrolling not working?
- Verify `scroll-smooth` class is on body element
- Check that navigation links have correct `href` values

### Images not loading?
- Ensure image paths are correct
- Check that images are in the `public` folder
- Update `next.config.mjs` image settings if needed

## Technologies Used

- **Next.js 16**: React framework with SSR/SSG
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **next-themes**: Theme switching
- **react-intersection-observer**: Scroll animations
- **lucide-react**: Beautiful SVG icons
- **react-hook-form**: Form handling

## Support & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [React Docs](https://react.dev)

---

**Happy Building!** 🚀

Remember to:
- Update all placeholder content with your actual information
- Test on mobile and desktop
- Deploy to Vercel for best performance
- Keep your portfolio updated with new projects and experiences
