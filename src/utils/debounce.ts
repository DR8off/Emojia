export default function debounce<F extends (...args: any[]) => any>(
  func: F,
  delay: number,
  vueDebounceStart: F,
  vueDebounceEnd: F
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    vueDebounceStart();
    timeoutId = setTimeout(() => {
      func();
      vueDebounceEnd();
    }, delay);
  };
}
