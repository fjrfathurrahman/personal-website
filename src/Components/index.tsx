// An index.tsx file at the root of the components folder to export all components from a single point, making imports cleaner.

// template and layouts
export { default as Section } from './templates/Section';
export { default as RootLayouts } from './layouts/RootLayouts';

// constants
export { default as personalDetails } from './constants/personalDetails';
export { default as Icons } from './constants/icons';
export { default as projectsInfo } from './constants/projectsInfo'

// components & elements
export { default as TittleEl } from './custom/tittleEl';

// utility
export { default as useIsMobile } from '../Hooks/useMediaQuery';

// pages
export { default as Hero } from '../Pages/hero';