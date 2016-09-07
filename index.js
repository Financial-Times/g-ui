import onwardJourney from './onward-journey';
import comments from './comments';
import analytics from './analytics';
import ads from './ads';

let initialized = false;

export function init() {
  if (initialized) return;
  initialized = true;

  if (!window.flags) return;

  if (flags.analytics) analytics();
  if (flags.ads) ads().catch(console.log);
  if (flags.onwardJourney) onwardJourney();
  if (flags.comments) comments().catch(console.log);
}
