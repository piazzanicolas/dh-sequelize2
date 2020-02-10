const db = require ('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const Actors = db.actors;

module.exports = {
    detail: (req, res) => {
		Actors
			.findByPk(req.params.id, {
                include: ['movies']
            })
			.then (actor => {
				return res.render('actors/detail', {actor});
			})
			.catch(error => res.send(error));
    }
};