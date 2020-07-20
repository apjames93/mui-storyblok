module.exports = {
  "name": "MuiAccordionTypography",
  "display_name": null,
  "updated_at": "2020-07-20T17:22:47.682Z",
  "schema": {
    "align": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "inherit",
          "name": "inherit"
        },
        {
          "value": "left",
          "name": "left"
        },
        {
          "value": "center",
          "name": "center"
        },
        {
          "value": "right",
          "name": "right"
        },
        {
          "value": "justify",
          "name": "justify"
        }
      ],
      "default_value": "inherit",
      "required": true
    },
    "color": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "initial",
          "name": "initial"
        },
        {
          "value": "inherit",
          "name": "inherit"
        },
        {
          "value": "primary",
          "name": "primary"
        },
        {
          "value": "secondary",
          "name": "secondary"
        },
        {
          "value": "textPrimary",
          "name": "textPrimary"
        },
        {
          "value": "textSecondary",
          "name": "textSecondary"
        },
        {
          "value": "error",
          "name": "error"
        }
      ],
      "default_value": "initial",
      "required": true
    },
    "rootClass": {
      "type": "options",
      "options": [
        {
          "value": "color: white",
          "name": "color white"
        }
      ],
      "folder_slug": "",
      "description": "",
      "display_name": "",
      "translatable": false,
      "required": false,
      "external_datasource": ""
    },
    "width": {
      "type": "text",
      "required": true,
      "default_value": "100%"
    },
    "height": {
      "type": "text",
      "required": true,
      "default_value": "100%"
    },
    "content": {
      "type": "bloks",
      "maximum": "",
      "restrict_components": true,
      "component_whitelist": [
        "MuiText",
        "MuiIcon",
        "MuiIconButtonRedirect",
        "MuiIconButtonHref",
        "MuiIconButtonDownload",
        "MuiButtonRedirect",
        "MuiButtonHref",
        "MuiButtonDownload",
        "GoogleConversions"
      ],
      "required": true
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiAccordionTypography",
  "component_group_uuid": null
}