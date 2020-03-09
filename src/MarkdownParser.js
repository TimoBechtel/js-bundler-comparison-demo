import showdown from 'showdown';

const parser = new showdown.Converter();

export const MarkdownParser = () => {
  return {
    parse(text) {
      const html = parser.makeHtml(text);
      return {
        to(element) {
          element.innerHTML = html;
        },
        asString() {
          return html;
        }
      };
    }
  };
};
