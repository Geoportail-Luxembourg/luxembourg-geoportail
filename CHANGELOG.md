## <small>0.0.0 (2023-05-11)</small>

* chore(ol): downgrade ol 7.3.0 to 6.5.0, for geoportalv3 compatibility on OlMap integration
* chore(vite): update version to enable usage of cssMinify option

Updated Vite from v3 to v4, now targetting modern browsers (enabling the usage of BigInt and **nullish coalescing operator)**.

⚠️ This means you must handle support of these by adding the right loaders in your project if you need to support older browsers (eg. use `loader: 'babel-loader'` in your webpack config).
* chore(vue): update version, from 3.2.45 to 3.3.1 

