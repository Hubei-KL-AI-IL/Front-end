export const slideUpOut = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const slideInText = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1 },
};

export const driftImg = {
  initial: { translateY: '5%' },
  animate: { translateY: ['5%', '-2%', '5%'] },
  transition: { duration: 1, repeat: Infinity, ease: 'linear' },
};
