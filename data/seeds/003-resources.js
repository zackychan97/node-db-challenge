
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: "Linux Distro", description: 'Good OS for development'},
        { name: "Arctic Flask", description: 'Holds water and keep sit cold'},
        { name: "Apple Music", description: 'What I listen to music on.'}
      ]);
    });
};
