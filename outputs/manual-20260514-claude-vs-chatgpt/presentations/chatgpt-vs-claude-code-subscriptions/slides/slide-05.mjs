import { addFooter, addPanel, addTitle, colors } from "./_theme.mjs";

const cards = [
  {
    title: "Choose ChatGPT if",
    color: colors.openaiSoft,
    points: [
      "You want the broadest AI bundle.",
      "Search, research, files, voice, images, connectors, and GPTs matter as much as coding.",
      "You are buying for mixed-function teams, not engineering alone.",
    ],
  },
  {
    title: "Choose Claude Code if",
    color: colors.claudeSoft,
    points: [
      "Your main paid use case is coding in the terminal.",
      "You prefer one subscription that covers both chat and code.",
      "You want the cleanest path from solo developer to heavier code-focused usage tiers.",
    ],
  },
  {
    title: "Watch-outs",
    color: colors.panel,
    points: [
      "Enterprise pricing is not list-priced for either vendor.",
      "Usage policies and limits are still part of the value equation.",
      "INR values here are exchange-rate conversions, not India-specific invoices.",
    ],
  },
];

export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { left: 0, top: 0, width: ctx.W, height: ctx.H, fill: colors.bg, line: ctx.line(colors.bg, 0) });

  addTitle(
    ctx,
    slide,
    "Decision",
    "The right subscription depends on whether coding is the center or just one feature",
    "At roughly the same ₹1.9k starting point, ChatGPT optimizes for breadth while Claude Code optimizes for terminal-native developer workflow.",
  );

  const lefts = [76, 444, 812];
  for (let i = 0; i < cards.length; i += 1) {
    addPanel(ctx, slide, { left: lefts[i], top: 246, width: 316, height: 334 }, cards[i].color);
    ctx.addText(slide, {
      text: cards[i].title,
      left: lefts[i] + 28,
      top: 276,
      width: 250,
      height: 32,
      fontSize: 24,
      color: colors.white,
      bold: true,
    });
    let top = 332;
    for (const point of cards[i].points) {
      ctx.addShape(slide, {
        geometry: "ellipse",
        left: lefts[i] + 28,
        top: top + 8,
        width: 6,
        height: 6,
        fill: colors.white,
        line: ctx.line(colors.white, 0),
      });
      ctx.addText(slide, {
        text: point,
        left: lefts[i] + 44,
        top,
        width: 236,
        height: 52,
        fontSize: 17,
        color: colors.text,
      });
      top += 74;
    }
  }

  ctx.addText(slide, {
    text: "Practical recommendation: if you need one subscription for business work plus occasional coding, start with ChatGPT Plus. If you primarily write and ship code from your terminal, Claude Pro or Max is the more directly aligned buy.",
    left: 76,
    top: 620,
    width: 1120,
    height: 42,
    fontSize: 16,
    color: colors.warn,
    bold: true,
  });

  addFooter(ctx, slide, "Comparison built from official public pricing/help pages only. INR values use a May 14, 2026 USD/INR conversion.");
  return slide;
}

export default addSlide;
