import type { GameView, UiNotification } from "@engine/sdk/v1/types.js";
import { collectStateNotifications as collectEngineNotifications } from "@engine/sdk/v1/notifications.js";

const STAT_NOTIFICATION_ORDER = ["empathy", "logic", "violence", "conviction"] as const;

export function collectStateNotifications(
  previous: GameView,
  current: GameView,
  nextId: () => number,
): UiNotification[] {
  return collectEngineNotifications(previous, current, nextId, {
    statOrder: STAT_NOTIFICATION_ORDER,
  });
}
