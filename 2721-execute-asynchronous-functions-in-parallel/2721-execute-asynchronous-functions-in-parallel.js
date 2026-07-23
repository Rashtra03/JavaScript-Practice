/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
     return new Promise((resolve, reject) => {
        const res = [];
        let count = 0;

        if (functions.length === 0) {
            resolve([]);
            return;
        }

        functions.forEach((fn, i) => {
            fn()
                .then(value => {
                    res[i] = value;
                    count++;

                    if (count === functions.length) {
                        resolve(res);
                    }
                })
                .catch(reject);
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */