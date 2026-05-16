import { addBulletList, addFooter, addPanel, addTitle, colors } from "./_theme.mjs";

export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { left: 0, top: 0, width: ctx.W, height: ctx.H, fill: colors.bg, line: ctx.line(colors.bg, 0) });

  addTitle(
    ctx,
    slide,
    "ChatGPT",
    "ChatGPT is the broader AI product stack",
    "The current pricing page positions Codex as part of a larger productivity suite rather than the sole reason to subscribe.",
  );

  addPanel(ctx, slide, { left: 76, top: 230, width: 340, height: 336 }, colors.panel);
  addPanel(ctx, slide, { left: 440, top: 230, width: 340, height: 336 }, colors.panel);
  addPanel(ctx, slide, { left: 804, top: 230, width: 400, height: 336 }, colors.openaiSoft);

  ctx.addText(slide, { text: "Plus | ~₹1,915/mo", left: 106, top: 260, width: 220, height: 28, fontSize: 24, color: colors.white, bold: true });
  addBulletList(ctx, slide, [
    "GPT-5.5 Thinking access",
    "Expanded deep research and agent mode",
    "Projects, tasks, custom GPTs",
    "Expanded Codex usage",
    "Early access to new features",
  ], { left: 106, top: 312, width: 276 }, colors.white);

  ctx.addText(slide, { text: "Pro | ~₹19,140/mo", left: 470, top: 260, width: 230, height: 28, fontSize: 24, color: colors.white, bold: true });
  addBulletList(ctx, slide, [
    "GPT-5.5 Pro reasoning",
    "Maximum Codex tasks",
    "10x or 20x more Codex usage",
    "Unlimited GPT-5.3 and uploads",
    "Maximum deep research and agent mode",
  ], { left: 470, top: 312, width: 276 }, colors.white);

  ctx.addText(slide, { text: "Business / Enterprise", left: 834, top: 260, width: 300, height: 28, fontSize: 24, color: colors.white, bold: true });
  addBulletList(ctx, slide, [
    "Business ~₹2,390/user/mo annual and adds apps/connectors, shared workspace, SSO, MFA",
    "Business combines ChatGPT Plus and Business Codex capabilities",
    "Enterprise adds SCIM, EKM, RBAC, analytics, data residency, priority support",
    "Best for buyers who need AI adoption across functions, not only engineering",
  ], { left: 834, top: 312, width: 320 }, colors.white, 28);

  ctx.addText(slide, {
    text: "Best fit: operators, founders, analysts, product managers, and mixed teams who want one paid plan to cover search, writing, analysis, files, connectors, and some coding.",
    left: 76,
    top: 612,
    width: 1120,
    height: 42,
    fontSize: 16,
    color: colors.warn,
    bold: true,
  });

  addFooter(ctx, slide, "Official OpenAI pricing page reviewed on 2026-05-14. INR values are approximate conversions, not local billing quotes.");
  return slide;
}

export default addSlide;
