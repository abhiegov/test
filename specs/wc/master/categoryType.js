var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/categorytype/_create",
		"tenantIdRequired": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "wc.create.categorytype.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "CategoryType.name",
							"label": "wc.create.categorytype",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "CategoryType.description",
							"label": "wc.create.description",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "CategoryType.active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/categorytype/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "wc.search.categorytype.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "name",
							"label": "wc.create.categorytype",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		],
		"result": {
			"header": [{label: "wc.create.code"},{label: "wc.search.result.categoryType"}, {label: "wc.search.result.description"}, {label: "wc.search.result.active"}],
			"values": ["code","name", "description", "active"],
			"resultPath": "CategoryTypes",
			"rowClickUrlUpdate": "/update/wc/categoryType/{id}",
			"rowClickUrlView": "/view/wc/categoryType/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/categorytype/_search?id={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "wc.view.categorytype.title",
				"name": "viewCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "CategoryTypes[0].name",
							"label": "wc.create.categorytype",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "CategoryTypes[0].description",
							"label": "wc.create.description",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "CategoryTypes[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.update": {
		"numCols": 12/3,
		"searchUrl": "/wcms/masters/categorytype/_search?id={id}",
		"url":"/wcms/masters/categorytype/{CategoryType.code}/_update",
		"isResponseArray":true,
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "wc.update.categorytype.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "CategoryType.name",
							"label": "wc.create.categorytype",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "CategoryType.description",
							"label": "wc.create.description",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "CategoryType.active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	}
}

export default dat;
