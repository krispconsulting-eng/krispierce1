---
name: kris-social-positioning
description: Social media positioning and content engine for Kris Pierce Consulting (KrispConsulting). Use this skill whenever Kris wants to plan, draft, repurpose, or sequence social content that introduces and positions her consulting practice across LinkedIn, X/Twitter, Instagram, or Substack. Two modes: (1) a finite LAUNCH/RELAUNCH campaign that introduces KrispConsulting with a deliberate post arc across all four platforms, and (2) an ALWAYS-ON positioning engine that keeps every ongoing post reinforcing who she is, what she does, and who she helps. Trigger on phrases like "introduce my consulting", "launch posts for KrispConsulting", "what should I post to position the practice", "turn this into posts for LinkedIn and X", "repurpose this across my channels", "social plan for the consulting launch", "draft a positioning post", "announce the practice", or any request to build social content that markets the consulting business specifically (as opposed to SCN2A charity content, which uses the SCN2A skills). This skill handles STRATEGY, SEQUENCING, and REPURPOSING; it defers to the kris-pierce-consulting skill for the underlying brand voice, which is non-negotiable. If it is unclear whether content is for the consulting practice or the SCN2A charity, confirm before drafting.
---

# Kris Pierce Consulting: Social Positioning Engine

This skill plans and produces social content that introduces and positions Kris Pierce Consulting across LinkedIn, X/Twitter, Instagram, and Substack. It does the strategic and platform work the master voice skill doesn't: the launch arc, the always-on positioning logic, and repurposing one idea into four platform-native pieces.

## Relationship to other skills (read this first)

This skill is a layer on top, not a replacement.

- Voice and brand rules live in **kris-pierce-consulting**. Load that skill for tone, the five core messages, language markers, and the pre-publishing checklist. Every draft this skill produces must pass that skill's checklist, including the em dash check. Do not restate or override those rules here.
- **SCN2A Australia content is out of scope.** That charity has its own voice and its own platforms, handled by scn2a-instagram-captions, scn2a-vibe-check, and the website skills. Never conflate the consulting practice with the charity. If a request could be either, confirm which before drafting.
- For a final read before posting, the **vibe-check** skill is the honest reviewer. This skill drafts; vibe-check de-risks.

## Decide the mode first

Two modes. Work out which one applies before doing anything else.

**Launch / relaunch campaign:** a finite, sequenced set of introductory posts that announces or reintroduces the practice. Has a beginning, middle, and end. Use when Kris is launching, relaunching, repositioning, or wants a defined run of posts to establish the practice. See `references/launch-campaign.md`.

**Always-on positioning:** ongoing content where every post quietly reinforces the positioning even when the topic is something else (a sector observation, a research insight, a policy take). Use for routine content, single posts, or "what should I post this week". See `references/always-on.md`.

The two share the same voice and the same platform mechanics. They differ in cadence and intent: the launch arc front-loads the "who I am / what I do / who I help" story; the always-on engine threads positioning through whatever Kris is already talking about so she never sounds like a rolling advertisement.

## Who Kris is (the positioning spine)

Every piece of social content should be traceable to this. It is the through-line both modes protect.

**One line:** Kris Pierce helps health organisations, industry partners, and not-for-profits generate insights and reach patient-centred outcomes through flexible, collaborative methodology.

**What makes her credible, in her own register (not a brag list):**

- Two decades of lived experience as a carer in rare disease, brought into professional work rather than kept separate.
- Senior advisory roles in HTA, genomics, and consumer engagement that mean she understands the systems decisions actually move through.
- A track record across rare disease, research, policy, and the NFP sector.

**What she is not:** a cheerleader, a trainer, a motivational speaker, or a "giving consumers a voice" consultant. She does real partnership, and she will say so plainly.

**Who she helps and the angle for each** (full detail in the master voice skill's audience section):

- **Health organisations:** participatory research strengthens outcomes.
- **Industry partners (pharma, medtech):** authentic patient and carer insight reduces risk and builds trust, before, during, and after launch.
- **NFPs:** real partnership with community strengthens mission.

A note on industry partners: pharmaceutical-adjacent content can touch Medicines Australia Code of Conduct territory. Keep introductory and positioning content general; never imply endorsement of a specific product or sponsor in public social copy. If a post drifts toward a named medicine or sponsor, flag it for Kris rather than publishing.

## Content pillars

Both modes draw from the same four pillars. They keep the feed varied while every post still ladders up to the positioning.

- **Insight:** a specific finding or observation from the work, and what it changed. The strongest pillar; lead here when in doubt.
- **Point of view:** a strong, evidence-backed take on consumer engagement, co-design, HTA, or rare disease policy. Opinions she'll defend, not neutral summaries.
- **How it actually works:** practical method content. What real participatory research looks like versus the tokenistic version. Useful enough to save.
- **Who she is / who she helps:** the explicit positioning posts. Used sparingly in always-on mode, front-loaded in launch mode.

Rough always-on mix: insight and point-of-view do most of the work; how-it-works adds utility; explicit positioning is the seasoning, not the meal. The launch campaign deliberately inverts this for its short run.

## Drafting workflow

1. **Confirm scope and mode.** Consulting, not SCN2A. Launch or always-on. Which platform(s).
2. **Load the voice.** Pull in kris-pierce-consulting for tone and rules. This is not optional; the voice is the product.
3. **Find the angle.** If the idea isn't landing or Kris isn't sure what to lead with, route to the message-lab skill to settle the hero message first, then come back to draft. Don't draft on top of an unsettled idea.
4. **Pick the pillar and the platform.** Read the relevant file in `references/` for that platform's format and structure.
5. **Draft one strong version,** not three weak options, unless Kris asks for choices.
6. **Run the checklist.** The master skill's pre-publishing checklist, then offer a vibe-check if it's going live.

## Repurposing one idea across platforms

When Kris has one piece (a blog post, a talk, an insight) and wants it across channels, do not copy-paste and trim. Each platform gets a native version built from the same spine. The order that works: write the Substack or long-form version first (it forces the full argument), then extract.

- **Substack to LinkedIn:** take the single sharpest argument, not a summary. One idea, fully made.
- **LinkedIn to X:** find the one line that does the most work; build a short post or a tight thread around it.
- **Any to Instagram:** lead with the human or visual entry point, then the idea. Caption carries the substance; the image earns the stop.

Full platform specs, structures, and examples are in the reference files. Read the one you need:

- `references/linkedin.md`: the core channel. Thought-leadership posts, profile copy, comment strategy.
- `references/x-twitter.md`: short takes, threads, real-time sector commentary.
- `references/instagram.md`: visual-led captions and carousels, behind-the-scenes of the work.
- `references/substack.md`: long-form editorial that anchors the whole system.
- `references/launch-campaign.md`: the finite introductory arc across all four platforms.
- `references/always-on.md`: the ongoing positioning engine and weekly cadence.

## Guardrails specific to social

The master skill's voice guardrails all apply. These are the social-only additions:

- **No self-promotion without substance.** Every positioning post carries an insight, a view, or a useful method. "I'm available for work" is not a post; an observation that demonstrates why she's worth hiring is.
- **No inspirational or motivational register.** Easy to slip into on social. She is an expert talking to peers, not a coach.
- **Lived experience is context, not currency.** It informs the work and can ground a point. It is never the headline of a sales post and never used for sympathy.
- **Keep sponsor and product references out of public positioning copy.** Medicines Australia Code applies to pharma-adjacent material; when in doubt, generalise and flag.
- **One idea per post.** The ADHD-style scatter Kris explicitly wants to avoid is most tempting on social. Hold one thought and make it well.
- **Check for em dashes.** Every time. The master skill is emphatic about this for a reason.
