/* CSS Intellisense fix for Tailwind directives */
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}