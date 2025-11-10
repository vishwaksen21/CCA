export default function customImageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
