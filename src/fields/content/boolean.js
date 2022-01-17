import Util from '../../utils.js';
import Field from '../field.js';

export default class Boolean extends Field {
  /**
   * This field provides a way for content editors to enable/disable functionality. Booleans
   * can only be true or false. Often it makes sense to make groups or fields conditional
   * based on boolean fields. If you think you might need to provide more than two states
   * down the road, a Choice field may be a better option as you can grow into that with
   * less effort should needs change later. Boolean fields are supported in both themes and
   * modules. Boolean fields can be used as style fields.
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#boolean}
   * @param {object} data The JSON data used to generate the field.
   * @param {boolean} [data.default=false] Sets whether the default state of this field
   * is true or false.
   * @param {('checkbox'|'toggle')} [data.display='checkbox'] Choose the visual display
   * style for the field. Can appear as either a "toggle" or a "checkbox".
   * -------------------------------------------------------------------------------------
   * @param {string} [data.help_text] Text that will appear in the editor via tooltip to
   * assist the content creator. Best used for information that is supplementary but not
   * required to use the field.
   * @param {string} [data.id] Unique id for a field. This is generated by HubSpot. When
   * building locally you do not need to specify this id.
   * @param {string} [data.inline_help_text] Help text that will be shown inline below the
   * label of the field (limit 300 chars). Best used for information required to use the field.
   * @param {string} [data.label='Boolean field'] The text the content creator sees describing the
   * field. May contain spaces.
   * @param {boolean} [data.locked=false] Determines if the field is editable in the content
   * editor. If true, the field will not appear in the content editor.
   * @param {string} [data.name='boolean_field'] The variable name you will use to refer to this
   * field's values, and is what the value of the field is stored against. Cannot contain
   * spaces or special characters. If no name is provided, it will default to a lower 
   * snake case value of the label.
   * @param {boolean} [data.required=false] Determines if the field can be left blank in the
   * editor. If true, content will not be allowed to publish without filling out this field.
   * @param {Array} [data.visibility] Determines the display conditions for a field.
   * @param {'half_width'|null} [data.display_width=null] Allows for side by side module
   * fields in content editors, rather than full-width fields, when set to "half_width". The
   * field will appear side-by-side with the next field in the fields.json file, as long as
   * that field is also set to "half_width".
   */
  constructor (data = {}) {
    super(data);
    this.label = data.label || 'Boolean field';
  
    /**
     * @readonly
     * @private
     */
    this.type = 'boolean';

    /**
     * Manually defined names get priority. If no name is set, try to set it to the lower
     * snake case of the label provided. If no label is set, fall back to hardcoded value.
     */
    this.name = data.name || Util.toSnakeCase(this.label) || 'boolean_field';
  }
}
