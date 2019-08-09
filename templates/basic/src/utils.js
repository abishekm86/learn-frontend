export function createClock(f, tick = 1000, immediatePoll = true) {
  immediatePoll && f();
  window.setTimeout(() => {
    f();
    createClock(f, tick, false);
  }, tick);
}

export function sleep(ms = 1000) {
  return new Promise(res => setTimeout(res, ms));
}

export async function tryFetchJSON(req, success, fail) {
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      success(await res.json());
    } else {
      fail(res && res.error());
    }
  } catch (error) {
    fail(error);
  }
}
