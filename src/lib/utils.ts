export const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
export const isEscapeKey = (event: KeyboardEvent) => event.key === 'Escape';