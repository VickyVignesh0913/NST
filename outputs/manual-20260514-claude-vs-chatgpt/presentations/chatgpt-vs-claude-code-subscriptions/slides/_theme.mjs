export const colors = {
  bg: "#0C0D14",
  panel: "#151826",
  panel2: "#1B2031",
  text: "#F4F6FB",
  muted: "#A4ADC2",
  line: "#2A3146",
  openai: "#10A37F",
  openaiSoft: "#123B35",
  claude: "#D97757",
  claudeSoft: "#3A261F",
  accent: "#7C8CFF",
  white: "#FFFFFF",
  warn: "#F2C66D",
};

export function addTitle(ctx, slide, eyebrow, title, subtitle) {
  ctx.addText(slide, {
    text: eyebrow.toUpperCase(),
    left: 76,
    top: 54,
    width: 320,
    height: 26,
    fontSize: 12,
    color: colors.muted,
    bold: true,
    face: ctx.fonts.mono,
  });
  ctx.addText(slide, {
    text: title,
    left: 76,
    top: 88,
    width: 1080,
    height: 84,
    fontSize: 31,
    color: colors.text,
    bold: true,
    face: ctx.fonts.title,
  });
  if (subtitle) {
    ctx.addText(slide, {
      text: subtitle,
      left: 76,
      top: 160,
      width: 980,
      height: 46,
      fontSize: 16,
      color: colors.muted,
    });
  }
}

export function addFooter(ctx, slide, text) {
  ctx.addText(slide, {
    text,
    left: 76,
    top: 682,
    width: 1120,
    height: 18,
    fontSize: 10,
    color: "#7E879D",
    face: ctx.fonts.mono,
  });
}

export function addPanel(ctx, slide, frame, fill = colors.panel) {
  return ctx.addShape(slide, {
    ...frame,
    geometry: "roundRect",
    fill,
    line: ctx.line(colors.line, 1),
  });
}

export function addBulletList(ctx, slide, items, frame, color = colors.text, gap = 30) {
  let top = frame.top;
  for (const item of items) {
    ctx.addShape(slide, {
      geometry: "ellipse",
      left: frame.left,
      top: top + 6,
      width: 7,
      height: 7,
      fill: color,
      line: ctx.line(color, 0),
    });
    ctx.addText(slide, {
      text: item,
      left: frame.left + 16,
      top,
      width: frame.width - 16,
      height: 38,
      fontSize: 16,
      color,
    });
    top += gap;
  }
}
