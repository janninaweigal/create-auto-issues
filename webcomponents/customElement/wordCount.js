class WordCount extends HTMLElement {
  constructor() {
    super();
    const wcParent = this.parentNode;
    // console.log(wcParent)
    function countWords(node) {
      var text = node.innerText || node.textContent;
      console.log(text)
      return text.split(/\s+/g).length
    }
    // const word = "word: " + countWords(wcParent);
    // shadow
    const shadow = this.attachShadow({ mode: 'open' });
    this.setAttribute('class', 'test')
    // 子容器
    const span = document.createElement('span');
    span.innerText = "子容器的文本";
    shadow.appendChild(span);
    // setInterval(() => {
    var count = 'words' + countWords(wcParent);
    span.textContent = count;

    // 判断是否在shadow上
    // 获取到shadow的节点
    const dom = document.querySelector('.test').shadowRoot;
    console.log(dom)
    // console.log(dom.querySelector('span'))
    console.log(span.shadowRoot)
    // }, 1000)
  }
}

customElements.define('word-count', WordCount)