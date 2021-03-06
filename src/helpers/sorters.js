const sortName = (a, b) => {
  if (a.name > b.name) {
    return 1
  }
  if (b.name > a.name) {
    return -1
  }
  return 0
}

const sortHeight = (a, b) => {
  const aNum = a.height === 'unknown' ? -1 : parseInt(a.height)
  const bNum = b.height === 'unknown' ? -1 : parseInt(b.height)

  return bNum - aNum
}

const sortMass = (a, b) => {
  const aNum = a.mass === 'unknown' ? -1 : parseInt(a.mass.replace(/,/g, ''))
  const bNum = b.mass === 'unknown' ? -1 : parseInt(b.mass.replace(/,/g, ''))

  return bNum - aNum
}

module.exports = {
  name: sortName,
  height: sortHeight,
  mass: sortMass
}
