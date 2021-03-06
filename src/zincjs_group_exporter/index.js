var physiomeportal = require("physiomeportal");

var main = function()  {
  var UIIsReady = true;
  var organViewer = undefined;
  var _this = this;
  
  
  this.readModels = function(file) {
        var argumentString = "inputs=" + file;
        var finalURL = "./getZincJSModels?" + argumentString;
        organViewer.loadOrgansFromURL(finalURL, undefined, undefined, "heart", "static/view.json");
  }

  /**
   * Initialise all the panels required for PJP to function correctly.
   * Modules used incude - {@link PJP.ModelsLoader}, {@link PJP.BodyViewer},
   * {@link PJP.OrgansViewer}, {@link PJP.TissueViewer}, {@link PJP.CellPanel}
   * and {@link PJP.ModelPanel}.
   */
  var initialiseMain = function() {
      organViewer = new physiomeportal.OrgansViewer();
      var parent = document.getElementById("MAPcorePortalArea");
      var organViewerDialog = new physiomeportal.OrgansViewerDialog(organViewer, parent);
      organViewer.setName("organViewer");
      organViewerDialog.setPosition(0, 0);
      organViewerDialog.setWidth("100%");
      organViewerDialog.setHeight("100%");
      organViewerDialog.hideCloseButton();
      organViewerDialog.dock();
      organViewerDialog.hideTitlebar();
      organViewerDialog.destroyModuleOnClose = true;
  }

  var initialise = function() {
    initialiseMain();
  }

  initialise();
}

var createVisualisation = function() {
    var myModule = new main();
    myModule.readModels("static/test.exf");

}

window.document.addEventListener('DOMContentLoaded', createVisualisation);
