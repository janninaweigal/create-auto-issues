function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
  // dom元素的key值，用作唯一标识符
  if (props.key) {
    this.key = props.key;
  }
  var count = 0;
  children.forEach((child, i) => {
    if (child instanceof Element) {
      count += child.count;
    } else {
      children[i] = '' + child
      count++;
    }

  });
  // 子元素个数
  this.count = count;
}

function createElement(tagName, props, children) {
  return new Element(tagName, props, children)
}

module.exports = createElement