import Util from '../../utils.js';
import Field from '../field.js';

export default class Logo extends Field {
  /**
   * Logo fields provide a way for content creators to specify logo images to use in a
   * page, defaulting to the domain's logo. This is useful for site headers and footers
   * that may contain the company logo. Logo fields are supported in modules.
   * @see {@link https://developers.hubspot.com/en/docs/cms/building-blocks/module-theme-fields#logo}
   * @param {object} data The JSON data used to generate the field.
   * @param {object} [data.default={override_inherited_src: false, src: null, alt: null}]
   * Logo object. // @todo Document subproperties
   * -------------------------------------------------------------------------------------
   * @param {string} [data.help_text] Text that will appear in the editor via tooltip to
   * assist the content creator. Best used for information that is supplementary but not
   * required to use the field.
   * @param {string} [data.id] Unique id for a field. This is generated by HubSpot. When
   * building locally you do not need to specify this id.
   * @param {string} [data.inline_help_text] Help text that will be shown inline below the
   * label of the field (limit 300 chars). Best used for information required to use the field.
   * @param {string} [data.label='Logo field'] The text the content creator sees describing the
   * field. May contain spaces.
   * @param {boolean} [data.locked=false] Determines if the field is editable in the content
   * editor. If true, the field will not appear in the content editor.
   * @param {string} [data.name='logo_field'] The variable name you will use to refer to this
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
    this.label = data.label || 'Logo field';
    this.default = data.default || {
      override_inherited_src: false,
      src: null,
      alt: null
    };

    /**
     * @readonly
     * @private
     */
    this.type = 'logo';

    /**
     * Manually defined names get priority. If no name is set, try to set it to the lower
     * snake case of the label provided. If no label is set, fall back to hardcoded value.
     */
    this.name = data.name || Util.toSnakeCase(this.label) || 'logo_field';
  }
}
