module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('container', {
        fbtemplate: 'formio/formbuilder/container.html',
        views: [
          {
            name: 'Display',
            template: 'formio/components/container/display.html'
          }, {
            name: 'API',
            template: 'formio/components/common/api.html'
          },
          {
            name: 'Conditional',
            template: 'formio/components/common/conditional.html'
          }
        ],
        documentation: 'http://help.form.io/userguide/#container',
        noDndOverlay: true,
        confirmRemove: true
      });
    }
  ]);

  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/container/display.html',
        '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="hideLabel"></form-builder-option>' +
        '<form-builder-option-label-position></form-builder-option-label-position>' +
        '<form-builder-option property="tooltip"></form-builder-option>' +
        '<form-builder-option property="errorLabel"></form-builder-option>' +
        '<form-builder-option property="customClass"></form-builder-option>' +
        '<form-builder-option property="clearOnHide"></form-builder-option>' +
        '<form-builder-option property="protected"></form-builder-option>' +
        '<form-builder-option property="persistent"></form-builder-option>' +
        '<form-builder-option property="encrypted" class="form-builder-premium"></form-builder-option>' +
        '<form-builder-option property="tableView"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/formbuilder/container.html',
        '<fieldset>' +
        '<label ng-if="component.label && component.labelPosition !== \'bottom\'" class="control-label" ng-style="getLabelStyles(component)">' +
          '{{ component.label }} ' +
          '<formio-component-tooltip></formio-component-tooltip>' +
        '</label>' +
        '<form-builder-list component="component" form="form" options="options" formio="::formio" ng-style="getInputGroupStyles(component)"></form-builder-list>' +
        '<label ng-if="component.label && component.labelPosition === \'bottom\'" class="control-label control-label--bottom" ng-style="getLabelStyles(component)">' +
          '{{ component.label }} ' +
          '<formio-component-tooltip></formio-component-tooltip>' +
        '</label>' +
        '</fieldset>'
      );
    }
  ]);
};
