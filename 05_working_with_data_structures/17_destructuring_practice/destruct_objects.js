const link = {
  href: '#',
  title: 'simple link',
  target: 'blank',
  className: 'link',
  id: null,
  children: {
    span: {
      content: 'Click me',
      className: 'anchor'
    }
  }
};

const {
  target,
  className: renamed,
  children : {
    span: {
      className: newClassName,
      content
    }
  },
} = link;
console.log(renamed);
