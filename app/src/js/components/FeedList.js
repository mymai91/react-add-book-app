/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({
  render : function () {
    var feedItems = this.props.items.map(function (item) {
      return <FeedItem key={item.key}
                       title={item.title} 
                       desc={item.description} />
    }.bind(this));
    return (
      <ul className="list-group">
        {feedItems}
      </ul>
    );
  }
});

module.exports = FeedList;