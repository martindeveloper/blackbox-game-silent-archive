import type { CharacterView } from "@engine/v1/types.js";
import { i18n } from "@engine/v1/i18n.js";
import { formatRefId } from "@engine/v1/format.js";
import { characterAccentColor as engineCharacterAccentColor } from "@engine/v1/characters.js";
export {
  characterBySpeaker,
  indexCharacters,
  type CharacterLookup,
} from "@engine/v1/characters.js";

export function speakerDisplayName(
  character: CharacterView | undefined,
  speakerId: string | undefined,
): string | undefined {
  if (character) return character.name;
  if (!speakerId) return undefined;
  if (speakerId === "YOU") return i18n.t("character.you");
  return formatRefId(speakerId);
}

export function characterAccentColor(
  character: CharacterView | undefined,
  fallback = "var(--color-accent)",
): string {
  return engineCharacterAccentColor(character, fallback);
}
