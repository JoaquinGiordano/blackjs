
    //Convert a string to base64
    String.prototype.toBase64 = function () {
        return btoa(this);
    }

    //Convert a base64 to text
    String.prototype.toText = function () {
        return atob(this);
    }
