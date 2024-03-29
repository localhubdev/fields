import Util from '../utils.js';

export default class Field {
  /**
   * Fields are form fields for customizing the module or theme. Fields can be used to
   * control both style and function for modules and themes used on a site.
   * @see {@link https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview}
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields}
   * @param {object} data The JSON data used to generate the field.
   * @param {string} [data.help_text] Text that will appear in the editor via tooltip to
   * assist the content creator. Best used for information that is supplementary but not
   * required to use the field.
   * @param {string} [data.id] Unique id for a field. This is generated by HubSpot. When
   * building locally you do not need to specify this id.
   * @param {string} [data.inline_help_text] Help text that will be shown inline below the
   * label of the field (limit 300 chars). Best used for information required to use the field.
   * @param {string} [data.label='Field'] The text the content creator sees describing the
   * field. May contain spaces.
   * @param {boolean} [data.locked=false] Determines if the field is editable in the content
   * editor. If true, the field will not appear in the content editor.
   * @param {string} [data.name='field'] The variable name you will use to refer to this
   * field's values, and is what the value of the field is stored against. Cannot contain
   * spaces or special characters. If no name is provided, it will default to a lower 
   * snake case value of the label.
   * @param {boolean} [data.required=false] Determines if the field can be left blank in the
   * editor. If true, content will not be allowed to publish without filling out this field.
   * @param {string} data.type The type of field see field types below for
   * documentation on all field types. {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#field-types}
   * @param {Array} [data.visibility] Determines the display conditions for a field.
   * @param {'half_width'|null} [data.display_width=null] Allows for side by side module
   * fields in content editors, rather than full-width fields, when set to "half_width". The
   * field will appear side-by-side with the next field in the fields.json file, as long as
   * that field is also set to "half_width".
   */
  constructor (data = {}) {
    Object.assign(this, data);
    this.help_text = data.help_text;
    this.id = data.id;
    this.inline_help_text = data.inline_help_text;
    this.label = data.label || 'Field';
    this.locked = !!data.locked;
    this.name = data.name || Util.toSnakeCase(this.label) || 'field';
    this.required = !!data.required;
    this.type = data.type;
    this.visibility = data.visibility;
    this.display_width = data.display_width || null;
  }
}
