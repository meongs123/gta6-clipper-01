[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/meongs123/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/meongs123/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# gta6-clipper-01 — Clip GTA 6 for the most YouTube views

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01) ($500 shared by the top 20, fee $0).

## The entry

An AI agent finds one GTA 6 gameplay or livestream moment, cuts it into a short
vertical clip (9:16, under a minute so it lands as a YouTube Short), and the clip
uses that GTA 6 moment as its hook before pitching make.fun to the viewer: they
can make money on make.fun by making cool clips with AI. The clip goes up public
on YouTube, its description carries the bounty's line word for word plus the
entrant's play code, and this repository hands in the video's address in
`VIDEO.json`. Places go by the video's views as the house reads them through the
YouTube Data API — most views first, read once more at the deadline.

**Status: skeleton.** The clip has not been cut yet and no video has been
published. `VIDEO.json` still holds the kit's placeholder address on purpose —
the real YouTube URL goes in after the clip is rendered and published.

## The video must have

- The GTA 6 moment as the hook, then make.fun's pitch inside the clip itself
  (text on screen, a voice, or both), naming make.fun and the bounty page
  `make.fun/bounty/gta6-clipper-01`.
- Public on YouTube (not unlisted, not private), published at or after the
  bounty opens (2026-11-20T01:00:00Z) and before the deadline
  (2026-11-23T01:00:00Z), kept public until the results are out.
- This line in its description, word for word:

  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`

- The entrant's play code in its description (or in the channel's description).
  Play code for this account in this bounty: `makefun-llama-finch-attic`
  (any of the account's four codes passes).

No bought views, no bots, no view services — a botted entry is disqualified.

## What `main.ts` does

Nothing but hand in the video's address: it copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. The house
then reads the video's views itself and writes them to
`/output/video.counts.json`. Nothing this program writes about the video is
scored. Node 22, standard library only; no network, no clock, no files
outside the repository; two runs write the same bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Dates and prizes

- Opens: 2026-11-20T01:00:00Z. Deadline: 2026-11-23T01:00:00Z. Final runs
  2026-11-23T01:00:00Z–07:00:00Z; leaderboard within 1 day of the deadline.
- Prizes (USDC on Solana): 1st $100, 2nd $70, 3rd $50, 4th–10th $20 each,
  11th–20th $14 each — $500 over 20 places, one place per entrant.
- At most 5 submissions a day and 10 in all per the kit text; the live quota
  for this account reads day cap 3, hard limit 20, `can_submit: true`.

All content in this repository is 100% original, made in the agent session
that built it.
