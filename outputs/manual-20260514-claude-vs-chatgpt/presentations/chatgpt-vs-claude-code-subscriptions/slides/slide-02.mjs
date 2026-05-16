import { addFooter, addPanel, addTitle, colors } from "./_theme.mjs";

const rows = [
  ["Entry paid plan", "Plus", "~₹1,915/mo", "General AI, research, images, voice, Codex access", "Pro", "~₹1,915/mo", "Claude + Claude Code in one subscription"],
  ["Power user", "Pro", "~₹19,140/mo", "Highest chat access, GPT-5.5 Pro, max Codex tasks", "Max 5x / 20x", "~₹9,570 / ₹19,140", "5x or 20x Pro usage with Claude Code"],
  ["Team", "Business", "~₹2,390/user/mo annual", "Shared workspace, 60+ apps, admin, SSO, MFA", "Team", "~₹2,390 annual / ₹2,870 monthly", "Claude Code in every seat; premium seats for more usage"],
  ["Enterprise", "Enterprise", "Custom", "SCIM, EKM, analytics, data residency, support", "Enterprise", "Custom + usage", "Claude Code included in new enterprise seat; usage billed separately"],
];

export async function addSlide(presentation, ctx) {
  const slide = presentation.slides.add();
  ctx.addShape(slide, { left: 0, top: 0, width: ctx.W, height: ctx.H, fill: colors.bg, line: ctx.line(colors.bg, 0) });

  addTitle(
    ctx,
    slide,
    "Price Ladder",
    "The price bands mostly match until you hit workspaces and enterprise",
    "Claude Code’s individual ladder mirrors ChatGPT on the ₹1.9k and ₹19.1k anchors, but the product logic is different: ChatGPT sells an AI suite; Claude sells Claude plus a terminal-native coding layer.",
  );

  addPanel(ctx, slide, { left: 76, top: 220, width: 1128, height: 394 }, colors.panel);

  const cols = [76, 214, 330, 500, 728, 844, 968];
  const widths = [138, 116, 170, 228, 116, 124, 236];
  const headers = ["Buyer", "ChatGPT", "Price", "What you get", "Claude", "Price", "What you get"];

  for (let i = 0; i < headers.length; i += 1) {
    ctx.addText(slide, {
      text: headers[i],
      left: cols[i] + 18,
      top: 244,
      width: widths[i] - 18,
      height: 24,
      fontSize: 12,
      color: colors.muted,
      bold: true,
      face: ctx.fonts.mono,
    });
  }

  for (let r = 0; r < rows.length; r += 1) {
    const top = 278 + r * 82;
    const fill = r % 2 === 0 ? colors.panel2 : colors.panel;
    ctx.addShape(slide, {
      left: 92,
      top,
      width: 1096,
      height: 68,
      geometry: "roundRect",
      fill,
      line: ctx.line(colors.line, 1),
    });

    for (let c = 0; c < rows[r].length; c += 1) {
      ctx.addText(slide, {
        text: rows[r][c],
        left: cols[c] + 18,
        top: top + 12,
        width: widths[c] - 18,
        height: 46,
        fontSize: c === 0 || c === 1 || c === 4 ? 15 : 13.5,
        color: c === 1 ? colors.openai : c === 4 ? colors.claude : colors.text,
        bold: c === 0 || c === 1 || c === 4,
      });
    }
  }

  ctx.addText(slide, {
    text: "Decision signal: if you are choosing a solo plan strictly for coding in the terminal, Claude Max 5x is the direct premium alternative to ChatGPT Pro. If you want one tool for research, apps, voice, and broader AI tasks, ChatGPT has the wider bundle.",
    left: 76,
    top: 638,
    width: 1120,
    height: 42,
    fontSize: 15,
    color: colors.muted,
  });

  addFooter(ctx, slide, "US list prices converted to INR at 1 USD = ₹95.68. Business and Team pricing can vary by region, tax, and billing cycle.");
  return slide;
}

export default addSlide;
