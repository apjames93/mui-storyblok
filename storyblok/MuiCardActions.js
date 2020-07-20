module.exports = {
  "name": "MuiCardActions",
  "display_name": null,
  "updated_at": "2020-07-20T17:00:14.587Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "pos": 0
    },
    "disableSpacing": {
      "type": "boolean",
      "description": "If true, the actions do not have additional margin.",
      "pos": 1
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIconButtonRedirect",
        "MuiIconButtonHref",
        "MuiIconButtonDownload",
        "MuiIconButtonDialog",
        "MuiButtonRedirect",
        "MuiButtonHref",
        "MuiButtonDownload",
        "MuiButtonDialog",
        "MuiAudioPlayer",
        "GoogleConversions",
        "MuiAccordion"
      ],
      "pos": 2,
      "required": true,
      "description": "   * Content passed to MuiGrid to render    * components: MuiIconButtonRedirect,     MuiIconButtonHref,     MuiIconButtonDownload,     MuiIconButtonDialog,     MuiButtonRedirect,     MuiButtonHref,     MuiButtonDownload,     MuiButtonDialog,"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiCardActions",
  "component_group_uuid": null
}