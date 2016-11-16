module.exports = {
	"services":[{
		"name":"arth",
		"path":"./arithmetic/arth.service.js",
		"manDependencies":["add","sub","mul","div"]
	},
	{
		"name":"add",
		"path":"./arithmetic/add.service.js",
	},
	{
		"name":"sub",
		"path":"./arithmetic/sub.service.js",
	},
	{
		"name":"mul",
		"path":"./arithmetic/mul.service.js",
	},{
		"name":"div",
		"path":"./arithmetic/div.service.js",
	},
	]

	
};