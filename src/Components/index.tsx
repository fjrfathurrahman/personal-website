// An index.tsx file at the root of the components folder to export all components from a single point, making imports cleaner.

// template and layouts
export { default as Section } from './templates/Section';
export { default as RootLayouts } from './layouts/RootLayouts';
export { default as Footer } from './layouts/footer';

// constants
export { default as personalDetails } from './constants/personalDetails';
export { default as Icons } from './constants/icons';
export { default as projectsInfo } from './constants/projectsInfo'
export { default as contactForm } from './constants/formContact';

// components & elements
export { default as TittleEl } from './custom/tittleEl';

// utility
export { default as useIsMobile } from '../Lib/hooks/useMediaQuery';

// section export
export { default as Hero } from '../Pages/hero';
export { default as About } from '../Pages/about';
export { default as Projects } from '../Pages/projects';
export { default as Contact } from '../Pages/contact';