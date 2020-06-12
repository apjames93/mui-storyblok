module.exports = {
  "name": "MuiImage",
  "display_name": null,
  "updated_at": "2020-06-11T21:51:54.532Z",
  "schema": {
    "hrefLink": {
      "type": "text",
      "default_value": "",
      "description": "Link to redirect on click"
    },
    "imageStyle": {
      "type": "options",
      "description": "Styling for the image",
      "min_options": "",
      "options": [
        {
          "value": "height: 25px",
          "name": "height"
        },
        {
          "value": "width: 250px",
          "name": "width"
        }
      ]
    },
    "image": {
      "type": "text",
      "description": "Url to the image",
      "regex": "",
      "default_value": "",
      "required": true
    },
    "rootClass": {
      "type": "options",
      "description": "Styling for the container of image\n",
      "options": [
        {
          "value": "position: absolute; right: 10",
          "name": "position right"
        }
      ]
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiImage",
  "component_group_uuid": null
}