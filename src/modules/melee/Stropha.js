import React, { Component, Fragment } from 'react';
import AttributeSelectionGroup from '../../components/attributeSelectionGroup/AttributeSelectionGroup';
import { ATTRIBUTES } from '../../WarframeItemDB';

class Stropha extends Component {

  render() {
    const pureHeavyNoHarmNegAttr = [
      ATTRIBUTES.range,
      ATTRIBUTES.finisherDamage.name,
      ATTRIBUTES.slide.name,
      ATTRIBUTES.punctureDamage.name,
      ATTRIBUTES.slashDamage.name,
      ATTRIBUTES.channelingEfficiency.name
    ];

    const weaponName = "诡计之刃-";
    const Configs = [
      {
        id: 1,
        title: weaponName + '基双爆 ' + 1000 + '以下',
        priceCap: 1000,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.criticalChance.name,ATTRIBUTES.baseDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 2,
        title: weaponName + '基爆火 ' + 700 + '以下',
        priceCap: 700,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalChance.name,ATTRIBUTES.baseDamage.name,ATTRIBUTES.heatDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 3,
        title: weaponName + '基爆电 ' + 700 + '以下',
        priceCap: 700,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalChance.name,ATTRIBUTES.baseDamage.name,ATTRIBUTES.electricDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 4,
        title: weaponName + '双爆火 ' + 700 + '以下',
        priceCap: 700,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.criticalChance.name,ATTRIBUTES.heatDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 5,
        title: weaponName + '双爆电' + 700 + '以下',
        priceCap: 700,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.criticalChance.name,ATTRIBUTES.electricDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 6,
        title: weaponName + '初(>10)爆火 ' + 700 + '以下',
        priceCap: 700,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: {
          name: 'channeling_damage',
          shouldGreaterThan: true,
          value: 14.6,
        },
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalChance.name,ATTRIBUTES.initialComboCount.name,ATTRIBUTES.heatDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 7,
        title: weaponName + '初(>10)爆电' + 700 + '以下',
        priceCap: 700,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: {
          name: 'channeling_damage',
          shouldGreaterThan: true,
          value: 14.6,
        },
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalChance.name,ATTRIBUTES.initialComboCount.name,ATTRIBUTES.electricDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 8,
        title: weaponName + '基暴火' + 600 + '以下',
        priceCap: 600,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.baseDamage.name,ATTRIBUTES.heatDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 9,
        title: weaponName + '基暴电' + 600 + '以下',
        priceCap: 600,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.baseDamage.name,ATTRIBUTES.electricDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 10,
        title: weaponName + '初(>10)暴火' + 600 + '以下',
        priceCap: 600,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: {
          name: 'channeling_damage',
          shouldGreaterThan: true,
          value: 14.6,
        },
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.initialComboCount.name,ATTRIBUTES.heatDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 11,
        title: weaponName + '初(>10)暴电' + 600 + '以下',
        priceCap: 600,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: {
          name: 'channeling_damage',
          shouldGreaterThan: true,
          value: 14.6,
        },
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalDamage.name,ATTRIBUTES.initialComboCount.name,ATTRIBUTES.electricDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 12,
        title: weaponName + '初(>10)爆' + 400 + '以下',
        priceCap: 400,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: {
          name: 'channeling_damage',
          shouldGreaterThan: true,
          value: 14.6,
        },
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalChance.name,ATTRIBUTES.initialComboCount.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
      {
        id: 13,
        title: weaponName + '基爆' + 400 + '以下',
        priceCap: 400,
        weaponFilter: null,
        noHarmNegAttr: pureHeavyNoHarmNegAttr,
        hasNegative: true,
        filterFunc: null,
        attributeFilter: null,
        requestConfig: {
          params: {
            type: 'riven',
            weapon_url_name: 'stropha',
            positive_stats: [ATTRIBUTES.criticalChance.name,ATTRIBUTES.baseDamage.name].join(','),
            polarity: 'any',
            sort_by: 'price_asc',
          }
        }
      },
    ]

    return (
      <Fragment>
        <h1>纯重击无伤负</h1>
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

export default Stropha;