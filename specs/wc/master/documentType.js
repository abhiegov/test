var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url":  "/wcms/masters/documenttype/_create",
		"tenantIdRequired": true,
		"objectName": "documentType",
		"groups": [
			{
				"label": "wc.create.documentType.title",
				"name": "createDocumentType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "documentType.name",
							"label": "wc.create.documentType",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "documentType.description",
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
							"jsonPath": "documentType.active",
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
		"url": "/wcms/masters/documenttype/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "DocumentType",
		"groups": [
			{
				"label": "wc.search.documentType.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "DocumentType.name",
							"label": "wc.create.documentType",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "DocumentType.active",
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
			"header": [{label: "wc.search.result.documentType"}, {label: "wc.search.result.description"}, {label: "wc.search.result.active"}],
			"values": ["name", "description", "active"],
			"resultPath": "DocumentTypes",
			"rowClickUrlUpdate": "/update/wc/documentType/{id}",
			"rowClickUrlView": "/view/wc/documentType/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/documenttype/_search?id={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "DocumentTypes",
		"groups": [
			{
				"label": "wc.view.DocumentTypes.title",
				"name": "DocumentTypes",
				"fields": [
						{
							"name": "name",
							"jsonPath": "DocumentTypes[0].name",
							"label": "wc.create.documentType",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "DocumentTypes[0].description",
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
							"jsonPath": "DocumentTypes[0].active",
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
		"searchUrl": "/wcms/masters/documenttype/_search?id={id}",
		"url":"/wcms/masters/documenttype/{DocumentType.code}/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"isResponseArray":true,
		"objectName": "DocumentType",
		"groups": [
			{
				"label": "wc.update.DocumentTypes.title",
				"name": "DocumentTypes",
				"fields": [
						{
							"name": "name",
							"jsonPath": "DocumentType.name",
							"label": "wc.create.documentType",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "DocumentType.description",
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
							"jsonPath": "DocumentType.active",
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
