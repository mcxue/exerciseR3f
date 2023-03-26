const DEFAULT_PAGE_TITLE = 'Exercise R3F';

export const setDocumentTitle = (name?: string) => {
  document.title = `${name ? name + ' - ' : ''}${DEFAULT_PAGE_TITLE}`;
};
