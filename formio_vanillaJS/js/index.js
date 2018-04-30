window.onload = function () {
  Formio.setBaseUrl("http://localhost:3001");
  Formio.setProjectUrl("http://localhost:3001");
  Formio.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVhY2RmZTMyZTM5OGEzMjJhOGExMTliNCJ9LCJmb3JtIjp7Il9pZCI6IjVhY2RmZTI4ZTM5OGEzMjJhOGExMTlhYSJ9LCJpYXQiOjE1MjQ3NDA5MjIsImV4cCI6MTUyNDc1NTMyMn0.SiOtVjKo4dQMc5qJCQw0zA-JYqGLiQJKBWXCuQgT1mc")

  Formio.currentUser().then(function (user) {
    console.log(user);
  });


  Formio.createForm(document.getElementById('formio'), {
    "type": "form",
    "tags": [],
    "access": [
      {
        "roles": [
          "5acdfe28e398a322a8a119a6",
          "5acdfe28e398a322a8a119a7",
          "5acdfe28e398a322a8a119a8"
        ],
        "type": "read_all"
      }
    ],
    "submissionAccess": [],
    "owner": "external",
    "components": [
      {
        "type": "panel",
        "title": "Page 1",
        "isNew": false,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Text",
            "key": "flatTextbox",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "top",
            "tags": [],
            "properties": {}
          },
          {
            "clearOnHide": true,
            "input": true,
            "tableView": true,
            "key": "page1Form1",
            "src": "",
            "reference": true,
            "form": "5ae1865755c73f05a0f94b0a",
            "path": "",
            "label": "form1",
            "protected": false,
            "unique": false,
            "persistent": true,
            "type": "form",
            "project": "",
            "labelPosition": "top",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "label": "log",
            "tableView": false,
            "key": "page1Log",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "custom",
            "disableOnInvalid": false,
            "theme": "primary",
            "type": "button",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {},
            "custom": "console.log(data)"
          }
        ],
        "input": false,
        "key": "page1",
        "clearOnHide": false,
        "theme": "default",
        "tableView": false,
        "hideLabel": true
      },
      {
        "type": "panel",
        "title": "Page 2",
        "isNew": false,
        "components": [
          {
            "key": "page2Content2",
            "label": "Content",
            "input": false,
            "tag": "h1",
            "attrs": [
              {
                "value": "",
                "attr": ""
              }
            ],
            "className": "",
            "content": "attachment type as Form",
            "type": "htmlelement",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {},
            "hideLabel": true
          },
          {
            "clearOnHide": true,
            "input": true,
            "tableView": true,
            "key": "page2Attachmenttypeasform",
            "src": "",
            "reference": true,
            "form": "5ae1a2da55c73f05a0f94b1c",
            "path": "",
            "label": "Attachment type as form",
            "protected": false,
            "unique": false,
            "persistent": true,
            "type": "form",
            "project": "",
            "labelPosition": "top",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "label": "log",
            "tableView": false,
            "key": "page2Log",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "custom",
            "disableOnInvalid": false,
            "theme": "primary",
            "type": "button",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {},
            "event": "",
            "custom": "console.log(data)"
          }
        ],
        "input": false,
        "key": "page2",
        "clearOnHide": false,
        "theme": "default",
        "tableView": false,
        "hideLabel": true,
        "breadcrumb": "default",
        "tags": [],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {}
      },
      {
        "type": "panel",
        "title": "Page 3",
        "isNew": false,
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Text",
            "key": "page3Text",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "top",
            "tags": [],
            "properties": {}
          }
        ],
        "input": false,
        "key": "page3",
        "clearOnHide": false,
        "theme": "default",
        "tableView": false,
        "hideLabel": true
      },
      {
        "clearOnHide": true,
        "input": true,
        "tableView": true,
        "key": "undefinedHospitalSpec",
        "src": "",
        "reference": true,
        "form": "5adf0a1f55c73f05a0f94a92",
        "path": "",
        "label": "hospitalSpec",
        "protected": false,
        "unique": false,
        "persistent": true,
        "type": "form",
        "project": "",
        "labelPosition": "top",
        "tags": [],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {}
      },
      {
        "autofocus": false,
        "input": true,
        "label": "Submit",
        "tableView": false,
        "key": "submit",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button"
      }
    ],
    "created": "2018-04-24T09:43:52.337Z",
    "_id": "5adefc5855c73f05a0f94a83",
    "display": "wizard",
    "name": "TestDatagridForm",
    "path": "testdatagridform",
    "title": "Test Data grid form",
    "modified": "2018-04-26T10:19:27.850Z",
    "machineName": "TestDatagridForm"
  }, {
      readOnly: "true",
      viewOnly: "true",
      inputsOnly: "true",
      breadcrumbSettings: {
        buttonSettings: { showNext: "false" }
      }
    }).then(function (form) {
      //console.log(form);
      //form.submission = { data: { "page1Form1": { "owner": "5acdfe32e398a322a8a119b4", "roles": [], "access": [], "externalIds": [], "_id": "5ae1cb3155c73f05a0f94b3e", "created": "2018-04-26T12:50:57.570Z", "data": { "undefinedText": "gfdgfd", "undefinedSelect": "1" }, "form": "5ae1865755c73f05a0f94b0a", "modified": "2018-04-26T12:50:57.570Z" }, "page2Attachmenttypeasform": { "data": {} } } };

      // nextPage event
      form.on('nextPage', (render) => {
        // console.log("nextPage --> data ==> ", form.data);
        // console.log("nextPage --> render ==>", render);
      });

      // prevPage event
      form.on('prevPage', (render) => {
        // console.warn("prevPage --> data ==> ", form.data);
        // console.warn("prevPage --> render ==>", render);
      });

      // submit event
      form.on('submit', (submission) => {
        console.log(submission);
      });
    });
};