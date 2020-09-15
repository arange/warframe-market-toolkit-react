import { Button, Link } from '@material-ui/core';
import React from 'react';
import { findEnName, findZhName, getDisposition, getAttributeZhName } from '../../service/functions';
import styles from "./AuctionItem.module.css";
import Tooltip from '@material-ui/core/Tooltip';

export default function AuctionItem(props) {

  let startingPrice = null;
  let buyoutPrice = null;
  if (props.auction) {
    startingPrice = props.auction.starting_price ? props.auction.starting_price : null;
    buyoutPrice = props.auction.buyout_price ? props.auction.buyout_price : null;
  }

  const starting = startingPrice ?
    <div className={styles.PriceRow}><span>Starting price:</span>
      <b style={{ color: 'red' }}>{startingPrice}p</b>
    </div>
    : null

  const buyout = buyoutPrice ?
    <div className={styles.PriceRow}><span>Buyout price:</span>
      <b style={{ color: 'red' }}>{buyoutPrice}p</b>
    </div>
    : null

  const renameAttr = (name) => {
    return getAttributeZhName(name);
  }

  return (

    <section className={styles.Container}>
      <div className={styles.Header}>
        <Tooltip title="Check the auction at warframe market">
          <Button
            variant="contained"
            color="primary"
            href={"https://warframe.market/auction/" + props.id}
            target="_blank">
            {findZhName(props.auction.item.weapon_url_name) + ' - ' + props.auction.item.name}
          </Button>
        </Tooltip>
        <Tooltip title="Check the attribute stats at semlar.com">
          <Button
            color="primary"
            href={"https://semlar.com/rivencalc/" + findEnName(props.auction.item.weapon_url_name) + '/' + (props.hasNegative ? (props.attributes.length - 1) + '1' : (props.attributes.length) + '0')}
            target="_blank">
            {getDisposition(props.auction.item.weapon_url_name)}
          </Button>
        </Tooltip>
      </div>
      <div className={styles.Body}>
        <div>
          <ul className={styles.Attributes}>
            {props.attributes.map(attr => {
              return (
                <li style={{ display: 'block', textAlign: 'left' }}>
                  <label class="attribute-value">{renameAttr(attr.value + '')}{['range', 'channeling_damage', 'combo_duration', 'status_duration'].find(e => e === attr.url_name) ? '' : '%'}</label>
                  <span class="attribute-name">{renameAttr(attr.url_name + '')}</span>
                </li>
              )
            })}
          </ul>
          {/* <ul class="auction-entry__mod-attributes col-12">
              <li><span class="attribute-name">Mr.</span><b class="attribute-value">{props.auction.item.mastery_level}</b></li>
              <li><span class="attribute-name">Ranks:</span><b class="attribute-value">{props.auction.item.mod_rank}</b></li>
              <li><span class="attribute-name">Re-rolls:</span><b class="attribute-value">{props.auction.item.re_rolls}</b></li>
              <li><span class="attribute-name">Polarity:</span><b class="attribute-value">{props.auction.item.polarity}</b></li>
            </ul> */}
        </div>
        <div className={styles.Bids}>
          {startingPrice === buyoutPrice ?
            <div className={styles.PriceRow}><span>Selling price:</span>
              <b class="price" style={{ color: 'red' }}>{startingPrice}p</b>
            </div> :
            <>
              {starting}
              {buyout}
            </>
          }
        </div >
      </div >
      <div className={styles.Footer}>
        <div>
          <Link variant="contained" color="primary" id={props.auction.owner.ingame_name} value={props.auction.owner.ingame_name}>{props.auction.owner.ingame_name}</Link>
        </div>
        <div >
          <span >{props.auction.owner.status}</span>
        </div>
        <div >reputation: {props.auction.owner.reputation}</div>
      </div>
    </section >
  )
};