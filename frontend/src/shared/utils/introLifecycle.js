// A timeout always releases the overlay, even when animation frames/fonts stall.
export function startIntro({
  ready,
  onProgress,
  onLeaving,
  onFinish,
  clock = window,
  minimum = 650,
  maximum = 2400,
  fade = 250,
}) {
  let closed = false,
    disposed = false,
    closeTimer;
  const finish = () => {
    if (disposed || closed) return;
    closed = true;
    clock.clearInterval(ticker);
    clock.clearTimeout(deadline);
    onProgress(100);
    onLeaving();
    closeTimer = clock.setTimeout(() => {
      if (!disposed) onFinish();
    }, fade);
  };
  const ticker = clock.setInterval(() => {
    if (!closed && !disposed) onProgress((value) => Math.min(88, value + 8));
  }, 100);
  const deadline = clock.setTimeout(finish, maximum);
  const minimumTimer = clock.setTimeout(
    () => Promise.resolve(ready).then(finish, finish),
    minimum,
  );
  return {
    finish,
    dispose() {
      disposed = true;
      clock.clearInterval(ticker);
      clock.clearTimeout(deadline);
      clock.clearTimeout(minimumTimer);
      clock.clearTimeout(closeTimer);
    },
  };
}
