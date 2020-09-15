import axios from 'axios';
import React, { Component } from 'react';
import { AppContext } from '../../service/app.context';
import AuctionItem from '../auctionItem/AuctionItem';
import styles from "./AttributeSelectionGroup.module.css";
import PropTypes from 'prop-types';
import Loader from '../ui/loader/Loader';
import { blue } from '@material-ui/core/colors';

class AttributeSelectionGroup extends Component {
  static contextType = AppContext;

  state = {
    hasNegative: this.props.hasNegative,  // null, true, false
    requestConfig: this.props.requestConfig,
    noHarmNegAttr: this.props.noHarmNegAttr,
    data: null,
    loading: true,
    error: null
  }

  componentDidMount() {
    // delay the data pulling because of request per second limit of warframe market
    setTimeout(function () {
      this.pullData();
      // refresh the page every 1 minute
      // this.interval = setInterval(this.pullData, 60000);
    }.bind(this), 333 * this.props.id);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  hasNegative = (attributes) => {
    const negativeIndex = attributes.findIndex(attr => !attr.positive);
    // if there is a negative attribute and it has no harm
    if (negativeIndex !== -1 && this.state.noHarmNegAttr.indexOf(attributes[negativeIndex]['url_name']) >= 0) {
      return true;
    }
    return false;
  }

  attributesTotalCount = () => {
    const attrsString = this.state.requestConfig.params.positive_stats;
    if (!attrsString) return;
    const attrs = attrsString.split(',');
    const negCount = this.state.hasNegative ? 1 : 0;
    return attrs.length + negCount;
  }

  pullData = () => {
    const config = this.state.requestConfig;

    axios.get(this.context.SERVER_BASE_API_URL + "/auctions/search", config)
      .then(response => {
        this.setState({ data: response.data, loading: false, error: null });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: error });
      })
  }



  render() {
    const totalCount = this.attributesTotalCount();
    let weapons = null;
    if (this.props.weaponFilter) {
      weapons = this.props.weaponFilter
    }
    let priceCap = null;
    if (this.props.priceCap) {
      priceCap = this.props.priceCap;
    }

    let content = <Loader title="Loading..." pad={true} color={blue} center={true} />
    if (this.state.data) {
      if (!this.state.data.payload) {
        if (this.state.data.message) {
          content = this.state.data.message;
        } else {
          content = 'Something wrong happens, try refresh the page';
        }
      } else {
        content = this.state.data.payload.auctions.map(auction => {
          const item = auction.item;

          // 武器是否在过滤列表中
          if (weapons && !weapons.find(weapon => weapon.url_name === item.weapon_url_name)) {
            // console.log(item.weapon_url_name,'not in usable weapon list!');
            return null;
          }
          // 武器是否满足过滤条件：是猫刀/可用
          if (this.props.filterFunc && !this.props.filterFunc(item.weapon_url_name)) {
            return null;
          }
          // 紫卡价格是否低于设定值
          if (priceCap && !(auction.buyout_price && auction.buyout_price <= priceCap)) {
            // console.log(auction.buyout_price, ' exceeds the price cap of ',priceCap);
            return null;
          }
          // 是否满足属性过滤条件
          if (this.props.attributeFilter) {
            const { name, value, shouldGreaterThan } = this.props.attributeFilter;
            item.attributes.forEach(attr => {
              if (attr.url_name === name) {
                if (!(shouldGreaterThan ? attr.value >= value : attr.value <= value)) {
                  return null;
                }
              }
            });
          }
          if (item.attributes.length !== totalCount) return null;
          switch (this.state.hasNegative) {
            case true:
              return this.hasNegative(item.attributes) ? <AuctionItem hasNegative={this.state.hasNegative} auction={auction} key={auction.id} id={auction.id} attributes={item.attributes} /> : null;
            case false:
              return this.hasNegative(item.attributes) ? null : <AuctionItem hasNegative={this.state.hasNegative} auction={auction} key={auction.id} id={auction.id} attributes={item.attributes} />;
            default:
              return <AuctionItem hasNegative={this.state.hasNegative} auction={auction} key={auction.id} id={auction.id} attributes={item.attributes} />;
          }
        })
      };
    } else if (this.state.error) {
      content = this.state.error;
    }


    return (
      <section>
        <div className={styles.Title}>
          <h1>{this.props.title}</h1>
        </div>
        <div className={styles.Content}>
          {content}
        </div>
      </section>
    );
  }
}

export default AttributeSelectionGroup;

AttributeSelectionGroup.propTypes = {
  hasNegative: PropTypes.bool.isRequired,
  requestConfig: PropTypes.object.isRequired,
  noHarmNegAttr: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};