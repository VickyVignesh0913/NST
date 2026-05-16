import { addBulletList, addFooter, addPanel, addTitle, colors } from "./_theme.mjs";

export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { left: 0, top: 0, width: ctx.W, height: ctx.H, fill: colors.bg, line: ctx.line(colors.bg, 0) });

  addTitle(
    ctx,
    slide,
    "Subscription Comparison",
    "ChatGPT vs Claude Code in Indian Rupees",
    "Current official pricing and feature comparison for individual users, power users, teams, and enterprise buyers. INR values are approximate conversions.",
  );

  addPanel(ctx, slide, { left: 76, top: 232, width: 520, height: 330 }, colors.openaiSoft);
  addPanel(ctx, slide, { left: 612, top: 232, width: 592, height: 330 }, colors.claudeSoft);

  ctx.addText(slide, {
    text: "ChatGPT plans",
    left: 108,
    top: 264,
    width: 220,
    height: 32,
    fontSize: 22,
    color: colors.white,
    bold: true,
  });
  ctx.addText(slide, {
    text: "Plus ~₹1,915/mo | Pro ~₹19,140/mo | Business ~₹2,390/user/mo annual | Enterprise custom",
    left: 108,
    top: 304,
    width: 430,
    height: 64,
    fontSize: 18,
    color: colors.white,
    bold: true,
  });
  addBulletList(ctx, slide, [
    "Best when you want the broadest general-purpose AI product.",
    "Strongest bundle for chat, deep research, agents, custom GPTs, and apps/connectors.",
    "Codex usage is included, but the product is not terminal-first.",
  ], { left: 108, top: 390, width: 430 }, colors.white, 28);

  ctx.addText(slide, {
    text: "Claude + Claude Code plans",
    left: 644,
    top: 264,
    width: 300,
    height: 32,
    fontSize: 22,
    color: colors.white,
    bold: true,
  });
  ctx.addText(slide, {
    text: "Pro ~₹1,915/mo | Max 5x ~₹9,570/mo | Max 20x ~₹19,140/mo | Team ~₹2,390-₹2,870/seat | Enterprise custom",
    left: 644,
    top: 304,
    width: 520,
    height: 64,
    fontSize: 18,
    color: colors.white,
    bold: true,
  });
  addBulletList(ctx, slide, [
    "Claude Code is included with Pro, Max, Team, and eligible Enterprise seats.",
    "Shared usage means Claude chat and Claude Code draw from the same plan capacity.",
    "Best fit when your primary workflow is terminal-based coding.",
  ], { left: 644, top: 390, width: 500 }, colors.white, 28);

  ctx.addText(slide, {
    text: "Headline: ChatGPT wins breadth. Claude wins terminal-native developer positioning.",
    left: 76,
    top: 596,
    width: 1100,
    height: 34,
    fontSize: 18,
    color: colors.warn,
    bold: true,
  });

  addFooter(ctx, slide, "Approx conversions at 1 USD = ₹95.68 on 2026-05-14. Sources: OpenAI pricing page; Anthropic and Claude Help Center.");
  return slide;
}

export default addSlide;
