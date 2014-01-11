exports.cachedImageView = function(imageDirectoryName, url, imageViewObject) {
    if (!url || "" == url) return;
    var filename = url.split("/");
    filename = filename[filename.length - 1];
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageDirectoryName, filename);
    if (file.exists()) imageViewObject.image = file.nativePath; else {
        var g = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageDirectoryName);
        g.exists() || g.createDirectory();
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            if (200 == xhr.status) {
                file.write(xhr.responseData);
                imageViewObject.image = file.nativePath;
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }
};