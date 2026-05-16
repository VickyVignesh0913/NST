import { addBulletList, addFooter, addPanel, addTitle, colors } from "./_theme.mjs";

export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { left: 0, top: 0, width: ctx.W, height: ctx.H, fill: colors.bg, line: ctx.line(colors.bg, 0) });

  addTitle(
    ctx,
    slide,
    "Claude Code",
    "Claude Code is sold as part of the Claude subscription, not as a separate product tier",
    "That makes the buying question simpler for developers: choose the usage band, then use the same plan in chat and in the terminal.",
  );

  addPanel(ctx, slide, { left: 76, top: 226, width: 350, height: 352 }, colors.claudeSoft);
  addPanel(ctx, slide, { left: 450, top: 226, width: 350, height: 352 }, colors.claudeSoft);
  addPanel(ctx, slide, { left: 824, top: 226, width: 380, height: 352 }, colors.panel);

  ctx.addText(slide, { text: "Pro | ~₹1,915/mo", left: 106, top: 256, width: 220, height: 28, fontSize: 24, color: colors.white, bold: true });
  addBulletList(ctx, slide, [
    "Claude on web, desktop, mobile, and Claude Code in one subscription",
    "Shared usage pool across chat and code",
    "Good entry point for solo developers and technical founders",
    "Extra usage and pay-as-you-go are available if limits are hit",
  ], { left: 106, top: 312, width: 286 }, colors.white, 28);

  ctx.addText(slide, { text: "Max | ~₹9,570 or ₹19,140/mo", left: 480, top: 256, width: 280, height: 28, fontSize: 24, color: colors.white, bold: true });
  addBulletList(ctx, slide, [
    "Max 5x gives 5x Pro usage",
    "Max 20x gives 20x Pro usage",
    "Higher output limits and priority access",
    "Best match for heavy code generation and large-repo work",
  ], { left: 480, top: 312, width: 286 }, colors.white, 28);

  ctx.addText(slide, { text: "Team / Enterprise", left: 854, top: 256, width: 250, height: 28, fontSize: 24, color: colors.white, bold: true });
  addBulletList(ctx, slide, [
    "Team: ~₹2,390/member/mo annual or ~₹2,870 monthly",
    "Claude Code is included with every Team seat",
    "Premium seats offer more usage",
    "Enterprise: Claude Code included in new/self-serve Enterprise seat; usage billed separately at API rates",
  ], { left: 854, top: 312, width: 310 }, colors.white, 28);

  ctx.addText(slide, {
    text: "Best fit: developers who live in the terminal and want the chat product and coding agent under one usage budget.",
    left: 76,
    top: 618,
    width: 1120,
    height: 40,
    fontSize: 16,
    color: colors.warn,
    bold: true,
  });

  addFooter(ctx, slide, "Official Anthropic and Claude Help Center sources reviewed on 2026-05-14. INR values are approximate conversions.");
  return slide;
}

export default addSlide;
