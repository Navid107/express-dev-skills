const res = require('express/lib/response');
const Skill = require('../models/skills'); // < Models are always capitalized
// models are a representation of our data



module.exports = {
	index: index,
	show: show,
	new: newSkill,
	create: create,
	delete: deleteSkill
  };

  function deleteSkill(req, res){
	Skill.deleteOne(req.params.id);
	res.redirect('/skills');
  }

function create(req, res){
	console.log(req.body, " <--- will be the contents of the form");
	Skill.create(req.body); // <-- Model says create a new skill in the database
	//for posts we usually redirect the client to the index page
	res.redirect('/skills') // /skills is a route, tells the client to make a request to /todos
}
  
// since new is a reserved keyword call the function newResourceName
// in our case newSkill
function newSkill(req, res){
	res.render('skills/new') // <-- looks in our views folder
}


function index(req, res) { // <--- index says getAll of whatever the resource in this case todos
	res.render('skills/index', {
	  skills: Skill.getAll(),
	  mostRecentSkills: req.time
	});
}

function show(req, res){
	console.log(req.params)
	res.render('skills/show', {
		skill: Skill.getOne(req.params.id) // <- where is the .id coming from ?
	})
}