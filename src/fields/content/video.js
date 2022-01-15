import Util from '../../util.js';
import Field from '../field.js';

export default class Video extends Field {
  constructor (data = {}) {
    super(data);
    this.name = data.name || 'videoplayer_field';
    this.label = data.label || Util.toSentenceCase(this.name);
    this.type = 'blog';
  }
}
