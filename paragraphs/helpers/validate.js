const isHexColor = (hex) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(`${hex}`)
};

export {isHexColor}