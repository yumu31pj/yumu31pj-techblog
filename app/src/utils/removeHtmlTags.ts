import sanitizeHtml from 'sanitize-html';

const removeHtmlTags = (html: string): string => {
  return sanitizeHtml(html, { allowedTags: [] });
}

export default removeHtmlTags;