import './main.scss';

const input = document.getElementById('md-input');
const preview = document.getElementById('md-preview');

let MarkdownParser = null;

const livepreview = async e => {
  MarkdownParser =
    MarkdownParser || (await import('./MarkdownParser')).MarkdownParser;
  const parser = MarkdownParser();
  parser.parse(e.target.value).to(preview);
};

document.getElementById('md-live-preview').addEventListener('click', e => {
  if (e.target.checked) {
    input.addEventListener('input', livepreview);
    livepreview({ target: input });
  } else {
    input.removeEventListener('input', livepreview);
  }
});
