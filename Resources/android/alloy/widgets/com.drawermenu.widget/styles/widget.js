function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.drawermenu.widget/" + s : s.substring(0, index) + "/com.drawermenu.widget/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0005,
    key: "WebView",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        disableBounce: true
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "ScrollView",
    style: {
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0007,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "header",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#469AE7",
        font: {
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "content",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "metalabel",
    style: {
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10
        },
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "menuview",
    style: {
        backgroundColor: "#cacaca",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "mainview",
    style: {
        backgroundColor: "red",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "mainviewheader",
    style: {
        top: "0",
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#cacaca"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "menubutton",
    style: {
        left: "0",
        borderWidth: 1,
        borderColor: "#000",
        width: "40dp",
        height: "40dp",
        visible: true
    }
} ];