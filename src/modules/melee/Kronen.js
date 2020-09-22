import React, { Component, Fragment } from 'react';
import AttributeSelectionGroup from '../../components/attributeSelectionGroup/AttributeSelectionGroup';
import { AppContext } from '../../service/app.context';
import { isUsable } from '../../service/functions';
import { Weapons, ATTRIBUTES } from '../../WarframeItemDB';

class Kronen extends Component {
  static contextType = AppContext;

  state = {

  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
    const defaultNoHarmNegAttr = [ATTRIBUTES.slide.name, ATTRIBUTES.finisherDamage.name, ATTRIBUTES.channelingEfficiency.name];
    const defaultLittleHarmNegAttr = [ATTRIBUTES.iDamage.name, ATTRIBUTES.cDamage.name, ATTRIBUTES.slide.name, ATTRIBUTES.finisherDamage.name, ATTRIBUTES.channelingEfficiency.name];
    const khoraBeneficialNegAttr = [ATTRIBUTES.impactDamage.name, ATTRIBUTES.punctureDamage.name];
    const khoraNoHarmNegAttr = [
      ATTRIBUTES.statusDuration.name,
      ATTRIBUTES.finisherDamage.name,
      ATTRIBUTES.slide.name,
      ATTRIBUTES.channelingEfficiency.name,
      ATTRIBUTES.iDamage.name,
      ATTRIBUTES.cDamage.name,
      ATTRIBUTES.gDamage.name,
      ATTRIBUTES.speed.name,
      ATTRIBUTES.range.name,
    ]; //触发时间 处决伤害 滑爆 连击效率 -C -I -G 攻速 范围

    const Configs = [
      {
        id: 1,
        title: '任意皇拐 ' + 300 + '以下',
        priceCap: 300,
        weaponFilter: Weapons,
        noHarmNegAttr: [''],
        hasNegative: false,
        filterFunc: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'kronen',
            polarity: 'any',
            // re_rolls_min: '0',
            // re_rolls_max: '0',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 2,
        title: '皇拐-速暴无伤负 ' + 800 + '以下',
        priceCap: 800,
        weaponFilter: Weapons,
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