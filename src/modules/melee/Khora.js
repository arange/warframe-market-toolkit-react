import React, { Component, Fragment } from 'react';
import AttributeSelectionGroup from '../../components/attributeSelectionGroup/AttributeSelectionGroup';
import { AppContext } from '../../service/app.context';
import { isKhora } from '../../service/functions';
import { ATTRIBUTES, Weapons } from '../../WarframeItemDB';

class Khora extends Component {
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
        title: '猫刀-基双暴 正面负' + 2000 + '以下', // 1500
        priceCap: 2000,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraBeneficialNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,critical_chance,base_damage_/_melee_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 2,
        title: '猫刀-基双暴 无伤负' + 1500 + '以下', // 1200
        priceCap: 1500,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,critical_chance,base_damage_/_melee_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 3,
        title: '猫刀-基暴电 无伤负' + 700 + '以下', // 500
        priceCap: 700,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,electric_damage,base_damage_/_melee_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 4,
        title: '猫刀-基暴 正面负' + 500 + '以下', // 500
        priceCap: 500,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraBeneficialNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,base_damage_/_melee_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 5,
        title: '猫刀-基暴 无伤负' + 500 + '以下', // 500
        priceCap: 500,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: 'critical_damage,base_damage_/_melee_damage',
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 6,
        title: '猫刀-双暴 正面负' + 500 + '以下', // 500
        priceCap: 500,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraBeneficialNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc'
          }
        }
      },
      {
        id: 7,
        title: '猫刀-双暴 无伤负' + 300 + '以下', // 300
        priceCap: 300,
        weaponFilter: Weapons,
        noHarmNegAttr: khoraNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isKhora,
        requestConfig: {
          params: {
            type: 'riven',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name].join(','),
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

export default Khora;