function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.loading/" + s : s.substring(0, index) + "/com.appcelerator.loading/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0005,
    key: "Window",
    style: {
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "WebView",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        disableBounce: true
    }
}, {
    isApi: true,
    priority: 1000.0007,
    key: "ScrollView",
    style: {
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0008,
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
        backgroundColor: "white"
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
    key: "loading",
    style: {
        height: 20,
        width: 20,
        images: [ "/images/com.appcelerator.loading/00.png", "/images/com.appcelerator.loading/01.png", "/images/com.appcelerator.loading/02.png", "/images/com.appcelerator.loading/03.png", "/images/com.appcelerator.loading/04.png", "/images/com.appcelerator.loading/05.png", "/images/com.appcelerator.loading/06.png", "/images/com.appcelerator.loading/07.png", "/images/com.appcelerator.loading/08.png", "/images/com.appcelerator.loading/09.png", "/images/com.appcelerator.loading/10.png", "/images/com.appcelerator.loading/11.png" ]
    }
} ];