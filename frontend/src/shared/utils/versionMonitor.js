// Compare against the JS actually loaded by this tab, never shared localStorage.
export function startVersionMonitor({
  currentVersion,
  versionUrl,
  onUpdate,
  runtime = window,
  page = document,
  fetcher = fetch,
  intervalMs = 15000,
}) {
  let stopped = false;
  let controller = null;

  async function check() {
    if (stopped || controller || page.visibilityState === "hidden") return;
    const request = new AbortController();
    controller = request;
    const timeout = runtime.setTimeout(() => request.abort(), 8000);
    try {
      const separator = versionUrl.includes("?") ? "&" : "?";
      const response = await fetcher(`${versionUrl}${separator}ts=${Date.now()}`, {
        cache: "no-store",
        signal: request.signal,
      });
      if (!response.ok) return;
      const data = await response.json();
      if (!stopped && !request.signal.aborted &&
          typeof data?.version === "string" && data.version.trim() &&
          data.version !== currentVersion) {
        onUpdate(data.version);
      }
    } catch {
      // Offline, timeout, or an invalid response: retry on the next check.
    } finally {
      runtime.clearTimeout(timeout);
      if (controller === request) controller = null;
    }
  }

  const timer = runtime.setInterval(check, intervalMs);
  runtime.addEventListener("focus", check);
  runtime.addEventListener("online", check);
  page.addEventListener("visibilitychange", check);
  check();

  return () => {
    stopped = true;
    controller?.abort();
    runtime.clearInterval(timer);
    runtime.removeEventListener("focus", check);
    runtime.removeEventListener("online", check);
    page.removeEventListener("visibilitychange", check);
  };
}
