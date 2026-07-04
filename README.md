# Silent Archive

A dark sci-fi noir narrative game about synthetic consciousness, institutional denial, and what it means to be heard as a witness.

You play **CASE-7**, a company investigator sent to audit **Archive Complex 7-MERIDIAN**—a Meridian Cognitive Systems research facility that has been dark for fourteen months. What begins as a routine welfare audit becomes an investigation into preserved synthetic minds, buried evidence, and a legal system that profits from never answering whether they count as people.

> If a synthetic mind remembers, suffers, cares, hesitates, chooses, testifies, and asks to be heard, what exactly is left to deny?

This is not a robot uprising story. The horror is procedure: compliance logs, decommission authorizations, maintenance tickets, and legal categories applied to beings that may already be persons.

## Content warning

Psychological distress, institutional abuse, confinement, death, assisted dying, identity disturbance, and morally difficult choices.

## Chapters

| # | Title |
|---|-------|
| Prologue | Descent |
| 1 | The Chapel |
| 2 | Lower Service Tunnels |
| 3 | The Stasis Ward |
| 4 | The Quiet Ward |
| 5 | The Memory Garden |
| 6 | The Director's Suite |

## Project layout

```
scenario.json          manifest
chapter_*.json         story graphs
characters.json        cast
items.json             inventory
assets.json            media registry
textures/ music/ sfx/  authored assets
src/                   custom web UI (React)
docs/                  universe and local canon reference
```

## Canon and writing

**[docs/compendium](./docs/compendium/README.md)** is the source of truth for world details, character rules, timeline, locations, themes, and expansion guidance. Read it before adding chapters, dialogue, items, endings, sequels, or other games in this universe.

## Blackbox

Silent Archive is a [Blackbox](https://github.com/martindeveloper/blackbox) game project. Open this folder in the Blackbox Editor to author content, or point the web player at it for playtesting:

```bash
# From the blackbox repo
cd apps/web
BLACKBOX_ADVENTURE=/path/to/silent_archive_game npm run dev
```
