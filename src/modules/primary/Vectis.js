import React, { Component, Fragment } from 'react';
import AttributeSelectionGroup from '../../components/attributeSelectionGroup/AttributeSelectionGroup';
import { ATTRIBUTES } from '../../WarframeItemDB';

class Vectis extends Component {

  render() {
    const sniperNoHarmNegs = [
      ATTRIBUTES.recoil.name,
      ATTRIBUTES.statusDuration.name,
      ATTRIBUTES.statusChance.name,
      ATTRIBUTES.ammoMax.name,
      ATTRIBUTES.cDamage.name,
      ATTRIBUTES.iDamage.name,
      ATTRIBUTES.gDamage.name,
    ];

    const vectisLittleHarmNegs = [
      ATTRIBUTES.reloadSpeed.name,
    ]

    const multishotFilter = {
      name: ATTRIBUTES.multiShot.name,
      shouldGreaterThan: true,
      value: 62, // 62 is for ordinary version, for Primed version it is 50
    };

    const weaponName = "守望者-"; // rubico
    // (多双爆/多爆火/多爆电/基双爆)-(变焦) 2000
    const Configs = [
      {
        id: 1,
        title: weaponName + '多双爆-变焦/弹匣容量' + 2000 + '以下',
        priceCap: 2000,
        weaponFilter: null,
        noHarmNegAttr: [ATTRIBUTES.zoom.name, ATTRIBUTES.magazineCapacity.name],
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 2,
        title: weaponName + '基多爆-变焦/弹匣容量' + 2000 + '以下',
        priceCap: 2000,
        weaponFilter: null,
        noHarmNegAttr: [ATTRIBUTES.zoom.name, ATTRIBUTES.magazineCapacity.name],
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.baseDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 3,
        title: weaponName + '基双爆-变焦/弹匣容量' + 2000 + '以下',
        priceCap: 2000,
        weaponFilter: null,
        noHarmNegAttr: [ATTRIBUTES.zoom.name, ATTRIBUTES.magazineCapacity.name],
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.baseDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },

      {
        id: 4,
        title: weaponName + '多双爆无伤负' + 1000 + '以下',
        priceCap: 1000,
        weaponFilter: null,
        noHarmNegAttr: sniperNoHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 5,
        title: weaponName + '多爆火无伤负' + 1000 + '以下',
        priceCap: 1000,
        weaponFilter: null,
        noHarmNegAttr: sniperNoHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.heatDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 6,
        title: weaponName + '基双爆无伤负' + 1000 + '以下',
        priceCap: 1000,
        weaponFilter: null,
        noHarmNegAttr: sniperNoHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.baseDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },

      {
        id: 7,
        title: weaponName + '多双爆小伤负' + 800 + '以下',
        priceCap: 800,
        weaponFilter: null,
        noHarmNegAttr: vectisLittleHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 8,
        title: weaponName + '多爆火小伤负' + 800 + '以下',
        priceCap: 800,
        weaponFilter: null,
        noHarmNegAttr: vectisLittleHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.heatDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 9,
        title: weaponName + '基双爆小伤负' + 800 + '以下',
        priceCap: 800,
        weaponFilter: null,
        noHarmNegAttr: vectisLittleHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalDamage.name, ATTRIBUTES.criticalChance.name, ATTRIBUTES.baseDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },

      {
        id: 10,
        title: weaponName + '多爆-变焦/弹匣容量' + 800 + '以下',
        priceCap: 800,
        weaponFilter: null,
        noHarmNegAttr: [ATTRIBUTES.zoom.name, ATTRIBUTES.magazineCapacity.name],
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },

      {
        id: 11,
        title: weaponName + '多爆无伤负' + 500 + '以下',
        priceCap: 500,
        weaponFilter: null,
        noHarmNegAttr: sniperNoHarmNegs,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: multishotFilter,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'vectis',
            positive_stats: [ATTRIBUTES.criticalChance.name, ATTRIBUTES.multiShot.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
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

export default Vectis;