import React, { Component, Fragment } from 'react';
import AttributeSelectionGroup from '../../components/attributeSelectionGroup/AttributeSelectionGroup';
import { AppContext } from '../../service/app.context';
import { isUsable } from '../../service/functions';
import { MeleeWeapons } from '../../WarframeItemDB';

class UsableMeleeWeapon extends Component {
  static contextType = AppContext;

  state = {

  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
    const defaultNoHarmNegAttr = ['critical_chance_on_slide_attack', 'finisher_damage', 'channeling_efficiency'];
    const defaultLittleHarmNegAttr = ['damage_vs_infested', 'damage_vs_corpus', 'critical_chance_on_slide_attack', 'finisher_damage', 'channeling_efficiency'];
    const khoraBeneficialNegAttr = ['impact_damage','puncture_damage'];
    const khoraNoHarmNegAttr = [
      'status_duration',
      'finisher_damage',
      'critical_chance_on_slide_attack',
      'channeling_efficiency',
      'damage_vs_infested',
      'damage_vs_corpus',
      'damage_vs_grineer',
      'fire_rate_/_attack_speed',
      'range',
    ]; //触发时间 处决伤害 滑爆 连击效率 -C -I -G 攻速 范围
    
    const Configs = [
      {
        id: 1,
        title: '可用近战武器-速范暴无伤负 ' + 1000 + '以下',
        priceCap: 1000,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,fire_rate_/_attack_speed,range',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 2,
        title: '可用近战武器-速暴毒无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,fire_rate_/_attack_speed,toxin_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 3,
        title: '可用近战武器-速暴冰无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,fire_rate_/_attack_speed,cold_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 4,
        title: '可用近战武器-速范毒无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'range,fire_rate_/_attack_speed,toxin_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 5,
        title: '可用近战武器-速范冰无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'range,fire_rate_/_attack_speed,cold_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 6,
        title: '可用近战武器-范暴毒无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'range,critical_damage,toxin_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 7,
        title: '可用近战武器-范暴冰无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'range,critical_damage,cold_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 8,
        title: '可用近战武器-速双暴无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'fire_rate_/_attack_speed,critical_damage,critical_chance',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 9,
        title: '可用近战武器-范双暴无伤负 ' + 600 + '以下',
        priceCap: 600,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'range,critical_damage,critical_chance',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 10,
        title: '可用近战武器-范暴无伤负 ' + 300 + '以下',
        priceCap: 300,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'range,critical_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 10,
        title: '可用近战武器-速暴无伤负 ' + 300 + '以下',
        priceCap: 300,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'fire_rate_/_attack_speed,critical_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 9,
        title: '可用近战武器-暴冰无伤负 ' + 300 + '以下',
        priceCap: 300,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            // weapon_url_name: 'kronen',
            positive_stats: 'critical_damage,cold_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
    ]

    return (
      <Fragment>
        {Configs.map(config => {
          return <AttributeSelectionGroup
            key={config.id}
            {...config}
          />
        })}
      </Fragment>

    );
  }
}

export default UsableMeleeWeapon;