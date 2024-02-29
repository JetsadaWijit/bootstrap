// Create a link element for the favicon
const faviconContent = document.createElement('link');
  
// Set the attributes for the favicon link element
faviconContent.rel = 'icon';
faviconContent.type = 'image/x-icon';
faviconContent.href = 'https://gravatar.com/avatar/90464149744175cc576a4c9f464c1f03e99d7de4813f31705ac71f84aa11df26';

// Add the favicon link element to the document's head
document.head.appendChild(faviconContent);
