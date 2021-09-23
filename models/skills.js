const skills = [
    {id: 123456, skill: 'Navid S', done: false},
    {id: 654321, skill: 'Learn Express', done: true},
    {id: 098765, skill: 'Buy Milk', done: false},
    {id: 098723, skill: 'Bob Marly', done: true},
    {id: 666666, skill: 'Juan carlo', done: false},
    {id: 545454, skill: 'Papi Jose', done: true}
    ];
    
    module.exports = {
      getAll,
      getOne,
      create,
      deleteOne
    };
    function deleteOne(id) {
      // Find the index based on the id of the todo object
      const idx = skills.findIndex(skill => skill.id === parseInt(id));
      skills.splice(idx, 1);
    }
    
    function getAll() {
      return skills;
    }
    
    function getOne(id) {
      // Use the Array.prototype.find iterator method
      return skills.find(skill => skill.id === parseInt(id));
      }
    
      // fake data, fake Model, Model is the representation of our data
    
      function create(skill) {
      // Add the id
      skill.id = Date.now() % 1000000;
      // New todos wouldn't be done :)
      skill.done = false;
      skills.push(skill);
      }