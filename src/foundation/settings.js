
'use strict';

module.exports = {
	replace: {
		'{repo}': 'ink.js',
		'{licence_type}': 'MIT',
		'{account}': 'zhorton34',
		'{author}': 'Zachary Horton',
		'{company_name}': 'Clean Code Studio',
		'{company_link}': 'https://www.youtube.com/channel/UCq0m4ebGqurYQLwD-1aYsvg',
		'{version_control_ext}': '.git',
		'{version_control_short_name}': 'git',
		'{version_control_host}': 'github.com',
		'{playground_url}': 'https://codepen.io/zhorton34/pen/zYvWZYz',
		'{description}': 'Ink.js is a simplified wrapper/scaffolding package making it easy to setup, test, and document npm packages',
		'{default_export}': 'inc',
		'{default_prototype_name}': 'MakeInc'
	},


	preset: {
		bundle: {
			badges: ['travis', 'dependencies', 'downloads', 'license', 'prs', 'version'],
			install: ['dev', 'cdn', { title: 'Install', table_of_contents: true }],
			examples: ['cdn', 'playground', 'vue', { title: 'Examples', table_of_contents: true }],
			api: []
		},

		docs: {
			api: [''],
			support: [''],
		},
		test: {
			api: ['', { }],
			support: ['', {}],
		},

		badges: ['travis', 'dependencies', 'downloads', 'license', 'prs', 'version'],
		install: ['dev', 'cdn', { title: 'Install' }],
		examples: ['playground', 'cdn'],
		change_logs: ['1.0.0', { title: 'Change Logs' }],
	},

	make: {
		test: {
			stub: ``,
			location: './test/tests.js',
		}
	},

	package: {
		"scripts": {
			"all": "npm run build && npm test",
			"pretest": "npm run transpile",
			"test": "mocha test/tests.js",
			"transpile": "babel src --quiet --out-dir dist",
			"readme": "node bundler/bundle.js",
			"bundle": "webpack-cli dist/index.js --output build/index.js --mode development --output-library ink",
			"uglify": "uglifyjs build/index.js --compress --mangle --output build/index.min.js",
			"build": "npm run transpile && npm run bundle && npm run uglify && npm run readme",
			"coverage": "npm run transpile && nyc mocha test/tests.js",
			"reporter": "nyc report --reporter=html",
			"docs:dev": "vuepress dev docs",
			"docs:build": "vuepress build docs",
			"prepublishOnly": "npm run all"
		},

		"keywords": [
			"markdown",
			"markdown api",
			"bundler",
			"stub",
			"scaffold generator",
			"cli package",
			"ink js",
			"js",
			"js markdown wrapper"
		],

		"devDependencies": {
			"@babel/cli": "^7.2.3",
			"@babel/core": "^7.2.2",
			"@babel/polyfill": "^7.8.3",
			"@babel/preset-env": "^7.9.6",
			"benchmark": "^2.1.0",
			"chai": "^4.1.2",
			"hoax.js": "^1.0.0",
			"mocha": "^3.5.2",
			"nyc": "^11.0.2",
			"uglify-js": "^3.2.2",
			"webpack": "^4.43.0",
			"webpack-cli": "^3.3.11"
		}
	}
};
