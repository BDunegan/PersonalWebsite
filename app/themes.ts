/**
 * themes.ts
 * -----------
 * Contains multiple theme objects for your site: e.g. a default (purple) theme
 * and an alt (dark) theme. You can define as many as you like.
 */

export const defaultTheme = {
    colors: {
      primary: '#F0EAD6',         // Eggshell
      secondaryDark: '#6a0dad',   // Darker purple for content gradient
      secondaryLight: '#a349a4',  // Lighter purple for content gradient
      bkgDark: '#000000',         // For black-to-purple background
      bkgLight: '#4B0082',
      text: '#F0EAD6',            // Eggshell text
      textInverse: '#2c2c2c',     // Dark text
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
    borderRadius: '12px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
  };
  
  export const altTheme = {
    colors: {
      // Example: a darker theme
      primary: '#E6E6E6',         // Light gray for text
      secondaryDark: '#222222',   // Very dark container backgrounds
      secondaryLight: '#333333',  // Slightly lighter
      bkgDark: '#000000',         // Black
      bkgLight: '#1E1E1E',        // Dark grey
      text: '#E6E6E6',            // Light gray
      textInverse: '#121212',     // Dark text
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
    borderRadius: '12px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.7)',
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
  };
  