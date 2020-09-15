import { MeleeWeapons, ATTRIBUTES } from '../WarframeItemDB';

export const findZhName = (weapon_url_name) => {
  const index = MeleeWeapons.findIndex(weapon => weapon.url_name === weapon_url_name);
  if (index === -1) return weapon_url_name;
  return MeleeWeapons[index].name.zh;
}

export const findEnName = (weapon_url_name) => {
  const index = MeleeWeapons.findIndex(weapon => weapon.url_name === weapon_url_name);
  if (index === -1) return weapon_url_name;
  return MeleeWeapons[index].name.en;
}

export const isKhora = (weapon_url_name) => {
  const index = MeleeWeapons.findIndex(weapon => weapon.url_name === weapon_url_name);
  if (index === -1) return false;
  return MeleeWeapons[index].disposition >= 1.3;
}

export const isUsable = (weapon_url_name) => {
  const index = MeleeWeapons.findIndex(weapon => weapon.url_name === weapon_url_name);
  if (index === -1) return false;
  return MeleeWeapons[index].isUseable;
}

export const getDisposition = (weapon_url_name) => {
  const index = MeleeWeapons.findIndex(weapon => weapon.url_name === weapon_url_name);
  if (index === -1) return 0;
  return MeleeWeapons[index].disposition;
}

export const getAttributeZhName = (weapon_url_name) => {
  for (const attr in ATTRIBUTES) {
    if (ATTRIBUTES.hasOwnProperty(attr)) {
      const element = ATTRIBUTES[attr];
      if (element.name === weapon_url_name) return element.zh;
    }
  }
  return weapon_url_name;
}