//////////////
// favicon //
////////////

// Create a link element for the favicon
const faviconContent = document.createElement('link');
  
// Set the attributes for the favicon link element
faviconContent.rel = 'icon';
faviconContent.type = 'image/x-icon';
faviconContent.href = 'https://i.imgur.com/N1YbnPZ.jpg';

// Add the favicon link element to the document's head
document.head.appendChild(faviconContent);