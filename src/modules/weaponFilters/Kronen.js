import React, { Component, Fragment } from 'react';
import AttributeSelectionGroup from '../../components/attributeSelectionGroup/AttributeSelectionGroup';
import { AppContext } from '../../service/app.context';
import { isUsable } from '../../service/functions';
import { MeleeWeapons } from '../../WarframeItemDB';

class Kronen extends Component {
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
    const khoraBeneficialNegAttr = ['impact_damage', 'puncture_damage'];
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
        title: '零洗皇拐 ' + 300 + '以下',
        priceCap: 300,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: [''],
        hasNegative: false,
        filterFunc: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'kronen',
            polarity: 'any',
            re_rolls_min: '0',
            re_rolls_max: '0',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 2,
        title: '皇拐-速暴无伤负 ' + 800 + '以下',
        priceCap: 800,
        weaponFilter: MeleeWeapons,
        noHarmNegAttr: defaultNoHarmNegAttr,
        hasNegative: true,
        filterFunc: isUsable,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'kronen',
            positive_stats: 'fire_rate_/_attack_speed,critical_damage',
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

export default Kronen;