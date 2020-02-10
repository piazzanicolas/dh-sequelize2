const db = require ('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const Movies = db.movies;

module.exports = {
    detail: (req, res) => {
		Movies
			.findAll({
                include: ['genre'],
                where:{
					genre_id: req.params.id
				}
            })
			.then (movies => {
				return res.render('genres/detail', {movies});
			})
			.catch(error => res.send(error));
    }
};