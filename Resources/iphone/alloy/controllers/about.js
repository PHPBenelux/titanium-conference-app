function Controller() {
    function openDetail(e) {
        alert("row index = " + JSON.stringify(e.index));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.about = Ti.UI.createWindow({
        title: "Testview",
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.about.add($.__views.table);
    openDetail ? $.__views.table.addEventListener("click", openDetail) : __defers["$.__views.table!click!openDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var data = [];
    var httpClient = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("Unable to retrieve the data");
        }
    });
    httpClient.open("GET", "http://conference.phpbenelux.eu/2014/api/phpbenelux/crew/");
    httpClient.send();
    httpClient.onload = function() {
        var json = JSON.parse(this.responseText);
        0 == json.length && ($.table.headerTitle = "No data");
        var crew = json.posts;
        for (var i = 0, iLen = crew.length; iLen > i; i++) {
            data.push(Alloy.createController("crewrow", {
                picture: crew[i].picture,
                name: crew[i].post_title
            }).getView());
            Ti.API.info(crew[i].picture);
            Ti.API.info(crew[i].post_title);
        }
        $.table.setData(data);
    };
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;