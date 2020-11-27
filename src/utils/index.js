export const makeSingleton = (makeInstantFunc, dataInit) => {
    return (function () {
        var instance;
        return {
            getInstance: function () {
                // check if instance is available
                if (!instance) {
                    instance = makeInstantFunc(dataInit);
                    delete instance.constructor; // or set it to null
                }
                return instance;
            }
        }
    })()
}