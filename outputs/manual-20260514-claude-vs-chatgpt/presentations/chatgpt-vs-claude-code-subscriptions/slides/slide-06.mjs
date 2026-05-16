import { addFooter, addPanel, addTitle, colors } from "./_theme.mjs";

const sourceRows = [
  "OpenAI ChatGPT pricing: https://openai.com/chatgpt/pricing/",
  "Claude Code with Pro/Max: https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan",
  "Claude Pro cost: https://support.anthropic.com/en/articles/8325610-how-much-does-claude-pro-cost",
  "Claude Max cost: https://support.anthropic.com/en/articles/11049744-how-much-does-the-max-plan-cost",
  "Claude Team pricing: https://support.anthropic.com/en/articles/9267305-what-is-the-pricing-for-the-team-plan",
  "Claude Code with Team/Enterprise: https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan",
  "USD/INR reference used: 1 USD = ₹95.6849 on 2026-05-14",
];

export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { left: 0, top: 0, width: ctx.W, height: ctx.H, fill: colors.bg, line: ctx.line(colors.bg, 0) });

  addTitle(
    ctx,
    slide,
    "Sources",
    "Official source list and conversion caveats",
    "Use this slide if you need to defend the numbers or explain why enterprise pricing and local billing are not directly comparable.",
  );

  addPanel(ctx, slide, { left: 76, top: 220, width: 1128, height: 370 }, colors.panel);

  let top = 250;
  for (const row of sourceRows) {
    ctx.addText(slide, {
      text: row,
      left: 104,
      top,
      width: 1060,
      height: 32,
      fontSize: 15,
      color: colors.text,
      face: ctx.fonts.mono,
    });
    top += 44;
  }

  ctx.addText(slide, {
    text: "Caveats",
    left: 76,
    top: 620,
    width: 200,
    height: 24,
    fontSize: 14,
    color: colors.muted,
    bold: true,
    face: ctx.fonts.mono,
  });
  ctx.addText(slide, {
    text: "Enterprise pricing is custom for both vendors. INR figures are approximate conversions from US list prices using the May 14, 2026 USD/INR reference rate, so actual Indian billing can differ because of taxes, regional pricing, mobile store billing, or contract terms.",
    left: 76,
    top: 646,
    width: 1120,
    height: 44,
    fontSize: 14,
    color: colors.muted,
  });

  addFooter(ctx, slide, "Prepared 2026-05-14. Re-check pricing and FX before external circulation if timing changes.");
  return slide;
}

export default addSlide;
